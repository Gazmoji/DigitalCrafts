const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("./schemas/user");

app.use(express.json());

app.use(cors());

app.use(express.urlencoded());

mongoose
  .connect(
    "mongodb+srv://georgeangelidis07:wnExIB86Aj2JBwR6@cluster0.bxxwyne.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/register-user", (req, res) => {
  res.json("register");
});

app.get("/login", (req, res) => {
  res.json("login");
  res.redirect("/api/books");
});

let books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    country: "US",
    imgsrc: `https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg`,
  },
  {
    id: 2,
    title: "Harry Potter",
    author: "J.K. Rowling",
    country: "US",
    imgsrc: `https://m.media-amazon.com/images/I/71u-cpucTRL._AC_UF1000,1000_QL80_.jpg`,
  },
  {
    id: 3,
    title: "The Decleration of Independence",
    author: "Thomas Jefferson, John Adams, etc.",
    country: "US",
    imgsrc:
      "https://daily.jstor.org/wp-content/uploads/2016/07/declaration1050x700.jpg",
  },
];

app.post("/register-user", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username: username,
    password: hashedPassword,
  });

  await user.save();
  res.json({ success: true });
});

app.post("/login-user", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let user = await User.findOne({ username: username });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      if (req.session) {
        req.session.username = username;
        req.session.userid = user._id;
      }
      res.json({ success: true });
    } else {
      res.redirect("login");
    }
  }
});

app.post("/api/books", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const country = req.body.country;
  const imgsrc = req.body.imgsrc;

  const book = {
    id: books.length + 1,
    title: title,
    author: author,
    country: country,
    imgsrc: imgsrc,
  };
  books.push(book);

  res.json(book);
});

app.delete("/api/books/:bookid", (req, res) => {
  const id = req.params.bookid;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));
  if (bookIndex !== -1) {
    return books.splice(bookIndex, 1);
  }
});

app.post("/api/post/update", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const country = req.body.country;
  const imgsrc = req.body.imgsrc;

  const book = {
    id: books.length + 1,
    title: title,
    author: author,
    country: country,
    imgsrc: imgsrc,
  };
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(8080, () => {
  console.log("Server is running...");
});

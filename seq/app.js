const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const models = require("./models");
const comments = require("./models/comments");
require("dotenv").config();
const { Op } = require("sequelize");
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("js"));

app.use(express.static("css"));

app.engine("mustache", mustacheExpress());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

let chatMessages = [];
const count = io.engine.clientsCount;

io.on("connection", (socket) => {
  console.log("You have connected...");
  count;
  io.emit("General-Joined", chatMessages, count);

  socket.on("General", (chat) => {
    chatMessages.push(chat);
    io.emit("General", chat);

    socket.on("General-Left", () => {
      console.log("You have disconncted...");
      io.emit("General-Left", count);
    });
  });
});

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
});

app.get("/index", async (req, res) => {
  const posts = await models.Blog.findAll({
    include: [{ model: models.Comments, as: "comments" }],
  });
  res.render("index", { posts: posts });
});

app.post("/search", async (req, res) => {
  const searchQuery = req.body.searchbox;
  const posts = await models.Blog.findAll({
    where: {
      title: { [Op.like]: `%${searchQuery}%` },
    },
    include: [{ model: models.Comments, as: "comments" }],
  });
  res.render("index", { posts: posts });
});

app.post("/add-blog", async (req, res) => {
  const newPost = await models.Blog.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  });
  const _ = await newPost.save();
  res.redirect("/index");
});

app.post("/delete-post", async (req, res) => {
  await models.Blog.destroy({
    where: {
      id: parseInt(req.body.id),
    },
  });
  res.redirect("/index");
});

app.post("/add-comment", async (req, res) => {
  const addComment = await models.Comments.build({
    title: req.body.commentTitle,
    body: req.body.commentBody,
    post_id: parseInt(req.body.post_id),
  });

  const _ = await addComment.save();
  res.redirect("/index");
});

app.post("/delete-comment", async (req, res) => {
  await models.Comments.destroy({
    where: {
      id: parseInt(req.body.commentId),
    },
  });
  res.redirect("/index");
});

app.post("/filterDate", async (req, res) => {
  if (req.body.filterDate === "recent") {
    const posts = await models.Blog.findAll({
      include: {
        model: models.Comments,
        as: "comments",
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("index", {
      posts: posts,
    });
  }

  if (req.body.filterDate === "oldest") {
    const posts = await models.Blog.findAll({
      include: {
        model: models.Comments,
        as: "comments",
      },
      order: [["createdAt", "ASC"]],
    });
    res.render("index", {
      posts: posts,
    });
  }
});

app.post("/filter", async (req, res) => {
  const filteredPosts = await models.Blog.findAll({
    where: {
      category: req.body.category,
    },
  });
  let filteredArr = [];
  for (let i = 0; i < filteredPosts.length; i++) {
    const postInfo = {
      id: filteredPosts[i].dataValues.id,
      title: filteredPosts[i].dataValues.title,
      body: filteredPosts[i].dataValues.body,
      categories: filteredPosts[i].dataValues.category,
    };
    filteredArr.push(postInfo);
  }
  res.render("index", { posts: filteredArr });
});

http.listen(process.env.PORT, () => {
  console.log("Server is running...");
});

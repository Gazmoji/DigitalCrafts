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
const frontPageController = require("../seq/controllers/frontPageController");
const router = require("../expressRouters/routes/trips");

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

router.get("/chat", frontPageController.chat);
router.get("/index", frontPageController.index);
router.post("/search", frontPageController.search);
router.post("/add-blog", frontPageController.addblog);
router.post("/delete-post", frontPageController.deletepost);
router.post("/add-comment", frontPageController.addcomment);
router.post("/delete-comment", frontPageController.deletecomment);
router.post("/filterDate", frontPageController.filterDate);
router.post("/filter", frontPageController.filter);

module.exports = router;

http.listen(process.env.PORT, () => {
  console.log("Server is running...");
});

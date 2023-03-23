const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const models = require("./models");

app.engine("mustache", mustacheExpress());

app.use(
  session({
    secret: "gazmoji",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

app.get("/index", async (req, res) => {
  const posts = await models.Blog.findAll({});
  res.render("index", { posts: posts });
});

app.post("/add-blog", async (req, res) => {
  const newPost = await models.Blog.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  });
  await newPost.save();
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
  const newComment = await models.Blog.build({
    comment: req.body.comment,
  });
  await newComment.save();
  res.redirect("/index");
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

app.listen(8080, () => {
  console.log("Server is running...");
});

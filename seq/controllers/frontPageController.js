const models = require("../models");
const comments = require("../models/comments");

const chat = (req, res) => {
  res.sendFile(__dirname + "/chat.html");
};

const index = async (req, res) => {
  const posts = await models.Blog.findAll({
    include: [{ model: models.Comments, as: "comments" }],
  });
  res.render("index", { posts: posts });
};

const search = async (req, res) => {
  const searchQuery = req.body.searchbox;
  const posts = await models.Blog.findAll({
    where: {
      title: { [Op.like]: `%${searchQuery}%` },
    },
    include: [{ model: models.Comments, as: "comments" }],
  });
  res.render("index", { posts: posts });
};

const addblog = async (req, res) => {
  const newPost = await models.Blog.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  });
  const _ = await newPost.save();
  res.redirect("/index");
};

const deletepost = async (req, res) => {
  await models.Blog.destroy({
    where: {
      id: parseInt(req.body.id),
    },
  });
  res.redirect("/index");
};

const addcomment = async (req, res) => {
  const addComment = await models.Comments.build({
    title: req.body.commentTitle,
    body: req.body.commentBody,
    post_id: parseInt(req.body.post_id),
  });

  const _ = await addComment.save();
  res.redirect("/index");
};

const deletecomment = async (req, res) => {
  await models.Comments.destroy({
    where: {
      id: parseInt(req.body.commentId),
    },
  });
  res.redirect("/index");
};

const filterDate = async (req, res) => {
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
};

const filter = async (req, res) => {
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
};

module.exports = {
  chat,
  index,
  search,
  addblog,
  deletepost,
  addcomment,
  deletecomment,
  filterDate,
  filter,
};

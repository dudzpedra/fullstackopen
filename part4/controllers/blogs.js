const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs)
});

blogsRouter.get("/:id", async (req, res, next) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    res.json(blog)
  } else {
    res.status(404).end();
  }
});

blogsRouter.post("/", async (req, res) => {
  const body = req.body;
  if (body.title && body.author) {
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
    });
    const savedBlog = await blog.save()
    res.status(201).json(savedBlog)  
  } else {
    res.status(400).end()
  }
});

module.exports = blogsRouter;

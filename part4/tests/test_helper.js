const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "My first blog",
    author: "Dudz Pedra",
    url: "https://github.com/dudzpedra",
    likes: 13,
  },
  {
    title:
      "Neoliberalismo e qualidade da nossa saúde mental: afinal, existe relação?",
    author: "Dandara Coêlho",
    url: "https://elasnopoder.org/blog/neoliberalismo-e-qualidade-da-nossa-saude-mental-afinal-existe-relacao/",
    likes: 130,
  },
];

const nonExistingId = async () => {
    const blog = new Blog({ title: 'should remove this soon', author: 'dudinho'})
    await blog.save()
    await blog.remove()
    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb
}
const mongoose = require("mongoose");
const helper = require('./test_helper')
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blog");

beforeEach(async () => {
  await Blog.deleteMany({});
  for (let blog of helper.initialBlogs) {
      let blogObject = new Blog(blog)
      await blogObject.save()
  }
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("there are 2 blogs", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body).toHaveLength(2);
});

test("the first blog is by Dudz Pedra", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body[0].author).toBe("Dudz Pedra");
});

test("the second blog is by Dandara Coêlho", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body[1].author).toBe("Dandara Coêlho");
});

test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body).toHaveLength(helper.initialBlogs.length);
});

test("a specific blog is returned", async () => {
  const response = await api.get("/api/blogs");
  const titles = response.body.map((b) => b.title);
  expect(titles).toContain("My first blog");
});

test("a valid blog can be added", async () => {
  const newBlog = {
    title: "My first body says Eu dou muito risada com meu papai",
    author: "Olívia Pedra",
    url: "https://github.com/dudzpedra/react-portfolio",
    likes: 2019,
  };
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

  const titles = blogsAtEnd.map((b) => b.title);
  expect(titles).toContain(
    "My first body says Eu dou muito risada com meu papai"
  );
});

test("blog without title and author is not added", async () => {
  const newBlog = {
      titulo: 'testando'
  };
  await api.post("/api/blogs").send(newBlog).expect(400);
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
});

afterAll(() => {
  mongoose.connection.close();
});

const Blog = require("../src/models/Blog");

const createBlog = (req, res) => {
  const blog = new Blog({
    topic: req.body.topic,
    description: req.body.description,
    posted_by: req.body.name,
    posted_at: new Date(),
  });
  blog
    .save()
    .then(() => res.redirect("/blog"))
    .catch((err) => err);
};

const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blog" });
    })
    .catch((err) => res.render("404", { title: "404" }));
};

const updateBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, {
    topic: req.body.topic,
    description: req.body.description,
    posted_at: new Date(),
    posted_by: req.body.name,
  })
    .then(() => {
      res.redirect("/blog");
    })
    .catch((err) => res.render("404", { title: "404" }));
};

const readBlog = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "Blogs", blogs: result });
    })
    .catch((err) => err);
};

const blog_create_page = (req, res) => {
  res.render("blogs/create", { title: "Create" });
};

const blog_details_page = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { title: "Details", details: result });
    })
    .catch((err) => res.render("404", { title: "404" }));
};

const blog_edit_put = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(() => {
      res.json({ redirect: `/blog/edit/${id}` });
    })
    .catch((err) => res.render("404", { title: "404" }));
};

const blog_edit_get = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/edit", { title: "Edit", blog: result });
    })
    .catch((err) => res.render("404", { title: "404" }));
};

const blog_search = (req, res) => {
  const searchText = req.body.search.trim();
  if (searchText.length) {
    Blog.find({ $text: { $search: `${searchText}` } })
      .then((result) => {
        res.render("blogs/index", { title: "Blogs", blogs: result });
      })
      .catch((err) => res.render("404", { title: "404" }));
  } else {
    res.redirect("/");
  }
};

module.exports = {
  createBlog,
  readBlog,
  updateBlog,
  deleteBlog,
  blog_create_page,
  blog_details_page,
  blog_edit_get,
  blog_edit_put,
  blog_search,
};

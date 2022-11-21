const express = require("express");
const app = express();

// Import routes
const blogRoute = require("./routes/blogRoutes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//Router Middlewares
app.get("/", (req, res) => {
  res.redirect("/blog");
});

app.use(express.json());
app.use("/blog", blogRoute);

// app.use((req, res) => {
//   res.render("404", { title: "404" });
// });

module.exports = app;

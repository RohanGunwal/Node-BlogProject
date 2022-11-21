const router = require("express").Router();
const blogController = require("../../controllers/blogController");

// Your routing code goes here
router.post("/search", blogController.blog_search);
router.get("/", blogController.readBlog);
router.post("/", blogController.createBlog);
router.delete("/:id", blogController.deleteBlog);
router.post("/edit/:id", blogController.updateBlog);
router.get("/create", blogController.blog_create_page);
router.get("/details/:id", blogController.blog_details_page);
router.get("/edit/:id", blogController.blog_edit_get);
router.put("/:id", blogController.blog_edit_put);

module.exports = router;

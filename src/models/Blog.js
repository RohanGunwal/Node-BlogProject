const mongooose = require("mongoose");

const blogSchema = new mongooose.Schema(
  {
    topic: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    posted_at: { type: Date, required: true },
    posted_by: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongooose.model("blogs", blogSchema);

module.exports = Blog;

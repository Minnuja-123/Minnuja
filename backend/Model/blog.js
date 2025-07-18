const mongoose = require("mongoose"); 
const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
  category: String
});



const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;


const express = require('express')
const mongoose = require('mongoose');
const blogmodel = require('./Model/blog')
var cors = require ('cors')
// requiring db
require('./db')
const app = express()
const port = 3000
app.use(express.json());
app.use(cors())
app.post('/', async(req,res)=> {
    console.log("h")
    try {
        await blogmodel(req.body).save()
        res.status(200).send("Blog added")
    }
    
 catch (error) {
  res.send(error)  
} })
app.get("/", async (req, res) => {
  try {
    // Retrieve all blog posts from the database
    let data = await blogmodel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    // Find the blog post by ID and delete it
    const deletedPost = await blogmodel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.send({ message: "Post deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});
app.put("/:id", async (req, res) => {
  try {
    // Find the blog post by ID and update it with the request body
    const updatedPost = await blogmodel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedPost) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.send({ message: "Post updated", post: updatedPost });
  } catch (err) {
    res.status(500).send(err);
  }
});


// app.get('/', (req, res) => {
//   res.send('Hello World!!!!')
// })
// app.get('/l', (req, res) => {
//   res.send('welcome to login page')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

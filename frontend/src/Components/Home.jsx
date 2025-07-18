import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Home.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    var navigate = useNavigate();
      const [posts, setPosts] = useState([]);
        useEffect(()=>{
            axios
                .get("http://localhost:3000/")
                .then((res)=>{
                    console.log(res);
                    setPosts(res.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },[])
   const handleDelete = (id)=>{
    console.log(id)
    axios
        .delete(`http://localhost:3000/${id}`)
        .then((res)=>{
            console.log(res)
         alert(res.data.message)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)})
           
   };   
   const handleEdit = (post)=>{
    navigate('/add',{state:post})
   }
  return (
     <div className="card-container">
      {posts.map((post) => (
        <div key={post._id} className="card">
          <img src={post.img_url} alt={post.title} />
          <div className="card-content">
            <small>{post.category || "Uncategorized"}</small>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div
              className="card-buttons"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button onClick={()=>{handleDelete(post._id)}}>
                <DeleteIcon style={{ verticalAlign: "middle" }} />
              </Button>
              <Button onClick={()=>{handleEdit(post)}}>>
                <EditIcon style={{ verticalAlign: "middle" }} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home


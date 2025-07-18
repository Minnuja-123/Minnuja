import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Add = (props) => {
  var navigate = useNavigate();
  var location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      setInputs({
        title: location.state.title || "",
        content: location.state.content || "",
        img_url: location.state.img_url || "",
        category: location.state.category || "",
      });
    }
  }, [location.state]);

  var [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
    category: "",
  });

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in", inputs);
  };

  const addData = () => {
    if (location.state) {
      axios
        .put(`http://localhost:3000/${location.state._id}`, inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3000/", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Title"
            onChange={inputHandler}
            name="title"
            value={inputs.title}
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="content"
            onChange={inputHandler}
            name="content"
            value={inputs.content}
            multiline={4}
          />
          <TextField
            variant="outlined"
            placeholder="category"
            onChange={inputHandler}
            name="category"
            value={inputs.category}
          />
          <TextField
            variant="outlined"
            placeholder="image url"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
          />

          <Button variant="contained" color="secondary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;


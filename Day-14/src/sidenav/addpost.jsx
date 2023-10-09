import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import "./signup.css";
const AddPost = () => {
  const [img, setImg] = useState("");
  const [caption, setCaption] = useState("");

  async function handleHello(hello) {
    hello.preventDefault();
    try {
      const config = {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NjQ4NDA0NiwiZXhwIjoxNjk2NDg1NDg2fQ.L_dI4toOvjIK4M0J5nsN8l_5zby5Rc2wld1DiU2AUCs`,
          'content-type':"application/json"
        },
      };
      await axios.post(
        "http://localhost:8080/postposts",
        {
          img: img,
          caption: caption,
        },
        config
      );
      // alert("Added Successfully");
      setImg("");
      setCaption("");
    } catch (err) {
      alert("Couldn't Add");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleHello}>
          <h2>Add Post</h2>
          <div>
            <label for="text">Img</label>
            <input
              type="text"
              onChange={(hello) => {
                setImg(hello.target.value);
              }}
            ></input>

            <label for="text">About</label>
            <input
              type="text"
              onChange={(hello) => {
                setCaption(hello.target.value);
              }}
            ></input>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};
export default AddPost;

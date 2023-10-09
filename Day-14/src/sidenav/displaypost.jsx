import React, { useState, useEffect } from "react";
import axios from "axios";
import "./displaypost.css";
const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from your backend API
    async function fetchPosts() {
      try {
        const response = await axios.get("Header/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTY5NjQ4NDA0NiwiZXhwIjoxNjk2NDg1NDg2fQ.L_dI4toOvjIK4M0J5nsN8l_5zby5Rc2wld1DiU2AUCs/http://localhost:8080/getposts");
        setPosts(response.data); 
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="displaying_img">
      
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img className="post_image"src={post.img} alt={post.caption} />
            <p className="post_caption">{post.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayPosts;

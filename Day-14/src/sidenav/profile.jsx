import React from "react";
import { useState } from "react";
import axios from "axios";
function Profile() {
  const [userimg, setUserImg] = useState("");
  const [username, setUserName] = useState("");

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  async function handleHello(hello) {
    hello.preventDefault();
    try {
      await axios.post("http://localhost:8080/postuser", {
        userimg: userimg,
        userame: username,
        name: name,
        bio: bio,
      });
      alert("Added Successfully");
      setUserImg("");
      setUserName("");
      setName("");
      setBio("");
    } catch (err) {
      alert("Couldn't Add");
    }
  }
  return (
    <div>
      <form onSubmit={handleHello}>
        <h2>Create Profile</h2>
        <div>
          <label for="text">Img</label>
          <input
            type="text"
            onChange={(hello) => {
              setUserImg(hello.target.value);
            }}
          ></input>
          <label for="text">UserName</label>
          <input
            type="text"
            onChange={(hello) => {
              setUserName(hello.target.value);
            }}
          ></input>
          <label for="text">Name</label>
          <input
            type="text"
            onChange={(hello) => {
              setName(hello.target.value);
            }}
          ></input>
          <label for="text">Bio</label>
          <input
            type="text"
            onChange={(hello) => {
              setBio(hello.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;

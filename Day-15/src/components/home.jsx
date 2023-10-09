import REACT from "react";
import "./home.css";
import { useSelector } from "react-redux";
import Chatbot from "../ChatBot";
import { Link } from "react-router-dom";
import Sidebar from "../sidenav/sidebar";
import profile from "../images/profile.jpg";
import Rightsidebar from "../sidenav/rightsidebar";
// import ShowPost from "./ShowPost";

function Home() {
  const posts = useSelector((state) => state.postsReducer);
  return (
    <>
      <div className="home">
        <h1 className="logout"></h1>
        <h1>Potato</h1>
        <img src={profile}></img>
      </div>
      <Sidebar />

      <Rightsidebar />
    </>
  );
}
export default Home;

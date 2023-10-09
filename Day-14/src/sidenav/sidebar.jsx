import REACT from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom';
import img2 from '../images/potatoprofile.jpg';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../images/profile.jpg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import heart from "../images/heart.png";
import post from "../images/post.png";
import explore from "../images/explore.png";
import help from "../images/help.png";
import IconMenu from "../components/iconmenu.js";
import img from '../images/thumbnail-1.webp';
import DisplayPosts from "./displaypost";
// import Profile from "./profile";
// import 
export default function Sidebar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        <>
        <div>
        <div className="home_sidebar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <p> Home</p>
          </li>

          <li>
            <img className="side" src={explore}></img>
            <p><Link to="settings" style={{color: "inherit",textDecoration:"none"}}>Settings</Link></p>{" "}
          </li>
          <li>
            <img className="side" src={help}></img>
            <p> <Link to="chat" style={{color:"inherit",textDecoration:"none"}}>Help</Link></p>
          </li>
          <li>
            <img className="side" src={heart}></img>
            <p>Notifications</p>{" "}
          </li>
          <li>
         <Link to="/addpost" style={{color:"inherit",textDecoration:"none"}}>  <img className="side" src={post}></img>
            <p> Post</p></Link> 
          </li>
          <li>
            <img className="potatoprofile" src={img2}></img>
            <p> <Link to="/profilepage" style={{color:"inherit",textDecoration:"none"}}>Profile</Link></p>
          </li>
          
        </ul>

        <div className="home_sidebar_menu" onClick={handleMenuButtonClick}>
          {isMenuOpen && (
            <div className="iconmenu">
              <IconMenu />
            </div>
          )}
          <FontAwesomeIcon icon={faBars} />
          <p> More</p>
        </div>
        </div>
        
        <DisplayPosts/>
        </div>
        </>
        
        
    );
}
import REACT from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom';

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
import img from '../images/michelle-obama-732x549-thumbnail-732x549.avif';

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
            <img className="side" src={post}></img>
            <p> Post</p>
          </li>
          <li>
          {/* <input
          className="home_search_bar"
          type="search"
          placeholder="Search"
        ></input> */}
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
        <div className="center">
          <div className="box">
            <div className="top">
              <img src={img} className="userimg" alt="" />
              <p>.acshaya.</p>
            </div>
            <div className="center1">
              <img id="centerimage" src={img} alt="" />
            </div>
            <div className="bottom">
            <img className="side" src={heart}></img>
              <p>liked by acshaya...</p>
              <h6>.acshaya. : Spanish company and image bank with its own production company that offers more than 10 million graphic resources</h6>
            </div>
          
        
            </div>
           
          </div>
          
        </div>
        </>
        
        
    );
          }
import React from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";

const HomeRight = ({suggestedUser}) => {
  const {user}=useSelector(store=>store);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img
              className="w-12 h-12 rounded-full"
              src={ user.reqUser?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
              alt=""
            />
            <div className="ml-3">
              <p>{user.reqUser?.username}</p>
              <p className="opacity-70">{user.reqUser?.username}</p>
            </div>
          </div>
         
        </div>
      

        
        <div className="opacity-60 text-xs flex items-center flex-wrap mt-10">
            <span>About</span>
            <BsDot/>
            <span>Help</span>
            <BsDot/>
            <span>Press</span>
            <BsDot/>
            <span>API</span>
            <BsDot/>
            <span>Jobs</span>
            <BsDot/>
            <span>Privacy</span>
            <BsDot/>
            <span>Terms</span>
            <BsDot/>
            <span>Locations</span>
            <BsDot/>
            <span>Language</span>
            <BsDot/>
            <span>English</span>
            <BsDot/>
            <span>Meta</span>
            <BsDot/>
            <span>Verified</span>
                
         
        </div>
      </div>
    </div>
  );
};

export default HomeRight;

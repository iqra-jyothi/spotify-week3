import { FaSpotify } from 'react-icons/fa';
import { PiMusicNotesPlusBold } from "react-icons/pi";
import { MdReviews } from "react-icons/md";
import React from "react";
import { Nav } from "react-bootstrap";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const Filter = ({ isSliderOpen }) => {
  return (
    <>
      {isSliderOpen && (
        <div
          className="filter-overlay"
          style={{
            position: "absolute",
            top: 97,
            left: 664,
            width: "300px", // Adjust the width of the filter
            height: "100vh", // Full height
            backgroundColor: "#1e1e1e", // Set background color to white
            // boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)", // Add a shadow for better visibility
            boxShadow: "-2px -4px 7px rgb(16, 161, 16)",
            zIndex: 1000, // Ensure it appears on top of other elements
            overflowY: "auto", // Allow scrolling if content overflows
            padding: "20px",
            borderRadius:"59px 0px 0px 59px",
          }}
        >
          <div className="sidebar-logo mb-4">
          {/* <img
          
            src="/images.jpeg"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          /> */}  <FaSpotify size={40} color="#1DB954" style={{marginRight:"10px"}} />
            <span style={{marginLeft: "4px"}}>YOUR VOICE</span>
          </div>
          <Nav className="flex-column">
           <Link  to="/addsong" style={{color:"white",textDecoration:"none",fontSize:"18px",marginBottom:'20px'}}> <PiMusicNotesPlusBold size={30}style={{marginRight:'15px'}}  />addsongs</Link>
           <Link  to="/viewmusic" style={{color:"white",textDecoration:"none",fontSize:"18px",marginBottom:'20px'}}><MdReviews size={30} style={{marginRight:'15px'}} />view post</Link>
           <Link  to="/whish" style={{color:"white",textDecoration:"none",fontSize:"18px",marginBottom:'20px'}}> <FcLike size={30} style={{marginRight:'15px'}} />like</Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default Filter;




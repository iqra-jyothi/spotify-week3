
import Account from './Account';
import React, { useRef } from 'react';
import { FiBell, FiUser } from "react-icons/fi";
import { Navbar, Nav } from 'react-bootstrap';
// import { FaSearch, FaBook, FaCrown } from 'react-icons/fa';
import HomeItem from './HomeItem'; // Assuming HomeItem is in the same directory
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { CiFilter } from "react-icons/ci";
import { setSearchTerm } from '../store/Footerslice'; // Import the setSearchTerm action\
import { useState } from 'react';
// import Slider from './Slider';
import Filter from './Filter';
import { Link } from 'react-router-dom';
const Footer = () => {
  
const [isSliderOpen, setIsSliderOpen] = useState(false);
const [isaccount, setaccount] = useState(false);
  const inputRef = useRef(null); // Create a ref to store the input element
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSearch = () => {
    const keyword = inputRef.current.value; // Access input value using ref
    console.log('Search term:', keyword); // Log the search term
    dispatch(setSearchTerm(keyword)); // Dispatch the search term to Redux
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // If Enter key is pressed
      handleSearch(); // Call the search function
    }
  };

  const toggleSlider = () => {
    // console.log("hemml")
    setIsSliderOpen(!isSliderOpen);
  };

  const toggleSliders = () => {
    // console.log("hemml")
    setaccount(!isaccount);
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" className="mb-4 mt-4 footer">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center justify-content-between">
           <Link to="/musicsearch"  style={{ width: '400px',textDecoration:"none ",borderRadius:'20px',marginRight:"20px"}}> <input 
             
              ref={inputRef} // Attach the ref to the input element
              type="text"
              className="form-control inputtext"
              placeholder="Search for songs, artists, or albums...."
              onKeyDown={handleKeyPress} // Listen for the Enter key press
            /></Link>
            <Nav.Link onClick={handleSearch}>
              {/* <FaSearch size={24} /> */}
            </Nav.Link>
            <a className="action_container" style={{color:'white'}} onClick={toggleSlider} > <CiFilter size={24} className='icon' /></a>
            
          <FiBell className="me-4 ms-4 icon" size={24} />
<Link to="/account" onClick={toggleSliders} style={{color:"white"}}><FiUser className="me-5 icon" size={24} /></Link>
      
          </Nav>
        </Navbar>
      </Navbar>
      <Filter isSliderOpen={isSliderOpen} />
      <Account isSliderOpen={isaccount} ></Account>

      {/* Pass the search term directly to HomeItem component */}
      <HomeItem searchTerm={inputRef.current?.value} />
    </>
  );
};

export default Footer;



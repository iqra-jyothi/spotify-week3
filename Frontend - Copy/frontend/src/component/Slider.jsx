import React from 'react';
import { FaHome, FaMusic, FaPodcast, FaHeart, FaUser } from 'react-icons/fa';
const Slider=()=>{
    return (
        <>

<nav className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FaHome className="me-2" /> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FaMusic className="me-2" /> Discover
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FaPodcast className="me-2" /> Radio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FaHeart className="me-2" /> Favorite Songs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <FaUser className="me-2" /> Artists
          </a>
        </li>
      </ul>
    </nav>
        </>
    )
}
export default Slider
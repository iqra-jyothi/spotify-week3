
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSpotify } from 'react-icons/fa';
import Footer from "./Footer";

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  // Dispatch selected category
  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  return (
    <>
      <header className="d-flex align-items-center justify-content-between text-white navbar">
        <div className="d-flex align-items-center">
          {/* <img
            className="ms-4"
            src="/images.jpeg"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          /> */}  <FaSpotify size={40} color="#1DB954"style={{marginRight:"10px"}}  />
          <h4 className="mb-0">YOUR VOICE</h4>

          <div className="m-4 d-flex">
            <Link to="/home"style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"

                onClick={() => handleCategoryChange("All")}
              >
                All 
              </button>
            </Link>
            <Link to="/music" style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Music")}
              >
                Music
              </button>
            </Link>
            <Link to="/podcast" style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Podcast")}
              >
                Podcasts
              </button>
            </Link>
          </div>
        </div>
        <br />
        <Footer />
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "-239px" }}
        >
        </div>
      </header>
    </>
  );
};

export default Navbar;

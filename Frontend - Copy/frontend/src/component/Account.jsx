import { IoMdSettings } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";

import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';

const Account = ({ isSliderOpen }) => {
    const navigate = useNavigate();

    // Retrieve the logged-in user's email from localStorage
    const name=localStorage.getItem('loggedInUser')
    const email = localStorage.getItem('loggedInEmail'); // Ensure this matches your storage logic

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('loggedInEmail');
        navigate('/login');
    };

    return (
      <>
       {isSliderOpen && (
        <Container className="d-flex justify-content-center align-items-center" >
        <Card style={{ width: '22rem', boxShadow: "0px -1px 5px rgb(203, 207, 203)" }} >
            <Card.Header className="text-center  text-white rounded-top">
                <h4>
                    <FaUserCircle className="me-2" />
                    Account Details
                </h4>
            </Card.Header>
            <Card.Body className="text-center">
                {email ? (
                    <>
                        <div style={{marginBottom:"30px"}} >
                            {/* <FaEnvelope  /> */}
                            <span className="fw-bold" style={{color:"white",marginLeft:"-14px"}}>{name}</span>
                            <br></br>
                            <span className="fw-bold" style={{color:"white",marginLeft:"-14px"}}>{email}</span>
                        </div>


                        {/* <div style={{color:"#aaa",marginLeft:"-131px"}}className="text-left">
                        <span > <IoMdSettings size={24} style={{marginRight:"10px"}}/>setting</span>
                        <br />
                            <span> <MdEditSquare size={24} style={{marginRight:"10px"}} />
                            edit profile</span>
                          
                        </div> */}
                        <hr style={{color:"white"}} />
                        <div>
                            <Button
                                variant="danger"
                                onClick={handleLogout}
                                className="w-100 d-flex align-items-center justify-content-center"
                            >
                                <FaSignOutAlt className="me-2" />
                                Logout
                            </Button>
                        </div>
                    </>
                ) : (
                    <p className="text-muted">You are not logged in.</p>
                )}
            </Card.Body>
        </Card>
    </Container>)}
    </>
       
    );
};

export default Account;

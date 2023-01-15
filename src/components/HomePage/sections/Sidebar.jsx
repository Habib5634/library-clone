import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import {  useNavigate } from "react-router-dom";

function RightSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(event) {
    setIsOpen(false);
  }

  const history =  useNavigate();

  const handleClick3 = () =>{
    history('/login');
  }
  const handleClick2 = () =>{
    history('/signup');
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-bars">
      <FaBars/>
      </button>
      {isOpen && (
        <div className="sidebar" onClick={handleClick}>
          <h5 className='text-bold'>My Open Library</h5>
          <hr />
          <button onClick={handleClick3} className='bg-light border-primary text-primary' style={{borderRadius:"5px", width:"115px"}}>Login</button>
          <button onClick={handleClick2} className='bg-primary text-light border-primary' style={{borderRadius:"5px",marginLeft:"10px", width:"115px"}}>Signup</button>
          <h5 style={{fontSize:"13px",fontWeight:"bold"}}>Browes</h5>
          <hr />  
          <a href="#home" style={{fontSize:"13px",marginTop:"1px",padding:"0px"}}>Subject</a>
          <hr />
          <a href="#about" style={{fontSize:"13px"}}>Trending</a>
          <hr />
          <a href="#services" style={{fontSize:"13px"}}>Library Explorer</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Lists</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Collection</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>K-12 Student Library</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Random Books</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Advanced Search</a>
          <hr />
          <h5 className='text-bold' style={{fontSize:"13px",fontWeight:"bold"}}>Contribute</h5>
          <hr />  
          <a href="#logout" style={{fontSize:"13px"}}>Advanced Search</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Add a Book</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Recent Community Field</a>
          <hr />
          <h5 className='text-bold' style={{fontSize:"13px",fontWeight:"bold"}}>Resources</h5>
          <hr /> 
          <a href="#logout" style={{fontSize:"13px"}}>Help and Support</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Developer center</a>
          <hr />
          <a href="#logout" style={{fontSize:"13px"}}>Librararian Portal</a>
          <hr />
          
        </div>
      )}
    </div>
  );
}

export default RightSidebar;
import React from 'react';
import Container from "react-bootstrap/esm/Container";
import Footer from './Footer';
import Header from './Header';
import './form.css'
import NavBar from "./NavBar";


function Login() {
  return (
    <>
     <Header/>
      <Container className="w-79 px-0">
        <NavBar/>
      </Container>  
    <Container className="bg-light w-79 pt-4">
    <div className="row sform">
      <div className="col justify-content-center p-2 bg-light" >
        
        <br />
        <form action="">
        <h3 style={{fontWeight:"bolder"}}>SignUp</h3><br />
        <button className='btn btn-light btn-outline-secondary' style={{width:"300px"}}>Sign in with GOOGLE</button> <br />
        <hr />
        <span>Complete the form below to create a new Internet Archive account. <span style={{color:"red"}}>Each field is required</span></span><br /><br />

        
          <label htmlFor="">Your Email Address</label><br />
          <input type="email" className='inp' placeholder='Write your email address'/>
          <br /><br />
          <label htmlFor="">Choose a screen name. Screen names are public and cannot be changed later.</label><span style={{fontSize:"10px"}}>Letters and numbers only please, and at least 3 characters.</span><br />
          <input type="password" className='inp' placeholder='Screen Name' />
          <span style={{fontSize:"10px"}}>Your URL: https://openlibrary.org/people/screenname</span>
          <br />
    <br />

    <label htmlFor="">Choose Passord</label> <br /> 
          <input type="password" className='inp' placeholder='Choose Password' /><br /><br /> 
          

          <label htmlFor="">Confirm Passord</label> <br /> 
          <input type="password" className='inp ' placeholder='Confirm Password' /><br />
          <input type="checkbox" className='inp' name="example" value="value1"/>I want to receive news, announcements, and resources from the <a href="">Internet achieve</a> the non-profit that runs Open Library.<br></br><br />

          <span style={{fontSize:"10px"}}> If you have security settings or privacy blockers installed, please disable them to see the reCAPTCHA.</span><br />

          <br /><br /><br />

          <button>SignUp</button> 
          <a href=""> Cancel</a><br />
          
        </form>
      </div>
    </div>
    </Container>
    <Container className=" w-79 pt-4">
    <Footer/>
      </Container>
    </>
  );
}

export default Login;
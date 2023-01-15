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
    <div className="row lform" >
      <div className="col justify-content-center bg-light  " >
      
      <form action="">
        
        <br />
        <h3 style={{fontWeight:"bolder"}}>Login</h3><br />
        <button className='btn btn-light btn-outline-secondary' style={{width:"300px"}}>Sign in with GOOGLE</button> <br />
        <hr />
        <span>Please enter your <a href="">Internet Achieve </a>email and password to access your Open Library</span><br /><br />

        
          <label htmlFor="">Email</label>
          <a href="">---Forgot Your Internet Achieve email?</a><br />
          <input type="email" className='inp'  placeholder='Write your email address'/>
          <br /><br />
          <label htmlFor="">Password</label><br />
          <input type="password" className='inp' placeholder='Enter Your Password' /><br />
          <input type="checkbox" name="example" value="value1"/>Remember me<br></br><br />

          <button>Login</button><br />
          <a href="">Forgot your password</a><br />
          <span>Not a member of Open Library <a href="">Signup Now</a></span>
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
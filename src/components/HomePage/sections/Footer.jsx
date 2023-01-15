import React from 'react';
import { a } from "react-router-dom";
import { FaTwitter, FaGithub } from 'react-icons/fa';
export const Footer = () => {
  return (
    <>
    

    <div className="row justify-content-center">
        <div className="col-md-2 col-sm-6" >
            <h5 className="head">Open Library</h5>
            <a href="" className="l5" style={{color:"#2471A3"}}>Vision</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Voluenteer</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Partner With Us</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Careers</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Blogs</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Terms Of Service</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Donate</a>
        </div>
        <div className="col-md-2 col-sm-6">
            <h5 className="head">Discover</h5>
            <a href="" className="l5" style={{color:"#2471A3"}}>Home</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Books</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Author</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Subjects</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Collections</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Advanced Search</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Return to tofp</a>   
        </div>
        <div className="col-md-2 col-sm-6">
            <h5 className="head">Develop</h5>
            <a href="" className="l5" style={{color:"#2471A3"}}>Developer Center</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>API Documentation</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Bulk Data Dumps</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Writing Bots</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Add a Book</a>
            
        </div>
        <div className="col-md-2 col-sm-6">
            <h5 className="head">Help</h5>
            <a href="" className="l5" style={{color:"#2471A3"}}>Help Center</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Report A Problem</a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Suggesting Edits</a><br />  
            <a href="" className="l6" style={{color:"#2471A3"}}><FaTwitter size={32} color="blue" /></a>
            <a href="" className="l6" style={{color:"#2471A3"}}><FaGithub size={32} color="black" /></a>
        </div>
        <div className="col-md-2 col-sm-6 pb-3">
            <h5 className="head">Change Website Language</h5>
            <a href="" className="l5" style={{color:"#2471A3"}}>Čeština </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Deutsch </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>English </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Español </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Français </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Hrvatski </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}> Português </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>తెలుగు </a><br />
            <a href="" className="l5" style={{color:"#2471A3"}}>Українська </a>
        </div>
        <hr />
        <i className="bi bi-bank" ><p id='bank'>Open Library is an initiative of the Internet Archive, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other projects include the Wayback Machine, archive.org and archive-it.org</p></i>
        
    </div>
    
    
   
    
    
    </>
  )
}
export default Footer
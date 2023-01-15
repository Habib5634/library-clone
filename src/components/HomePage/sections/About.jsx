import React from 'react'
import { a } from "react-router-dom";

export const About = () => {
  return (
    <>

<h3 className='about' >About The Project</h3>
   <div className="row">
    <div className="col-md-5 col-sm-12">
    <p id='para1'>Open Library is an open, editable library catalog, building towards a web page for every book ever published. <a href="">More</a></p>
            <p id='para2'>Just like Wikipedia, you can contribute new information or corrections href the catalog. You can browse by <a href="">subjects</a>, <a href="">authors</a> or <a href="">lists</a> members have created. If you love books, why not help build a library?</p>
    </div>
    <div className="col-md-5 col-sm-12">
    <p id='para3'><a href="" style={{color:"#2471A3"}}>Latest Blog Posts</a></p>
            <p ><a href="" className='para4'>Reach Your 2023 Reading Goals with Open Library</a> - 16 hours ago</p>
            <p ><a href="" className='para4'>A Brand New My Books Experience</a> - December 27, 2022</p>
            <p ><a href="" className='para4'>Search Is Getting Smarter on Open Library</a>- December 21, 2022</p>
    </div>
   </div>
    </>
  )
}
export default About

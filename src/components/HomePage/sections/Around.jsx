import React from 'react'
import { a } from "react-router-dom";
import one from       "./Around/unique.png"
import two from       "./Around/member.png"
import three from     "./Around/catalog.png"
import four from      "./Around/list.png"
import five from      "./Around/ebook.png"

export const Around = () => {
  return (  
    <>
   
   <div className="row justify-content-center">
   <h3 className='m-2 about' >Around The Library <p id='para5'> Here's what's happened over the last 28 days. More <a href="#">recent changes.</a></p></h3>
    <div className="col-md-2 col-sm-5 text-center">
    <img src={one} alt="unique" className='img1'/>
            <a href="#" className="l1">3,700,623<br/> Unique Visitors</a><br/>
    </div>
    <div className="col-md-2 col-sm-5 text-center">
    <img src={two} alt="unique" className='img1'/>
        <a href="#" className="l1">162,484<br/>New Members</a><br/>
    </div>
    <div className="col-md-2 col-sm-5 text-center">
    <img src={three} alt="unique" className='img1'/>
        <a href="#" className="l1">3,869,935<br/>Catalog Edit</a><br/>
    </div>
    <div className="col-md-2 col-sm-5 text-center">
    <img src={four} alt="unique" className='img1'/>
        <a href="#" className="l1">1,160<br/>List Created</a><br/>
    </div>
    <div className="col-md-2 col-sm-5 text-center">
    <img src={five} alt="unique" className='img1'/>
        <a href="#" className="l1">393,872<br/>Ebooks Borrowed</a><br/>
    </div>
   </div>
    
    
    
    
    
    </>
  )
}
export default Around
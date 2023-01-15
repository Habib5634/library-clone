import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";


import one from "./book/img1.jpg"
import two from "./book/img2.jpg"
import three from "./book/img3.jpg"
import four from "./book/img4.jpg"
import five from "./book/img5.jpg"
import six from "./book/img6.jpg"
import seven from "./book/img7.jpg"
import eight from "./book/img8.jpg"
import nine from "./book/img9.jpg"
import ten from "./book/img10.jpg"
import eleven from "./book/img11.jpg"
import twelve from "./book/img12.jpg"
import thirteen from "./book/img13.jpg"
import fourteen from "./book/img14.jpg"
import fifteen from "./book/img15.jpg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#5DADE2", fontSize:"30px",color:"black" ,borderRadius:"50%" ,tabSize:"30px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,background: "#5DADE2", fontSize:"30px",color:"black" ,borderRadius:"50%" ,tabSize:"30px"}}
        onClick={onClick}
      />
    );
  }

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (

    
      <div className="bg">
        
<div className="container-fluid">
<div className="row">
    <div className="col-9 mx-auto border-start border-end  border-success p-2 mb-2 border-opacity-50">
        
    
        <div className="bg-light"><NavLink to="" className="bookwelove">Books We Love</NavLink></div>
        <Slider {...settings} id="btnnn">
          <div>
            <h3 className="p-2">
            <div className="card" >
                 <img src={one} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
            <h3 className="p-2">
            <div className="card" >
                 <img src={two} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={three} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={four} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={five} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={six} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={seven} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={eight} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={nine} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={ten} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={eleven} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={twelve} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={thirteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={fourteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
          <div>
          <h3 className="p-2">
            <div className="card" >
                 <img src={fifteen} className="img-fluid" alt="..."/>
            </div>
                <NavLink to="" className="btn btn-primary d-flex justify-content-center">Borrow</NavLink>
            </h3>
          </div>
       
        </Slider>
        </div>
</div>
</div>
</div>


            
     
      
    );
  }
}
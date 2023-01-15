import React, { Component } from "react";
import Slider from "react-slick";
import TrendingBList from "./Broweslist";



function GetBook(props){
  return(

    
          <div className="d-flex flex-column justify-content-center align-items-center">
          
            <div className="art">
            
                <img src={props.imgUrl} alt="book_title" className="img-fluid float-start" />
            </div>
            <div className="trendlink">
                   <a href="#">{props.link} <br /> {props.spn}</a>
                
            </div>

          </div>
  );}

export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div >
          <h3 className='libHead text-start'>Browes By Subject</h3>
            <Slider {...settings}>
              {TrendingBList.map(GetBook)}
           </Slider>
        
        </div>
      );
    }
  }
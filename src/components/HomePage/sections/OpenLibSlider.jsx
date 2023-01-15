import React, { Component } from "react";
import Slider from "react-slick";
import openLibList from './OpenLibList';

function GetlibBooks(props){
  return(
    <div className="bookCard w-25 d-flex justify-content-start align-items-center">
      <div>
          <img src={props.imgUrl} alt={props.name} className="cardImage"/>
      </div>
      <div className="booksDesc ms-2 me-2">
          <h5 className="bookTitle text-start">{props.title}</h5>
          <p className="bookBody text-start">{props.bookbody}</p>
      </div>
      
    </div>
  );}

export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
            <Slider {...settings}>
              {openLibList.map(GetlibBooks)}
           </Slider>
        
        </div>
      );
    }
  }
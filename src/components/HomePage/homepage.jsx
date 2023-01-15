import React from 'react';
import Container from "react-bootstrap/esm/Container";
import './style.css';
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";
import Openlib from "./sections/OpenlibraryMain";
import Trendingb from "./sections/Trendingbooks";
import Announcement from "./sections/Announcement";
import Bookswelove from './sections/Bookswelove'
import Recent from './sections/Recent';
import Romance from './sections/Romance'
import Kids from './sections/Kids/Kids'
import Thriller from './sections/Thriller'
import Text from './sections/Text'
import Author from './sections/Author'
import Browes from './sections/Browes';
import Around from './sections/Around';
import About from './sections/About';
import Footer from './sections/Footer';



const Homepage = () => {
  return (  
    <div>
      <Header />
      <Container className="w-79 px-0">
        <NavBar/>
      </Container>
      <Container className="w-79 px-0 announce">
        <Announcement />
      </Container>
      <Container className="mainBody w-79 pb-1">
        <Openlib/>
      </Container>
      <Container className="beige_background w-79 pt-4">
      <Trendingb/>
        
      </Container>
      <Container className="beige_background w-79 pt-4">
    <Bookswelove/>
      </Container>

      <Container className="beige_background w-79 pt-4">
    <Recent />
      </Container>

      <Container className="beige_background w-79 pt-4">
    <Romance />
      </Container>

      <Container className="beige_background w-79 pt-4">
    <Kids/>
      </Container>

      <Container className="beige_background w-79 pt-4">
    <Thriller/>
      </Container>
  
      <Container className="beige_background w-79 pt-4">
    <Text/>
      </Container>

      <Container className="beige_background w-79 pt-4">
    <Author/>
      </Container>

      <Container className="browes w-79 pt-4">
    <Browes/>
      </Container>

      <Container className="browes w-79 pt-4">
    <Around/>
      </Container>

      <Container className="browes w-79 pt-4">
    <About/>
      </Container>

      <Container className=" w-79 pt-4">
    <Footer/>
      </Container>
    </div>
  )
}

export default Homepage
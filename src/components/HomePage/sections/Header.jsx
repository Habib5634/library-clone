import React from 'react';
import Logo from './images/ia-logo.svg';
import Lang from './images/language-icon.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
return(
  <div className='header'>
        <Container fluid="md" className='w-79'>
            <Row className="d-flex justify-content-between">
              <Col className='m-0 p-0' lg="2" xs="2">
                <a href='https://archive.org/'>
                  <img src={Logo} alt='logo' width={160} className='photos'/>
                </a>
              </Col>
              <Col className='m-0 p-0 mt-1 d-flex justify-content-end' lg="3" xs="5">
              <a href='#action2' className="donateBtn text-nowrap">
                Donate  
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ff7a7e" class="bi bi-heart-fill ms-1" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
              </a>
                <a href='#action2'>
                  <img src={Lang} alt='language' width={21}/>
                </a>
              </Col>
            </Row>
        </Container>
      </div>
);
}


export default Header;
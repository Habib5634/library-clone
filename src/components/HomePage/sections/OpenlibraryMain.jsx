import React from 'react';
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Responsive from './OpenLibSlider';
import Bookwelove from './Booksweloveslider';


function Openlibrary(){
  return (
  
    <div className='Openlibrary'>
        <h3 className='libHead text-start'>Welcome to Open Library</h3>
        <Responsive />
        <h3 className='libHead text-start'>Trending Books</h3>

    </div>
    
    
    
  );
}



export default Openlibrary;
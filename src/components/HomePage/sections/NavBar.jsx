import React ,{useState} from 'react';
import Openlib from './images/openlibrary-logo-tighter.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Searchbox from './SearchBox';
import RightSidebar from './Sidebar';


function NavBar(){
  return(
    <>
    <Navbar className='justify-content-between'> 
    <Container className='NavBar my-2'>
      <Navbar.Brand href="https://openlibrary.org/"> <img src={Openlib} alt='openLibrary' width={189} className='ms-2'/></Navbar.Brand>
      <Nav.Link href="#action1">My Books</Nav.Link> 
      <NavDropdown title="Browse" id="navbarScrollingDropdown"> 
          <NavDropdown.Item href="/sections/browse-sections/Subjects">Subjects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/sections/browse-sections/Trending">Trending</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Library Explorer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action6">Lists</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action7">Collections</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action8">K-12 Student Library</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action9">Random Book</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action10">Advanced Search</NavDropdown.Item>
        </NavDropdown>
        <Searchbox />
      <Link to="/login"><Navbar.Brand>Log In</Navbar.Brand></Link>
      <a href='/signup' className='signup-btn px-2 py-1'>Sign Up</a>{' '}
      <Navbar.Brand href="#action1">
     <RightSidebar/>
      </Navbar.Brand>
    </Container>
  </Navbar>


  </>
  );
}


export default NavBar;










// import React ,{useState}from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa'; <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none" xmlns="#action1" stroke="#e1dcc5" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z" fill="#000"></path><path d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z" fill="#000"></path><path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z" fill="#000"></path></g></svg>


// import { SidebarData } from './Sidebar';
// import Openlib from './images/openlibrary-logo-tighter.svg';




// const Navbar = () => {
// const [sidebar, setSidebar] = useState(false);
// const showSidebar  = ()=> setSidebar(!sidebar);


//   const history =  useNavigate();

//   const handleClick = () =>{
//     history.push('/login');
//   }
//   const handleClick2 = () =>{
//     history.push('/signup');
//   }



//   return (
//     <>
//      <div className="container-fluid ">
// <div className="row" >
//     <div className="col-9 mx-auto border-opacity-50 hhhg mt-3" > 


//     <nav className="navbar navbar-expand-lg w-70" style={{width:"115%", backgroundColor:"#cac6b0 ",paddingBottom:"0px",marginBottom:"0px"}}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/"><img src={Openlib} alt="" /></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">My Books</a>
//         </li>
        
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Browser
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Subject</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Trending</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Library Explorer</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">List</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Collection</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">K-12 Student Library</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Random Books</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Advanced Search</a></li>
//           </ul>
//         </li>
       
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:"40px", marginTop:"9px"}}/>
//         <button className="btn btn-primary" onClick={handleClick2 }>SignUp</button>
//           <button className="btn btn-light" onClick={handleClick } >Login</button>

//       </form>
//       <Link to="#" className="menu-bars">
//                 <FaBars onClick={showSidebar}/>
//         </Link>
//     </div>
//   </div>
// </nav> 
//     <div className="navbar" style={{backgroundColor:"#cac6b0"}}>
//     </div>
//     <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
//         <ul className="nav-menu-items" onClick={showSidebar}>
//         <h6>Open Library</h6>
//         <hr />
//             <li className="navbar-toggle">
                
//                 <button className="btn btn-primary" >Signup</button>
//                 <button className="btn btn-light"  >Login</button>
                
                
//             </li>
          
//             <li><h4 >Browse</h4></li> 
//             {SidebarData.map((item, index)=> {
//                 return(
//                     <li key={index} className={item.cName}>
//                         <Link to={item.path}>
//                             <span id='titlespan'>{item.title}</span>
//                         </Link>
                        
//                     </li>
//                 )
//             })}
            
//         </ul>
//     </nav>
//     </div>
// </div>
// </div>
    
    
//     </>
//   )
// }

// export default Navbar


































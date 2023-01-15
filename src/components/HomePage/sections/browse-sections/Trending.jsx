import React ,{useEffect,useState} from "react";
import ReactPaginate from 'react-paginate';
import Header from "../Header";
import NavBar from "../NavBar";
import Announcement from "../Announcement";
import Container from "react-bootstrap/esm/Container";
import TrendingList from "./Trending-list";
//import classnames from 'classnames';
//import { usePagination, DOTS } from './Pagination';
import './style.css';
/*function getTrendBook(props){
    return(
        <div className="d-flex flex-sm-column flex-lg-row justify-contents-start align-items-center">
            <div><a href={props.bookUrl}><img src={props.imgUrl} alt={props.bookTitle}/></a> </div>
            <div>
                <p><a href={props.bookUrl}>{props.bookTitle}</a></p>
                <p>by <a href={props.authorUrl}>{props.bookAuthor} </a></p>
                <p>First published in {props.published} </p>
                <p><a href={props.editionsUrl}>{props.editions} editions</a></p>
                <p>Someone marked as Want to Read, 01/11/2023 at 08:49:28</p>
            </div>
            <div>
                <button href="#action1" className={props.btnStyle}>
                    {props.bookStatus}
                </button>
            </div>
        </div>
    );
}*/

// Example items, to simulate fetching from another resources.
/*const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];*/

function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((TrendingList) =>(
        <div className="trend-item d-flex flex-sm-column flex-lg-row justify-contents-start align-items-center">
            <div className="book-cover"><a href={TrendingList.bookUrl}><img src={TrendingList.imgUrl} alt={TrendingList.bookTitle}/></a> </div>
            <div className="d-flex flex-column justify-content-center ms-2">
                <p className="book-title m-0"><a href={TrendingList.bookUrl} >{TrendingList.bookTitle}</a></p>
                <p className="m-0">by <a href={TrendingList.authorUrl}>{TrendingList.bookAuthor} </a></p>
                <p className="m-0">First published in {TrendingList.published} </p>
                <p className="m-0"><a href={TrendingList.editionsUrl}>{TrendingList.editions} editions</a></p>
                <p className="m-0">Someone marked as Want to Read, 01/11/2023 at 08:49:28</p>
            </div>
            <div>
                <button href="#action1" className={TrendingList.btnStyle}>
                    {TrendingList.bookStatus}
                </button>
            </div>
        </div>
      ))
        }
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = TrendingList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(TrendingList.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % TrendingList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}




function Trending(){
    return(
        <div>
            <Header />
            <NavBar />
            <Container className="w-79 px-0 announce">
                <Announcement />
            </Container>
            <Container  className="mainBody w-79 pb-1">
                <h1>Trending</h1>
                <p>See what readers from the community are adding to their bookshelves</p>
                <ul>
                    <li><a href="#action">Now</a></li>
                    <li><a href="#action">Today</a></li>
                    <li><a href="#action">This Week</a></li>
                    <li><a href="#action">This Month</a></li>
                    <li><a href="#action">This Year</a></li>
                    <li><a href="#action">All Time</a></li>
                </ul>
                <div>
                    <PaginatedItems itemsPerPage={5} />
                </div>
            </Container>
        </div>

    );
}

export default Trending;
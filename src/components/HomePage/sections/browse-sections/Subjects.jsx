import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import Announcement from "../Announcement";
import Container from "react-bootstrap/esm/Container";
//import Button from "react-bootstrap/esm/Button";
import './style.css';


function Subjects(){
    return(
        <div>
            <Header />
            <NavBar />
            <Container className="w-79 px-0 announce">
                <Announcement />
            </Container>
            <Container  className="mainBody w-79 pb-1">
                <div className="d-flex justify-content-between flex-lg-row flex-md-column-reverse flex-sm-column-reverse pt-4">
                    <h1 className="big-title gray ms-2">Subjects</h1>
                    <div className="d-flex flex-lg-row flex-md-row-reverse flex-sm-row-reverse justify-content-md-between justify-content-sm-between">
                        <div className="d-flex flex-column  me-3">
                            <p className="m-0 gray11">Last edited by <span><a href="#action" className="b-links">LeadSongDog</a></span></p>
                            <ul className="gray11 d-flex">
                                <li>March 2, 2021</li>
                                <li><div className="vr mx-1 gray11"></div></li>
                                <li className="gray11"><a href="#action2" className="b-links">History</a></li>
                            </ul>
                        </div>
                        <div>
                            <a href="#action1" className='edit-btn p-2 d-block'>Edit</a>
                        </div>
                    </div>
                    
                </div>
                <div className="py-4">
                    <form class="row ms-2" role="search">
                        <input className="col-lg-6 col-md-10 me-3" type="search" placeholder="Search" aria-label="Search" />
                        <input className="col-1 submit-btn" type="submit" value="Search" />
                    </form>
                </div>
                <div className="row align-items-start">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h3 className="cat-head pt-3 pb-2 ms-4">Arts</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Architecture</a></li>
                            <li><a href="#action1" className="b-links">Art Instruction</a></li>
                            <li><a href="#action1" className="b-links">Art History</a></li>
                            <li><a href="#action1" className="b-links">Dance</a></li>
                            <li><a href="#action1" className="b-links">Design</a></li>
                            <li><a href="#action1" className="b-links">Fashion</a></li>
                            <li><a href="#action1" className="b-links">Film</a></li>
                            <li><a href="#action1" className="b-links">Graphic Design</a></li>
                            <li><a href="#action1" className="b-links">Music</a></li>
                            <li><a href="#action1" className="b-links">Music Theory</a></li>
                            <li><a href="#action1" className="b-links">Painting</a></li>
                            <li><a href="#action1" className="b-links">Photography</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4">Animals</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Bears</a></li>
                            <li><a href="#action1" className="b-links">Cats</a></li>
                            <li><a href="#action1" className="b-links">Kittens</a></li>
                            <li><a href="#action1" className="b-links">Dogs</a></li>
                            <li><a href="#action1" className="b-links">Puppies</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2ms-4"><a href="#action">Fiction</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Fantasy</a></li>
                            <li><a href="#action1" className="b-links">Historical Fiction</a></li>
                            <li><a href="#action1" className="b-links">Horror</a></li>
                            <li><a href="#action1" className="b-links">Humor</a></li>
                            <li><a href="#action1" className="b-links">Literature</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Magic</a></li>
                            <li><a href="#action1" className="b-links">Mystery and detective stories</a></li>
                            <li><a href="#action1" className="b-links">Plays</a></li>
                            <li><a href="#action1" className="b-links">Poetry</a></li>
                            <li><a href="#action1" className="b-links">Romance</a></li>
                            <li><a href="#action1" className="b-links">Science Fiction</a></li>
                            <li><a href="#action1" className="b-links">Short Stories</a></li>
                            <li><a href="#action1" className="b-links">Thriller</a></li>
                            <li><a href="#action1" className="b-links">Young Adult</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Science & Mathematics</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Biology</a></li>
                            <li><a href="#action1" className="b-links">Chemistry</a></li>
                            <li><a href="#action1" className="b-links">Mathematics</a></li>
                            <li><a href="#action1" className="b-links">Physics</a></li>
                            <li><a href="#action1" className="b-links">Programming</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Business & Finance</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Management</a></li>
                            <li><a href="#action1" className="b-links">Entrepreneurship</a></li>
                            <li><a href="#action1" className="b-links">Business Economics</a></li>
                            <li><a href="#action1" className="b-links">Business Success</a></li>
                            <li><a href="#action1" className="b-links">Finance</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Children's</a></h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Kids Books</a></li>
                            <li><a href="#action1" className="b-links">Stories in Rhyme</a></li>
                            <li><a href="#action1" className="b-links">Baby Books</a></li>
                            <li><a href="#action1" className="b-links">Bedtime Books</a></li>
                            <li><a href="#action1" className="b-links">Picture Books</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">History</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Ancient Civilization</a></li>
                            <li><a href="#action1" className="b-links">Archaeology</a></li>
                            <li><a href="#action1" className="b-links">Anthropology</a></li>
                            <li><a href="#action1" className="b-links">World War II</a></li>
                            <li><a href="#action1" className="b-links">Social Life and Customs</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Health & Wellness</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Cooking</a></li>
                            <li><a href="#action1" className="b-links">Cookbooks</a></li>
                            <li><a href="#action1" className="b-links">Mental Health</a></li>
                            <li><a href="#action1" className="b-links">Exercise</a></li>
                            <li><a href="#action1" className="b-links">Nutrition</a></li>
                            <li><a href="#action1" className="b-links">Self-help</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Biography</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Autobiographies</a></li>
                            <li><a href="#action1" className="b-links">History</a></li>
                            <li><a href="#action1" className="b-links">Politics and Government</a></li>
                            <li><a href="#action1" className="b-links">World War II</a></li>
                            <li><a href="#action1" className="b-links">Women</a></li>
                            <li><a href="#action1" className="b-links">Kings and Rulers</a></li>
                            <li><a href="#action1" className="b-links">Composers</a></li>
                            <li><a href="#action1" className="b-links">Artists</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4">Social Sciences</h3>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Anthropology</a></li>
                            <li><a href="#action1" className="b-links">Religion</a></li>
                            <li><a href="#action1" className="b-links">Political Science</a></li>
                            <li><a href="#action1" className="b-links">Psychology</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Places</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">Brazil</a></li>
                            <li><a href="#action1" className="b-links">India</a></li>
                            <li><a href="#action1" className="b-links">Indonesia</a></li>
                            <li><a href="#action1" className="b-links">United States</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4"><a href="#action">Textbooks</a></h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">History</a></li>
                            <li><a href="#action1" className="b-links">Mathematics</a></li>
                            <li><a href="#action1" className="b-links">Geography</a></li>
                            <li><a href="#action1" className="b-links">Psychology</a></li>
                            <li><a href="#action1" className="b-links">Algebra</a></li>
                            <li><a href="#action1" className="b-links">Education</a></li>
                            <li><a href="#action1" className="b-links">Business & Economics</a></li>
                            <li><a href="#action1" className="b-links">Science</a></li>
                            <li><a href="#action1" className="b-links">Chemistry</a></li>
                            <li><a href="#action1" className="b-links">English Language</a></li>
                            <li><a href="#action1" className="b-links">Physics</a></li>
                            <li><a href="#action1" className="b-links">Computer Science</a></li>
                        </ul>
                        <h3 className="cat-head pt-3 pb-2 ms-4">Books by Language</h3>
                        <ul className="styled-list">
                            <li><a href="#action1" className="b-links">English</a></li>
                            <li><a href="#action1" className="b-links">French</a></li>
                            <li><a href="#action1" className="b-links">Spanish</a></li>
                            <li><a href="#action1" className="b-links">German</a></li>
                            <li><a href="#action1" className="b-links">Russian</a></li>
                            <li><a href="#action1" className="b-links">Italian</a></li>
                            <li><a href="#action1" className="b-links">Chinese</a></li>
                            <li><a href="#action1" className="b-links">Japanese</a></li>
                            <li><a href="#action1" className="b-links">See more...</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div >
                    <h3 className="gray-bold fs-6">What's a subject heading?</h3>
                    <p className="my-4 black p mx-2">
                    As the wise Wikipedia says: "The Library of Congress Subject Headings (LCSH) comprise a thesaurus (in the information science sense, a controlled vocabulary) of subject headings, maintained by the United States Library of Congress, for use in bibliographic records. LC Subject Headings are an integral part of bibliographic control, which is the function by which libraries collect, organize, and disseminate documents.... Subject headings are normally applied to every item within a library's collection and facilitate a user's access to items in the catalog that pertain to similar subject matter."
                    </p>
                    <p className="mb-2 black p mx-2">
                    Side note: Interestingly, professional library catalogers are often restricted to a limit of 3 in the number of subjects they may use. We collect general subjects, places mentioned, people mentioned, and even the time period the book is about. Feel free to imitate or enhance existing headings, or create an entirely new one. Or two. Or three. Or five.
                    </p>
                </div>
                <div className="mt-5 d-flex align-items-center">
                    <h2 className="gray-bold fs-5 me-2 lh-base">History</h2>
                    <p className="lh-base m-0 small">Created February 25, 2021.<span><a href="#action" className="black">3 revisions</a></span></p>
                </div>
                <div>
                <table class="table table-borderless table-sm">
                    <tr className="table-secondary">
                        <td className="">
                            <p className="x-small"><a href="#action">March 2, 2021</a></p>
                        </td>
                        <td className="">
                            <p className="x-small">Edited by <a href="#action">LeadSongDog</a></p>
                        </td>
                        <td className="">
                            <p className="x-small">Wikipedia hasn’t said that since 2010</p>
                        </td>
                    </tr>
                </table>

                </div>
            </Container>

        </div>


    );
}

export default Subjects;
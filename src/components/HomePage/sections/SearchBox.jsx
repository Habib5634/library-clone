function Searchbox (){
    return(
        <div class="w-70  d-flex justify-content-start search-cont" >
            <div className="search-type p-2">
            <select class="" id="inputGroupSelect03">
                <option selected>All</option>
                <option value="1">Title</option>
                <option value="2">Author</option>
                <option value="3">Text</option>
                <option value="3">Subject</option>
                <option value="3">Lists</option>
                <option value="3">Advanced</option>
            </select>
            </div>
            <div className="d-flex align-items-center p-2 " id="search_box">
                <form className="d-flex justify-content-between align-items-center">
                    <input  class="w-75 border border-0  search-input" type="text" name="" placeholder="Search"/>
                    <button class="border border-0" type="submit" id="button-addon1"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(118, 118, 118)" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                    </button>
                        
                </form>	
            </div> 
        </div>
    );
}

export default Searchbox;
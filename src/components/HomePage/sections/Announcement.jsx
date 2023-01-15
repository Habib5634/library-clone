function Announcement(){
    return(
        <div className="container  bg-dark">
            <p className="fs-6 fw-normal text-center text-white banner-text">
            Announcing Yearly Reading Goals:
            <span><a href="#action1" className="text-reset text-decoration-none px-1 py-1 blue-btn">Learn More</a></span> 
            &nbsp;or &nbsp;
            <span><a href="#action2"className="text-reset text-decoration-none px-1 py-1 blue-btn">Set your 2023 goal</a></span>
            </p>
        </div>
    );
}

export default Announcement;
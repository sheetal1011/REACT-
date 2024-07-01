import './style.css';
function Header() {
  return (
    <>
      {/* CHATTERLY AND PROFILE */}
      <div className="chatterly">
        <div>
          <span>
            {" "}
            <b>Chatterly</b>{" "}
          </span>
          <div className="chat">
            <i className="fa-regular fa-comment-dots" />
          </div>
        </div>
        <div className="profile">
          <img src="profile.jpg" />
          <select value="name">
            <option>Sheetal Madyan</option>
            <option>Log In</option>
            <option>Log Out</option>
          </select>
        </div>
      </div>
      {/* FILTERS AND SEARCH BAR */}
      <div className="main">
        <div className="head">
          <span className="filter">
            {" "}
            <b>Filters</b>{" "}
          </span>
          <span className="vertical" />
          <div className="dropdowns">
            <div className="by">
              <div id="by">Created By</div>
              <select value="name" className="all">
                <option>All</option>
              </select>
            </div>
            <div className="date">
              <div id="date">Published Date</div>
              <select value="name" className="selectdate">
                <option>Select Date</option>
              </select>
            </div>
          </div>
        </div>
        <div className="search">
          <span className="text">Search</span>
          <input type="text" placeholder="  Type here" />
          <span className="searchicon">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
      </div>
      
        <div className="blog" >
          <span style={{ color: "rgb(183, 180, 199)" }}>
            {" "}
            <b>BLOG POSTS</b>{" "}
          </span>
        </div>
    </>          
  );
}

export default Header;

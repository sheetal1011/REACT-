import './style.css';
function Card(props) {
  return (
    <>
    <div className="card">
      <div className="img1">
        <img
          src={props.image}
          style={{ height: 210, width: 314, borderRadius: 12 }}
        />
      </div>
    <p className="card1">{props.title}</p>
      <hr />
      <div className="pic">
        <img
          src="images/profile.jpg"
          alt=""
          width={30}
          height={30}
          style={{ borderRadius: 30 }}
        />
      </div>
      <span className="pic-text">Sheetu</span>
      <span className="pic-text2">Jan 10,2022</span>
      <span className="heart">
        <i className="fa-solid fa-heart" />
      </span>
      <p className="likes">30</p>
      <span className="comment">
        <i className="fa-regular fa-comment-dots" />
      </span>
      <p className="comments">13</p>
    </div>
    </>
  );
}

export default Card;
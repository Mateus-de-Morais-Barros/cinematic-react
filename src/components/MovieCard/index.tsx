import "../../App.css";
import "./styles.css";

const MovieCard = () => {
  return (
    <div className="card">
      <img src="/images/movie4.jpg" alt="" />
      <p className="nowPLayingTitle">Indiana Jones and the Dial of Destiny</p>
      <span className="tagContainer">
        <img className="rateStar" src="/images/star.svg" alt="" />
        <p className="rate">4.6</p>
        <p className="tag">|</p>
        <p className="tag">Action - Adventure - Fantasy</p>
      </span>
    </div>
  );
};

export default MovieCard;

import "../../App.css";
import "./styles.css";

const MovieRow = () => {
  return (
    <div className="movieRow">
      <img src="/images/movie1.jpg" alt="" />
      <div>
        <h2>Indiana Jones and the Dial of Destiny</h2>
        <span className="tagContainer">
          <span className="rateContainer">
            <img className="rateStar" src="/images/star.svg" alt="" />
            <p className="rate">4.6</p>
          </span>
          <p>2h20m</p>
          <p className="yellowText">+12</p>
        </span>
        <p className="nowPLayingTitle">Standard Format</p>
        <div className="tagContainer">
          <p className="tag">Luxury Lounger</p>
          <p className="tag">Closed Caption</p>
          <p className="tag">Assisted Listening</p>
          <p className="tag">Descriptive Narration</p>
        </div>
        <div className="timeButtonContainer">
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
        </div>
        <p className="nowPLayingTitle">Standard Format</p>
        <div className="tagContainer">
          <p className="tag">Luxury Lounger</p>
          <p className="tag">Closed Caption</p>
          <p className="tag">Assisted Listening</p>
          <p className="tag">Descriptive Narration</p>
        </div>
        <div className="timeButtonContainer">
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
          <button className="timeButton">8:00AM</button>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

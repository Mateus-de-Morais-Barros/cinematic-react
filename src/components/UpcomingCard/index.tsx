import "../../App.css";
import "./styles.css";

const UpcomingCard = () => {
  return (
    <div className="upcomingCard">
      <img src="/images/upcoming2.png" alt="" />
      <p>Gran Turismo</p>
      <span>
        <img src="/images/calendarIcon.png" alt="" />
        <p>Aug 09, 2023</p>
      </span>
    </div>
  );
};

export default UpcomingCard;

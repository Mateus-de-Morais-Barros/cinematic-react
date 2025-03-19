import "../../App.css";
import "./styles.css";

type Props = {
  name: string;
  date: string;
};

const WeekDay = ({ name, date }: Props) => {
  return (
    <div className="weekDay">
      <p>{name}</p>
      <p>{date}</p>
    </div>
  );
};

export default WeekDay;

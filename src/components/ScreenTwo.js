import "./ScreenTwo.css";
import { IconName } from "react-icons/gi";
export function ScreenTwo(props) {
  return (
    <div className="screen-two">
      <h1 className="name-btn">Choose time</h1>
      <div className="all-btn">
        <button className="time-btn" onClick={() => props.onNextClick(10)}>
          10
        </button>
        <button className="time-btn" onClick={() => props.onNextClick(20)}>
          20
        </button>
        <button className="time-btn" onClick={() => props.onNextClick(40)}>
          40
        </button>
        <button className="time-btn" onClick={() => props.onNextClick(80)}>
          80
        </button>
      </div>
    </div>
  );
}

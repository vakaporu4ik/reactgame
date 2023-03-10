import "./ChooseTime.css";
import { Button } from "./Button";
import { GiSandsOfTime } from "react-icons/gi";

export function ChooseTime(props) {
  return (
    <div className="screen-two">
      <h1 className="name-btn">
        Choose time <GiSandsOfTime />
      </h1>
      <div className="all-btn">
        <Button onClick={() => props.onNextClick(10)}>10</Button>
        <Button onClick={() => props.onNextClick(20)}>20</Button>
        <Button onClick={() => props.onNextClick(40)}>40</Button>
        <Button onClick={() => props.onNextClick(80)}>80</Button>
      </div>
    </div>
  );
}

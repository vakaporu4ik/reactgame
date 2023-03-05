import "./ScreenTwo.css";
import { IconName } from "react-icons/gi";
import { Button } from "./Button";

export function ScreenTwo(props) {
  return (
    <div className="screen-two">
      <h1 className="name-btn">Choose time</h1>
      <div className="all-btn">
        <Button onClick={() => props.onNextClick(10)}>10</Button>
        <Button onClick={() => props.onNextClick(20)}>20</Button>
        <Button onClick={() => props.onNextClick(40)}>40</Button>
        <Button onClick={() => props.onNextClick(80)}>80</Button>
      </div>
    </div>
  );
}

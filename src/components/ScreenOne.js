import "./ScreenOne.css";
import { GiArcher } from "react-icons/gi";
import { Button } from "./Button";

export function ScreenOne(props) {
  return (
    <div className="screen-one">
      <div>
        <GiArcher className="screenthree-icon" />
      </div>
      <h1 className="first-word">Archer</h1>
      <Button onClick={props.onButtonClick}>Start game</Button>
    </div>
  );
}

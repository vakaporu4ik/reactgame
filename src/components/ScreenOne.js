import "./ScreenOne.css";
import { GiArcher } from "react-icons/gi";

export function ScreenOne(props) {
  return (
    <div className="screen-one">
      <div>
        <GiArcher className="screenthree-icon" />
      </div>
      <h1 className="first-word">Aim training</h1>
      <button className="first-btn" onClick={props.onButtonClick}>
        Start game
      </button>
    </div>
  );
}

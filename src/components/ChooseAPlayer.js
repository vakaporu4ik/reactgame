import "./ChooseAPlayer.css";
import Archer from "../img/archerwar.jpg";
import { Button } from "./Button";
import { useState } from "react";

export function ChooseAPlayer({ onNameSet }) {
  const [name, setName] = useState("");
  return (
    <>
      <div className="player">
        <h1 className="chooseaplayer"> Choose Name</h1>

        <input
          placeholder="AAA"
          className="input-name"
          onChange={(event) => {
            setName(event.currentTarget.value.toUpperCase());
          }}
          value={name}
          maxLength={3}
          type="text"
          name="Name"
        />
        <Button disabled={name.length < 3} onClick={() => onNameSet(name)}>
          next move
        </Button>
      </div>
    </>
  );
}

// onNameSet = (...) => {...}

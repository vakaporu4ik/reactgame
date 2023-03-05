import logo from "./logo.svg";
import "./App.css";
import { ScreenOne } from "./components/ScreenOne";
import { useState } from "react";
import { ScreenTwo } from "./components/ScreenTwo";
import { ScreenThree } from "./components/ScreenThree";

function App() {
  const [screen, setScreen] = useState(1);
  const [time, setTime] = useState(null);
  if (screen === 1)
    return (
      <ScreenOne
        onButtonClick={() => {
          setScreen(2);
        }}
      />
    );
  if (screen === 2)
    return (
      <ScreenTwo
        onNextClick={(seconds) => {
          setTime(seconds);
          setScreen(3);
        }}
      />
    );
  if (screen === 3) return <ScreenThree time={time} />;

  return null;
}

export default App;

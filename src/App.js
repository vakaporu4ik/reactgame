import logo from "./logo.svg";
import "./App.css";
import { StartGame } from "./components/StartGame";
import { useState } from "react";
import { ChooseTime } from "./components/ChooseTime";
import { PlayGame } from "./components/PlayGame";
import { ChooseAPlayer } from "./components/ChooseAPlayer";
import { motion, AnimatePresence } from "framer-motion";
import { LeaderBoard } from "./components/LeaderBoard";
import { getLeaderboard } from "./leaderboard";

function App() {
  const [screen, setScreen] = useState("start-game");
  const [time, setTime] = useState(null);
  const [name, setName] = useState(null);
  const [points, setPoints] = useState(0);

  return (
    <AnimatePresence mode="popLayout">
      {screen === "start-game" ? (
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ y: "-100vh", transition: { duration: 0.5 } }}
        >
          <StartGame
            onButtonClick={() => {
              setScreen("choose-player");
            }}
          />
        </motion.div>
      ) : screen === "choose-player" ? (
        <motion.div
          key={screen}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.5 }}
        >
          <ChooseAPlayer
            onNameSet={(n) => {
              setName(n);
              setScreen("choose-time");
            }}
          />
        </motion.div>
      ) : screen === "choose-time" ? (
        <motion.div
          key={screen}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.5 }}
        >
          <ChooseTime
            onNextClick={(seconds) => {
              setTime(seconds);
              setScreen("play-game");
            }}
          />
        </motion.div>
      ) : screen === "play-game" ? (
        <motion.div
          key={screen}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PlayGame
            time={time}
            points={points}
            onPointScored={() => {
              setPoints(points + 1);
            }}
            onTimeUp={() => {
              const leaderboard = getLeaderboard();
              leaderboard[name] = points;
              localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

              setScreen("leader-board");
            }}
          />
        </motion.div>
      ) : screen === "leader-board" ? (
        <motion.div
          key={screen}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LeaderBoard
            points={points}
            onTryAgain={() => {
              setTime(null);
              setScreen("start-game");
              setPoints(0);
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default App;

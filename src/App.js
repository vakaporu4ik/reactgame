import logo from "./logo.svg";
import "./App.css";
import { ScreenOne } from "./components/ScreenOne";
import { useState } from "react";
import { ScreenTwo } from "./components/ScreenTwo";
import { ScreenThree } from "./components/ScreenThree";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [screen, setScreen] = useState(1);
  const [time, setTime] = useState(null);

  return (
    <AnimatePresence mode="popLayout">
      {screen === 1 ? (
        <motion.div
          key="screen1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ y: "-100vh", transition: { duration: 0.5 } }}
        >
          <ScreenOne
            onButtonClick={() => {
              setScreen(2);
            }}
          />
        </motion.div>
      ) : screen === 2 ? (
        <motion.div
          key="screen2"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.5 }}
        >
          <ScreenTwo
            onNextClick={(seconds) => {
              setTime(seconds);
              setScreen(3);
            }}
          />
        </motion.div>
      ) : screen === 3 ? (
        <motion.div
          key="screen3"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ScreenThree
            time={time}
            onTryAgain={() => {
              setTime(null);
              setScreen(1);
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default App;

import { useState } from "react";
import { Button } from "./Button";
import "./LeaderBoard.css";
import { getLeaderboard } from "../leaderboard";
import { GiLaurelCrown } from "react-icons/gi";

export function LeaderBoard(props) {
  const [leaderboard] = useState(() => {
    return getLeaderboard();
  });
  console.log("leaderboard", leaderboard);
  return (
    <div className="leader-board">
      <h1 className="results">You result: {props.points}</h1>
      <Button onClick={props.onTryAgain}>Try again</Button>
      <h1 className="leader">Leaderboard</h1>
      <div className="leader-rank">
        {Object.entries(leaderboard)
          .sort(([, p1], [, p2]) => p2 - p1)
          .map(([name, points], index) => {
            return (
              <>
                <div className="leaderboard-rank">
                  {index + 1 === 1 && <GiLaurelCrown className="crown-gold" />}
                  {index + 1 === 2 && (
                    <GiLaurelCrown className="crown-silver" />
                  )}
                  {index + 1 === 3 && (
                    <GiLaurelCrown className="crown-bronze" />
                  )}
                  {index + 1}
                </div>
                <div>{name}</div>
                <div>{points}</div>
              </>
            );
          })}
      </div>
    </div>
  );
}

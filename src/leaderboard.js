export function getLeaderboard() {
  const value = localStorage.getItem("leaderboard");
  if (value === null) return {};
  return JSON.parse(value);
}

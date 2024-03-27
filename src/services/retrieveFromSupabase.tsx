export const getHighscoreList = async () => {
  const response = await fetch('/api/list');
  const scoreList = await response.json();
  return scoreList;
};

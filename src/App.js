import React, { useCallback, useState } from "react";
import AddPlayerForm from "./Components/AddPlayerForm";
import Header from "./Components/Header";
import Player from "./Components/Player";

const App = () => {
  const [state, setState] = useState({
    players: [
      {
        name: "Amine",
        score: 0,
        id: 1,
      },
      {
        name: "Ahmed",
        score: 0,
        id: 2,
      },
      {
        name: "Jihane",
        score: 0,
        id: 3,
      },
      {
        name: "Ala Eddine",
        score: 0,
        id: 4,
      },
    ],
  });

  const handleScoreChange = useCallback(
    (index, delta) => {
      const { players: updatedPlayers } = state;

      updatedPlayers[index].score += delta;

      setState({ players: updatedPlayers });
    },
    [state]
  );

  const handleAddPlayer = useCallback(
    (new_player) => {
      setState({
        players: [
          ...state.players,
          {
            name: new_player,
            score: 0,
            id: state.players.length + 1,
          },
        ],
      });
    },
    [state]
  );

  const handleRemovePlayer = useCallback(
    (id) => {
      setState({
        players: state.players.filter((player) => {
          return player.id !== id;
        }),
      });
    },
    [state]
  );

  const getHighScore = useCallback(() => {
    const scores = state.players.map((player) => player.score);
    const highScore = Math.max(...scores);

    if (highScore) return highScore;

    return null;
  }, [state]);

  const highScore = getHighScore();

  return (
    <div className="scoreboard">
      <Header players={state.players} />
      {state.players.map((player, index) => (
        <Player
          {...player}
          index={index}
          key={player.id.toString()}
          changeScore={handleScoreChange}
          removePlayer={handleRemovePlayer}
          isHighScore={player.score === highScore}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
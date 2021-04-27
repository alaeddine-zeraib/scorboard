import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({
  id,
  index,
  name,
  score,
  changeScore,
  removePlayer,
  isHighScore,
}) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter index={index} score={score} changeScore={changeScore} />
      </div>
    );
}

Player.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  score: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
};

export default Player;
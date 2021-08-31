import React from "react";

class GameStats extends React.Component {
  getButtonLabel = () => {
    return this.props.gameOn ? "End Game" : "New Game";
  };
  render() {
    return (
      <div className="game-stats">
        <div className="game-stats__level">
          <div className="game-stats__level--label">Current Level:</div>
          <div className="game-stats__level--value">1</div>
        </div>
        <div className="game-stats__score">
          <div className="game-stats__score--label">Score:</div>
          <div className="game-stats__score--value">{this.props.score}</div>
        </div>
        <button
          className="game-stats__button"
          type="button"
          onClick={this.props.onGameChange}
        >
          {this.getButtonLabel()}
        </button>
      </div>
    );
  }
}

export default GameStats;

import React from "react";
import GameInstruction from "./GameInstruction";
import GamePlayGround from "./GamePlayGround";

class Gameboard extends React.Component {
  renderContent = () => {
    if (this.props.gameOn) {
      return (
        <div
          className="game-board"
          style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
          <GamePlayGround
            score={this.props.score}
            time={this.props.time}
            cards={this.props.cards}
            onScoreChange={this.props.onScoreChange}
            onGameChange={this.props.onGameChange}
          />
        </div>
      );
    } else {
      return (
        <div className="game-board">
          <GameInstruction />
        </div>
      );
    }
  };

  render() {
    return <>{this.renderContent()}</>;
  }
}

export default Gameboard;

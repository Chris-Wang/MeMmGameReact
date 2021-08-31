import React from "react";
import GameBoard from "./components/GameBoard";
import GameStats from "./components/GameStats";
import GameTimer from "./components/GameTimer";

const gameCards = [
  { dataTech: "css3" },
  { dataTech: "css3" },
  { dataTech: "html5" },
  { dataTech: "html5" },
  { dataTech: "js" },
  { dataTech: "js" },
  { dataTech: "react" },
  { dataTech: "react" },
];
class App extends React.Component {
  state = { gameOn: false, score: 0, remainTime: 60, cards: gameCards };

  onGameChange = async () => {
    await this.setState({ gameOn: !this.state.gameOn });
    gameCards.sort(function () {
      return Math.random() - 0.5;
    });
    if (this.state.gameOn) {
      this.setState({ score: 0, cards: gameCards });
    }
  };

  onScoreChange = (data) => {
    this.setState({ score: data });
  };

  onTimeChange = (data) => {
    this.setState({ remainTime: data });
  };

  render() {
    return (
      <>
        <h1 className="game-title">The classic MeMmmm Game</h1>
        <GameStats
          onGameChange={this.onGameChange}
          gameOn={this.state.gameOn}
          score={this.state.score}
        />
        <GameTimer
          gameOn={this.state.gameOn}
          score={this.state.score}
          onGameChange={this.onGameChange}
          onTimeChange={this.onTimeChange}
        />
        <GameBoard
          gameOn={this.state.gameOn}
          cards={this.state.cards}
          score={this.state.score}
          time={this.state.remainTime}
          onScoreChange={this.onScoreChange}
          onGameChange={this.onGameChange}
        />
      </>
    );
  }
}

export default App;

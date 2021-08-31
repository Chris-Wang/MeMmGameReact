import React from "react";

class GameTimer extends React.Component {
  state = { time: 60 };

  componentDidUpdate(prevProps) {
    if (prevProps.gameOn !== this.props.gameOn) {
      if (this.props.gameOn) {
        var countDown = setInterval(() => {
          if (this.props.gameOn && this.state.time > 0) {
            this.setState({ time: this.state.time - 1 });
            this.props.onTimeChange(this.state.time);
          } else {
            clearInterval(countDown);
            if (this.state.time === 0) {
              alert(`Congratulations, your score is ${this.props.score}`);
              this.props.onGameChange();
            }
          }
        }, 1000);
      } else {
        this.setState({ time: 60 });
        this.props.onTimeChange(this.state.time);
        alert(`Congratulations, your score is ${this.props.score}`);
      }
    }
  }

  render() {
    return (
      <div className="game-timer">
        <div
          className="game-timer__bar"
          style={{ width: `${(this.state.time / 60) * 100}%` }}
        >
          {this.state.time}s
        </div>
      </div>
    );
  }
}

export default GameTimer;

import React from "react";

class GameCard extends React.Component {
  state = { fliped: false };

  onflipChange = async () => {
    this.setState({ fliped: !this.state.fliped });
    await this.props.onPickChange(this.props.tech, this.props.cardIndex);
    const pickIndex = this.props.onPickCheck();
    if (pickIndex !== this.props.cardIndex) {
      setTimeout(() => {
        this.setState({ fliped: !this.state.fliped });
      }, 1000);
    }
  };

  renderCard = () => {
    if (this.props.cardFlip) {
      return <div className="card__face card__face--back"></div>;
    } else {
      return <div className="card__face card__face--front"></div>;
    }
  };

  render() {
    return (
      <div
        className={`card ${this.props.tech}`}
        onClick={() =>
          this.props.onPickChange(this.props.tech, this.props.cardIndex)
        }
      >
        {this.renderCard()}
      </div>
    );
  }
}

export default GameCard;

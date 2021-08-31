import React from "react";
import GameCard from "./GameCard";

class GamePlayGround extends React.PureComponent {
  state = {
    pickTech: "",
    pickIndex: -1,
    lastPickIndex: -1,
    foundPairs: [],
    lock: false,
  };

  onPickChange = async (tech, index) => {
    if (!this.state.lock) {
      //first time pick a card
      if (this.state.pickTech === "") {
        this.setState({
          pickTech: tech,
          pickIndex: index,
          lastPickIndex: index,
        }); //second time pick a card
      } else {
        //when the second pick is not the same card
        if (this.state.lastPickIndex !== index) {
          //display the card, set pickindex
          this.setState({ pickIndex: index });
          //check if it's valid pair
          if (this.state.pickTech === tech) {
            await this.setState({
              foundPairs: [
                ...this.state.foundPairs,
                ...[this.state.lastPickIndex, index],
              ],
            });
            this.props.onScoreChange(this.props.score + this.props.time);

            this.setState({ pickTech: "", pickIndex: -1, lastPickIndex: -1 });
            //if all pairs were found, pop up alert, and end the game
            if (this.state.foundPairs.length === this.props.cards.length) {
              setTimeout(() => {
                alert(`Congratulations, your score is ${this.props.score}`);
                this.props.onGameChange();
              }, 100);
            } //if it's not a valid pair
          } else {
            this.setState({ lock: true });
            setTimeout(() => {
              this.setState({
                lock: false,
                pickTech: "",
                pickIndex: -1,
                lastPickIndex: -1,
              });
            }, 1500);
          } //when the second pick is the same card
        } else {
          this.setState({ pickTech: "", pickIndex: -1, lastPickIndex: -1 });
        }
      }
    }
  };

  onPickIndexCheck = () => {
    return this.state.pickIndex;
  };

  render() {
    return (
      <>
        {this.props.cards.map((card, index) => {
          const found = this.state.foundPairs.find(
            (element) => element === index
          );
          const flip = () => {
            if (
              index === this.state.pickIndex ||
              index === this.state.lastPickIndex ||
              found ||
              found === 0
            ) {
              return true;
            } else {
              return false;
            }
          };

          const cardFlip = flip();

          return (
            <GameCard
              key={index}
              tech={card.dataTech}
              cardIndex={index}
              cardFlip={cardFlip}
              onPickChange={this.onPickChange}
              onPickCheck={this.onPickIndexCheck}
            ></GameCard>
          );
        })}
      </>
    );
  }
}

export default GamePlayGround;

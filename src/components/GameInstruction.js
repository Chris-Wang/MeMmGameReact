import React from "react";

const GameInstruction = () => {
  return (
    <div className="game-instruction">
      <h3 className="game-instruction__header">Instruction</h3>
      <p className="game-instruction__content">
        - Click on the card to view the back face of the card. <br />
        - Get two exact same card to score.
        <br />- Score are based on the time and level. <br />- You only have 60s
        for each level. <br />- There are three levels, '4x2', '4x4' and '6x6'.{" "}
        <br />- Press 'Start Game' button when you are ready.
      </p>
    </div>
  );
};

export default GameInstruction;

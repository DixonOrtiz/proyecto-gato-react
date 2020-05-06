import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "X",
      squares: Array(9).fill(null)
    };
  }

  changeTurn = () => {
    if (this.state.turn === "X") {
      this.setState({
        turn: "O"
      });
    } else {
      this.setState({
        turn: "X"
      });
    }
  };

  theresAWinner = () => {
    let winner = false;

    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let a, b, c;

    winCombinations.forEach(combination => {
      a = this.state.squares[combination[0]];
      b = this.state.squares[combination[1]];
      c = this.state.squares[combination[2]];

      if (a && a === b && a === c) {
        winner = true;
      }
    });

    return winner;
  };

  clickSquare(i) {
    if (!this.theresAWinner()) {
      if (this.state.squares[i] === null) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.turn;

        this.setState({
          squares
        });

        this.changeTurn();
      }
    }
  }

  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.clickSquare(i)}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="status">Next player: {this.state.turn}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;

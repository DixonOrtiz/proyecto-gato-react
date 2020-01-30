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

  clickSquare = i => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.turn;

    this.setState({
      squares
    });

    this.changeTurn();
  };

  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.clickSquare(i)}
      />
    );
  };

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

  render() {
    console.log(this.state.squares);
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

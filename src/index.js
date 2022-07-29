import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props){
  return(
    <button 
      className="square"
      onClick={props.onClick}>
        {props.value}
    </button>
  )
}
/*
Componente SQUARE en componente clase:

  class Square extends React.Component {

      render() {
      return (
        <button 
          className="square" 
          onClick={()=> this.props.onClick()}>
            {this.props.value}
        </button>
      );
    }
  }*/
  
  class Board extends React.Component {
    //Como Board pasó "onClick={() => this.handleClick(i)}" a Square,
    // el componente Square llama al handleClick(i) de Board cuando es clickeado. 
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
    }

    handleClick(i){//Va a recibir el boton clickeado por parametro
      const squares = this.state.squares.slice();//El método slice() devuelve una copia de una parte del array dentro de un nuevo array
      //almaceno en la variable squares una copia del array squares en vez de modificar el original
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext //duda
      }) //actualizo el estado para que muestre el valor cambiado
    }

    renderSquare(i) {
      return (<Square 
                value={this.state.squares[i]}
                onClick={()=> this.handleClick(i)}/>);
    }
  
    render() {
      let status;
      const winner = calculateWinner(this.state.squares);
      if(winner){
        status = `Winner: ${winner}`;
      } else{
        status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`
      }
  
      return (
        <div>
          <div className="status">{status}</div>
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
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }


  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  }
  
  class Board extends React.Component {
    //Como Board pasó "onClick={() => this.handleClick(i)}" a Square,
    // el componente Square llama al handleClick(i) de Board cuando es clickeado. 
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      }
    }

    handleClick(i){//Va a recibir el boton clickeado por parametro
      const squares = this.state.squares.slice();//El método slice() devuelve una copia de una parte del array dentro de un nuevo array
      //almaceno en la variable squares una copia del estado
      squares[i] = 'X';
      this.setState({squares: squares}) //actualizo el estado para que se renderice y muestre la X
    }

    renderSquare(i) {
      return (<Square 
                value={this.state.squares[i]}
                onClick={()=> this.handleClick(i)}/>);
    }
  
    render() {
      const status = 'Next player: X';
  
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
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
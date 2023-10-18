import picture from '../assets/pictures/WatPhraKaew.jpg';
// export default function Card(params) {
//   return (
//     <div className='w-auto h-auto relative'>
//       <a href='#'>
//         <img className='rounded-md w-full h-full object-fill opacity-60' src={picture} alt='pic' />
//         <p className='text-white text-xs absolute bottom-1 left-2 z-10'>WatPhraKaew</p>
//       </a>
//     </div>
//   );
// }

import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(5).fill(Array(5).fill(null)),
      xIsNext: true
    };
  }

  handleClick(row, col) {
    const board = this.state.board.map(r => r.slice());
    if (board[row][col] || calculateWinner(board)) {
      return;
    }
    board[row][col] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      board: board,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(row, col) {
    return (
      <div className='w-full h-full relative' onClick={() => this.handleClick(row, col)}>
        <a href='#'>
          <img
            className='rounded-md w-full h-full object-fill opacity-60 p-1'
            src={picture}
            alt='pic'
          />
          <p className='text-white text-xs absolute bottom-1 left-2 z-10'>
            {this.state.board[row][col]}
          </p>
        </a>
      </div>
    );
  }

  render() {
    const board = this.state.board.map((row, rowIndex) => {
      const squares = row.map((col, colIndex) => {
        return this.renderSquare(rowIndex, colIndex);
      });
      return (
        <div key={rowIndex} className='w-full h-full'>
          {squares}
        </div>
      );
    });

    return <div className='w-full h-full flex gap-2'>{board}</div>;
  }
}

function calculateWinner(board) {
  // เพิ่มโค้ดตรวจสอบผู้ชนะของเกมบิงโก 5x5
}

export default Card;

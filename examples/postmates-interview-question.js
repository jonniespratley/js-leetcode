/**
 * Postmates interview question
 * 
 * # Tic-tac-toe
Your goal is to implement a basic `TicTacToe` class that can manage the state
of a Tic-tac-toe game. This includes the ability to make a move (with X & Y
co-ordinates), evaluate the current state of the board and report the winning
player. For additional credit, make it possible to pass in board size.

## TicTacToe class
For additional credit, the constructor for your class can accept the size of
the board as the first argument.

### TicTacToe.move(x, y)
Triggers a move to the provided X & Y co-ordinates. Should verify that the
passed in co-ordinates are actually valid. Should throw an error if the
game has already been resolved. Use lowercase "x" and "o" to represent the two players.

### TicTacToe.board
Returns the current board state in a 2D array, where the outer array
represents the Y co-ordinates and the inner array represents X.

### TicTacToe.player
Returns the current player (X or O).

### TicTacToe.result
Returns the winning player (X or O), or the string "tie" in case of a tie.

### TicTacToe.size
Returns the current size of the board (X or Y dimension).
 */
const { stdout } = process;
const CRLF = '\n';
function draw(board, size) {
  stdout.write('\x1b');
  stdout.write(` ${' ╷'.repeat(size - 1)}${CRLF}`);
  for (let i = 0; i < size; i++) {
    stdout.write(' ');
    for (let j = 0; j < size; j++) {
      stdout.write(`${board[i][j] || ' '}${j < size - 1 ? '│' : ' '}`);
    }
    stdout.write(CRLF);
    if (i < size - 1) {
      stdout.write('╶');
      for (let j = 0; j < size - 1; j++) {
        stdout.write('─┼');
      }
      stdout.write(`─╴${CRLF}`);
    }
  }
  stdout.write(` ${' ╵'.repeat(size - 1)}${CRLF}`);
}

class TicTacToe {

  constructor(size = 3) {
    this._size = size;
    this._currentPlayer = 'x';
    this._board = [];
    this._complete = false;
    this.xIsNext = false;
    for (let i = 0; i < size; i++) {
      this._board.push(['-', '-', '-']);
    }
  }

  move(x, y) {
    if (!(this.board[y] && this.board[y][x])) {
      console.log('Invalid x,y value');
      return;
    }

    if (this._complete) {
      throw new Error('Game is already complete.');
    }

    if (this._board[y][x] !== '-') {
      console.log(`Position ${x}, ${y} taken.`);
      return;
    }

    this._board[y][x] = this.player;
    this._currentPlayer = (this.xIsNext ? 'x' : 'o');
  }

  get size() {
    return this._size;
  }

  get board() {
    return this._board;
  }

  get player() {
    return this._currentPlayer;
  }

  get result() {
    const lines = [
      []
    ];

    if (!this._complete) {
      let j = this.size - 1;
      for (let i = 0; i < this.size; i++, j--) {
        const [a, b, c] = this.board[i];

        

        const d = this.board[0][i]
        const e = this.board[1][i]
        const f = this.board[2][i]
        
        console.log(a, b, c);

        if ((a && a === b && a === c) || (d && d === e && d === f)) {
          console.log(this.player, 'won');
          return `${this.player.toUpperCase()} won!`;
        }
      }
    }
  }

}

let game = new TicTacToe();

//x
game.move(0,0);
game.move(0,1);
game.move(1,0);

game.move(0,2);
game.move(2,0);

console.log(game.result);




draw(game.board, game.size);

console.log(game.board);
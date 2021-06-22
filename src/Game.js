import React, { Component } from 'react';
import Cell from './Cell';
import Rules from './Rules';
<<<<<<< HEAD
=======

>>>>>>> 2d35cec... Game final revision
import './Game.css';

const colors = ['#ee964b', '#277da1', '#83c5be', '#eec5be', '#fad209', '#e44548', '#90be6d', '#7f4f24']
const [orange, blue, aqua, pink, yellow, red, green, brown] = colors;
const blackStartPosition = [
    {
        id: `b-${orange}`,
        position: '0-0'

    },
    {
        id: `b-${blue}`,
        position: '0-1'

    },
    {
        id: `b-${aqua}`,
        position: '0-2'

    },
    {
        id: `b-${pink}`,
        position: '0-3'

    },
    {
        id: `b-${yellow}`,
        position: '0-4'

    },
    {
        id: `b-${red}`,
        position: '0-5'

    },
    {
        id: `b-${green}`,
        position: '0-6'

    },
    {
        id: `b-${brown}`,
        position: '0-7'

    }]

const whiteStartPosition = [
    {
        id: `w-${orange}`,
        position: '7-7'

    },
    {
        id: `w-${blue}`,
        position: '7-6'

    },
    {
        id: `w-${aqua}`,
        position: '7-5'

    },
    {
        id: `w-${pink}`,
        position: '7-4'

    },
    {
        id: `w-${yellow}`,
        position: '7-3'

    },
    {
        id: `w-${red}`,
        position: '7-2'

    },
    {
        id: `w-${green}`,
        position: '7-1'

    },
    {
        id: `w-${brown}`,
        position: '7-0'

    }
]

class Game extends Component {
    static defaultProps = {
        nrows: 8,
        ncols: 8,
        startPosition: [
            { color: orange, taken: true }, { color: blue, taken: true }, { color: aqua, taken: true }, { color: pink, taken: true }, { color: yellow, taken: true }, { color: red, taken: true }, { color: green, taken: true }, { color: brown, taken: true },
            { color: red, taken: false }, { color: orange, taken: false }, { color: pink, taken: false }, { color: green, taken: false }, { color: blue, taken: false }, { color: yellow, taken: false }, { color: brown, taken: false }, { color: aqua, taken: false },
            { color: green, taken: false }, { color: pink, taken: false }, { color: orange, taken: false }, { color: red, taken: false }, { color: aqua, taken: false }, { color: brown, taken: false }, { color: yellow, taken: false }, { color: blue, taken: false },
            { color: pink, taken: false }, { color: aqua, taken: false }, { color: blue, taken: false }, { color: orange, taken: false }, { color: brown, taken: false }, { color: green, taken: false }, { color: red, taken: false }, { color: yellow, taken: false },
            { color: yellow, taken: false }, { color: red, taken: false }, { color: green, taken: false }, { color: brown, taken: false }, { color: orange, taken: false }, { color: blue, taken: false }, { color: aqua, taken: false }, { color: pink, taken: false },
            { color: blue, taken: false }, { color: yellow, taken: false }, { color: brown, taken: false }, { color: aqua, taken: false }, { color: red, taken: false }, { color: orange, taken: false }, { color: pink, taken: false }, { color: green, taken: false },
            { color: aqua, taken: false }, { color: brown, taken: false }, { color: yellow, taken: false }, { color: blue, taken: false }, { color: green, taken: false }, { color: pink, taken: false }, { color: orange, taken: false }, { color: red, taken: false },
            { color: brown, taken: true }, { color: green, taken: true }, { color: red, taken: true }, { color: yellow, taken: true }, { color: pink, taken: true }, { color: aqua, taken: true }, { color: blue, taken: true }, { color: orange, taken: true }]

    }

    constructor(props) {
        super(props);
        this.state = {
            board: this.createBoard(),
            newGame: true,
            gameOver: false,
            blackTurn: true,
            currentPlayer: '',
            currentPlayerCell: '',
            availableCells: '',
            gamePiecesBlack: blackStartPosition,
            gamePiecesWhite: whiteStartPosition
        }
    }

    createBoard = () => {
        let board = [];
        let count = 0;
        for (let x = 0; x < this.props.ncols; x++) {
            let cols = [];
            for (let y = 0; y < this.props.nrows; y++) {
                cols.push({
                    id: `${x}-${y}`,
                    color: this.props.startPosition[count].color,
                    taken: this.props.startPosition[count].taken
                });
                count = count + 1;
            }
            board.push(cols);
        }
        return board
    }


    movePiece = (pieceId, cellId) => {
        let [y, x] = cellId.split("-").map(Number);
        let board = this.state.board;
        const availableCells = [];

        if (this.state.blackTurn) {
            for (let i = 1; i < (this.props.nrows - y); i++) {
                if (board[y + i][x].taken === false) {
                    activateCells(y + i, x);
                } else {
                    break;
                }
            }

            for (let i = 1; (i <= x && i < (this.props.nrows - y)); i++) {
                if (board[y + i][x - i].taken === false) {
                    activateCells(y + i, x - i);
                } else {
                    break;
                }
            }

            for (let i = 1; (i < (this.props.nrows - y) && i < (this.props.ncols - x)); i++) {
                if (board[y + i][x + i].taken === false) {
                    activateCells(y + i, x + i);
                } else {
                    break;
                }
            }

        } else if (!this.state.blackTurn) {

            for (let i = 1; i <= y; i++) {
                if (board[y - i][x].taken === false) {
                    activateCells(y - i, x);
                } else {
                    break;
                }
            }

            for (let i = 1; i <= y && i <= x; i++) {
                if (board[y - i][x - i].taken === false) {
                    activateCells(y - i, x - i);
                } else {
                    break;
                }
            }

            for (let i = 1; i <= y && i < (this.props.ncols - x); i++) {
                if (board[y - i][x + i].taken === false) {
                    activateCells(y - i, x + i);
                } else {
                    break;
                }
            }
        }

        function activateCells(y, x) {
            availableCells.push({ id: board[y][x].id, color: board[y][x].color })

        }
        this.setState({
            currentPlayer: pieceId,
            currentPlayerCell: cellId,
            availableCells,
            newGame: false
        })
    }



    moveToCell = (newCellId, newCellColor) => {

        let newPiecePositionWhite = this.state.gamePiecesWhite.map(p => (
            p.id === this.state.currentPlayer ? { ...p, position: newCellId } : p));

        let newPiecePositionBlack = this.state.gamePiecesBlack.map(p => (
            p.id === this.state.currentPlayer ? { ...p, position: newCellId } : p));

        let updateCells1 = this.state.board.map((row) => row.map((cell) => (
            (cell.id === newCellId) ? { ...cell, taken: true } : cell)));

        let updateCells2 = updateCells1.map((row) => row.map((cell) => (
            (cell.id === this.state.currentPlayerCell) ? { ...cell, taken: false } : cell)));

        let newPlayer = `${this.state.blackTurn ? 'w-' : 'b-'}${newCellColor}`

        this.setState({
            gamePiecesWhite: newPiecePositionWhite,
            gamePiecesBlack: newPiecePositionBlack,
            board: updateCells2,
            availableCells: '',
            blackTurn: !this.state.blackTurn,
            currentPlayer: newPlayer,

        })
    }

    componentDidUpdate(previousProps, previousState) {
        const rowNumSetWhite = new Set();
        const rowNumSetBlack = new Set();
        for (let i = 0; i < this.state.gamePiecesWhite.length; i++) {
            rowNumSetWhite.add(Number(this.state.gamePiecesWhite[i].position.split('-')[0]));
        }
        for (let i = 0; i < this.state.gamePiecesBlack.length; i++) {
            rowNumSetBlack.add(Number(this.state.gamePiecesBlack[i].position.split('-')[0]));
        }
        const gameOver = rowNumSetWhite.has(0) || rowNumSetBlack.has(7);
        if (previousState.gameOver !== gameOver) {
            this.setState({
                gameOver
            })
        }
    }

    newGame = () => {
        this.setState({
            board: this.createBoard(),
            newGame: true,
            gameOver: false,
            blackTurn: true,
            currentPlayer: '',
            currentPlayerCell: '',
            availableCells: '',
            gamePiecesBlack: blackStartPosition,
            gamePiecesWhite: whiteStartPosition
        })
    }

    skipTurn = () => {
        let playerColor = '';

        for (let y = 0; y < this.props.nrows; y++) {
            for (let x = 0; x < this.props.ncols; x++) {
                if (this.state.board[y][x].id === this.state.currentPlayerCell)
                    playerColor = this.state.board[y][x].color;
            }
        }

        let newPlayer = `${this.state.blackTurn ? 'w-' : 'b-'}${playerColor}`
        let newPlayerCell = '';

        if (this.state.blackTurn) {
            newPlayerCell = (this.state.gamePiecesWhite.filter(p => p.id === newPlayer))[0].position;
        } else {
            newPlayerCell = (this.state.gamePiecesBlack.filter(p => p.id === newPlayer))[0].position
        }

<<<<<<< HEAD
=======

>>>>>>> 2d35cec... Game final revision
        this.setState({
            availableCells: '',
            blackTurn: !this.state.blackTurn,
            currentPlayer: newPlayer,
            currentPlayerCell: newPlayerCell
        })
    }

    btnSkipToggle = () => {
        if ((typeof (this.state.availableCells) === 'object') && Object.keys(this.state.availableCells).length === 0) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        let tblBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let tblCols = [];
            for (let x = 0; x < this.props.ncols; x++) {
                let coord = this.state.board[y][x].id;
                tblCols.push(<Cell
                    key={coord}
                    id={coord}
                    cellColor={this.state.board[y][x].color}
                    cellTaken={this.state.board[y][x].taken}
                    gamePiecesWhite={this.state.gamePiecesWhite}
                    gamePiecesBlack={this.state.gamePiecesBlack}
                    moveToCell={this.moveToCell}
                    movePiece={this.movePiece}
                    currentPlayer={this.state.currentPlayer}
                    newGame={this.state.newGame}
                    availableCells={this.state.availableCells}
                    gameOver={this.state.gameOver}
                />);
            }
            tblBoard.push(<tr key={Math.random()}>{tblCols}</tr>);
        }

        let winnerMessage = '';
        if (this.state.blackTurn) {
            winnerMessage = 'White won!'
        } else {
            winnerMessage = 'Black won!'
        }

        return (
            <div className="Game">
                <h1 className="Game-name neon-orange">Kamisado</h1>
                <div className="Game-btn">
                    <button onClick={this.newGame}>New Game</button>
                    <button disabled={this.btnSkipToggle()} onClick={this.skipTurn}> Skip Turn</button>
                    <Rules />
                </div>
                {this.state.gameOver && <h2 className="Game-winner-msg">{winnerMessage}</h2>}
                <table className={`Game-board ${this.state.gameOver ? 'Game-over' : ''}`}>
                    <tbody>
                        {tblBoard}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Game;

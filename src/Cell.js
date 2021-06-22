import React, { Component } from 'react';
import './Cell.css';
import GamePiece from './GamePiece';


class Cell extends Component {
    clickableCells = () => {
        if (!this.props.newGame && this.props.availableCells) {
            this.props.availableCells.map(c => (
                c.id === this.props.id
                    ? this.props.moveToCell(this.props.id, c.color)
                    : undefined
            ))
        }
    }

    render() {
        const cellId = this.props.id;
        const cellColor = this.props.cellColor;

        return (
            <td
                id={cellId}
                className="Cell"
                style={{ backgroundColor: cellColor }}
                onClick={this.clickableCells}
            >
                {this.props.cellTaken &&
                    < GamePiece
                        gamePiecesWhite={this.props.gamePiecesWhite}
                        gamePiecesBlack={this.props.gamePiecesBlack}
                        cellId={this.props.id}
                        cellColor={cellColor}
                        movePiece={this.props.movePiece}
                        currentPlayer={this.props.currentPlayer}
                        newGame={this.props.newGame}
                        gameOver={this.props.gameOver}

                    />}
            </td>
        )
    }
}


export default Cell


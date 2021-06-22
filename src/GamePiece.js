import React, { Component } from 'react';
import './GamePiece.css';

class GamePiece extends Component {
    render() {
        let { cellId } = this.props
        const displayPiecesWhite = this.props.gamePiecesWhite.map(p =>
            (p.position === cellId)
            && (<i
                className={`fab fa-fort-awesome-alt w ${(this.props.currentPlayer === p.id && !this.props.gameOver) && 'active'}`}
                style={{ backgroundColor: `${p.id.split('-')[1]}` }}
                key={p.id}
                id={p.id}
                onClick={this.props.currentPlayer === p.id
                    ? (() => this.props.movePiece(p.id, cellId))
                    : undefined
                }
            ></i>)
        )

        const displayPiecesBlack = this.props.gamePiecesBlack.map(p =>
            (p.position === cellId)
            && <i
                className={`fab fa-fort-awesome-alt b ${(this.props.currentPlayer === p.id && !this.props.gameOver) && 'active'}`}
                style={{ backgroundColor: `${p.id.split('-')[1]}` }}
                id={p.id}
                key={p.id}
                onClick={this.props.currentPlayer === p.id || this.props.newGame === true
                    ? (() => this.props.movePiece(p.id, cellId))
                    : undefined
                }
            ></i>)

        return (
            <div>
                {displayPiecesWhite}
                {displayPiecesBlack}
            </div>
        )
    }
}

export default GamePiece;
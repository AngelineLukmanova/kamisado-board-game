import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import './Rules.css'

const Rules = () => {
    return (
        <ReactCircleModal
            backgroundColor="#641b2ac9"
            toogleComponent={onClick => (
                <button onClick={onClick}>How to play?</button>
            )}>
            {(onClick) => (
                <div className='Rules'>
                    <h2>Object of the game</h2>
                    <p>The objective of the game is to get one of your towers to the opponent's 'home row'.</p>
                    <h2>Playing the Game</h2>
                    <h3>WHICH TOWER?</h3>
                    <p>The players take turns to move a tower, each attempting to be the first to place a tower on a square within their opponent’s home row. </p>
                    <p>The dragon towers are moved according this rules:</p>
                    <p><span>Rule T1:</span> Black make the first move</p>
                    <p><span>Rule T2:</span> For the first move only the player playing black can select any of the eight towers as the one to be moved</p>
                    <p><span>Rule T3:</span> For all subsequent moves (i.e. on any move except the first), each player must move the tower
                    that matches the colour of the square on which their opponent’s previous move finished.</p>
                    <h3>To make a move a player must click on a tower first. Colorful light around a tower works as a hint and indicates which tower must be chosen next.</h3>
                    <h3>VALID MOVES?</h3>
                    <p>Rules determining how that tower can be moved:</p>
                    <p><span>Rule M1:</span> A tower must be moved in a straight line, either directly forwards or diagonally forwards. No sideways or backwards moves are allowed</p>
                    <p><span>Rule M2:</span> A tower can be moved any number of squares, but may not pass through any square that already contains a tower (either belonging to the player making the move, or to the opponent)</p>
                    <p><span>Rule M3: </span>A tower must be moved at least one square if it is at all possible to do so</p>
                    <p><span>Rule M4:</span> If it is impossible to move the required tower in any way (i.e. if it is completely blocked from moving forwards or diagonally forwards), the player whose turn it is to move that tower
                    has to miss that turn, and the opponent moves again immediately.</p>
                    <p>In that case the  <button>Skip Turn</button>  button becomes enabled and must be pressed.</p>
                    <p>Although the tower remains on the same spot, it is considered that this dragon tower has made a (zero-length) move that finished on this square.
                    This means that this player’s opponent will move again, using the tower whose colour matches the square on which the blocked player’s dragon tower was trapped</p>
                    <p><span>Rule M5:</span> The game finishes as soon as either player succeeds in moving one tower to any square within their opponent’s ‘home row’. That player is a winner.</p>
                    <div className='Rules-close-btn'>
                        <button onClick={onClick}>Close</button>
                    </div>
                </div>
            )}
        </ReactCircleModal>
    )
}

export default Rules;
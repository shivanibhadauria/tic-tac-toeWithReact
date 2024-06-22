export default function GameOver({winner}){
    return <div id="gameOver">
        <h2>Game Over!</h2>
        { winner && <p>{winner} won! </p>}

        { !winner && <p>its a draw </p>}

        <p>
        <button>Rematch!</button></p>
    </div>
}
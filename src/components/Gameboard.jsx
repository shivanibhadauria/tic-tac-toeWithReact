import { useState } from "react"




    

/*const [oldGameBoard, newGameboard ]=useState(initialGameboard);
function handleSelectplayer(rowIndex,colindex){
    newGameboard((preGameboard)=>{
        const updatedGameBoard = [...preGameboard.map (innerArray => [...innerArray])]
        updatedGameBoard[rowIndex][colindex]=activePlayerSymbole;
        return updatedGameBoard;
    } )
    onSelectSquare();
}*/
export default function Gameboard( {onSelectSquare , board}){

   return <ol id="game-board">

    {board.map(( row, rowIndex)=> <li key={rowIndex}>
        <ol>{row.map(( playerSymbol, colindex) => <li key={colindex}
        ><button onClick={() => onSelectSquare(rowIndex,colindex)} disabled={playerSymbol!==null}>{playerSymbol} </button>


        </li>)}</ol>
    </li>)}
        
    

    
    
    </ol>}

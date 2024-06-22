import './App.css';
import './index.css'
import './components/player.jsx'
import Player from './components/player.jsx';
import Gameboard from './components/Gameboard.jsx'
import { useState } from 'react';
import Log from './components/Log.jsx';
import  {WINNING_COMBINATION} from './components/WINNING_COMBINATIONs.jsx'
import GameOver from './components/GameOver.jsx';


const initialGameboard = [
  [null, null, null],
  [null,null,null],
  [null,null,null],]




 function derivedActiveplayer(gameTurns){
  let playerRightNow = "X";
  if(gameTurns.length>0 && gameTurns[0].player==="X"){
    playerRightNow ="O";}
    return playerRightNow;
}

function App() {

  const [oldPlayer, setPlayer] = useState({X:'player 1', O:'player 2'})
  const [gameTurns, setGameTurns] =useState([]);
  //const [activePlayer, setNewActivePlayer] = useState("X")

  const activePlayer = derivedActiveplayer(gameTurns);


    let gameboard = [...initialGameboard.map(array=> [...array])]; 

    for(const turn of gameTurns){
        const{square, player}= turn;
        const{row,col}=square;
        gameboard[row][col]=player;
        }

let winner;
  for(const combination of WINNING_COMBINATION){

    const fistSquareSymbole = gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbole=gameboard[combination[1].row][combination[1].column];

    const thirdSquareSymbole= gameboard[combination[2].row][combination[2].column];

    if(fistSquareSymbole && fistSquareSymbole ===secondSquareSymbole && secondSquareSymbole
       ===thirdSquareSymbole){
        winner = oldPlayer[fistSquareSymbole];
       }



  }

  const hasDraw = gameTurns.length===9 && !winner;

  function handleSelectSquare(rowIndex, colIndex ){
    //setNewActivePlayer((currentPlayer)=> currentPlayer=="X"? "O":"X" );
    setGameTurns((prevTurn)=>{
const playerRightNow = derivedActiveplayer(prevTurn);
      
      const updateTurns = [
        
          {square: {row: rowIndex , col :colIndex}, player:playerRightNow},
        ...prevTurn,
        
        
      ]

      return updateTurns;
    });


  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(){
    setPlayer(prevTurn=>{
      return {
        ...prevTurn,
        [gameTurns]: oldPlayer,
      }
    })
  }


  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
 <Player player="Player 1" symbole="X"  isActive={activePlayer==="X" }
    onChangeName={handlePlayerNameChange}

/>
 <Player player="Player 2" symbole="O" isActive={activePlayer==="O"}
  onChangeName={handlePlayerNameChange}
 />
 </ol>
 {(winner|| hasDraw)&&  <GameOver winner={winner} onrestart={handleRestart}/>}
 <Gameboard onSelectSquare={handleSelectSquare}  board={gameboard} />
 </div>
 <Log turns={gameTurns}/>



 
   </main>
  )
}


export default App;

import { useState } from "react";


export default function Player({player, symbole, isActive}){

    const [ initialName, updatedName] = useState(player);

    const [isEditing, SetisEditing ] = useState(false);

    function updatePlayer(event){
        updatedName(event.target.value)
    }


    function handleEditClicked(){
        SetisEditing((editing) => !editing );
    }

    let playername =  <span  className='player-name'>{initialName}</span> ;
    if(isEditing){
        playername = <input type="text" onChange={updatePlayer} required value={initialName}/>

    }


  

 return (
 <li className={isActive? "active": undefined} >
    <span className="player">
  
      {playername}
  
   
  <span className='player-symbol'>{symbole}</span>
  </span>
  <button onClick={handleEditClicked}>{isEditing? "Save": "Edit"}</button>
  </li>
  );}
  

import { useState } from "react";

export default function Player({ initialName , symbol , isActive }){
    const [ playerName , setPlayerName ] = useState(initialName);
    const [ isEditing , setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing( editing => !editing );
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }


    let playerNameContent = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"
    if(isEditing){
        playerNameContent = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption = "Save"
    }
   
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>

    );
}
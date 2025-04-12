import { useState , useEffect } from "react";


export default function ProgressBar( {timer} ){
    const [reminingTime,setRemainingTime] = useState(timer);

      
      useEffect(()=> {
        const interval =  setInterval( () => {
          console.log('INTERVAL');
          setRemainingTime( prevTime =>  prevTime - 10 );
        }  , 10 );
    
        return ()=>{
          clearInterval(interval);
        };
      } , []); 


      return <progress value={reminingTime} max={timer}>

      </progress>
}
import { useState , useEffect } from "react";
export default function QuestionTimer({ timeout , onTimeout }){
    
    const [remainingTime,setRemaingTime] = useState(timeout);
    
    useEffect(()=>{
        const timer = setTimeout(onTimeout,timeout);

        return () => {
            clearTimeout();
        }

    } , [timeout,onTimeout]);

    useEffect( ()=> {
        const interval = setInterval(()=> {
            setRemaingTime(prevRemainingTime => prevRemainingTime - 100);
        } , 100);

        return ()=> {
          clearInterval(interval);  
        };    
    } 
    
    , [] );

    

    

    return <progress id="question-time" max={timeout} value={remainingTime}/>;

}
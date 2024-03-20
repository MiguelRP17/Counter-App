import { useState } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";


export default function Counter(){
    const [counter, setCounter] = useState(0)
    
    function increaseCounter(){
        setCounter(counter+1)
        
    }

    function decreaseCounter(){
        setCounter(counter-1)
    }

    function resetCounter(){
        setCounter(0)
    }

    return (
        <div>
            <h1 className="title" >Grades : {counter}</h1>
            <Button1 counter={counter} onClick={increaseCounter} />
            <Button2 counter={counter} onClick2={decreaseCounter}/>
            <Button3 counter={counter} onClick3={resetCounter}/>
          
        </div>
    );
}
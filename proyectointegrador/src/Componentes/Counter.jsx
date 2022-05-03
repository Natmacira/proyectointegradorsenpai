import { useState } from "react";

const Counter = (props) => {

    const [counterTwo, setCounterTwo] = useState (0); 

    const firstCounterAdd = () => {
        const firstAdd = counterTwo + 1 

        setCounterTwo(firstAdd)
    }

    const firstCounterRest = () => {
        const firstRest = counterTwo -1 

        setCounterTwo(firstRest)
    }

    return (
       <> 
        <button onClick={firstCounterAdd} className="counter">+</button>
        <span >{props.state + counterTwo}</span>
        <button onClick={firstCounterRest} className="counter">-</button>
        </>
        )
}

export default Counter;
import Counter from "./Counter";
import { useState } from "react";

const TotalCounter = () => {


    const [counterOne, setCounterOne] = useState (0); 
      

    const increaseAll = () => {
        const allGrows = counterOne + 1 

        setCounterOne(allGrows)

    }

    const restAll  = () => {
        const allRest = counterOne - 1

        setCounterOne(allRest)
    }


    return (
    <>
    <Counter state = {counterOne} stateSet = {setCounterOne}  />
    <Counter state = {counterOne} stateSet = {setCounterOne}  />
    <Counter state = {counterOne} stateSet = {setCounterOne}  />
    <button onClick={increaseAll} className="counter">+ all</button>
    <button onClick={restAll} className="counter">- all</button>
    </>
    )
}

export default TotalCounter;
import React, {useState} from "react";

export function Counter() {

    const [count,setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count+1);
    }

    const decrementCounter = () => {
        setCount(count-1);
    }

    return(
        <div>
            <p data-testid="counter">Counter: {count}</p>
            <button data-testid="incrementCounter" onClick={incrementCounter}>+</button>
            <button data-testid="decrementCounter" onClick={decrementCounter}>-</button>

        </div>
    );
}

export default Counter;
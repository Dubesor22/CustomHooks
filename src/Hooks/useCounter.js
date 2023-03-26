import { useState } from "react";


const useCounter = (n) => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + n);
  };

  const decrement = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - n);
  };

  const reset = () => {
    setCounter(0);
  };


  return {
    counter,
    increment,
    decrement,
    reset,
  }
}

export default useCounter;
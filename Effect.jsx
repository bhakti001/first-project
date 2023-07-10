import React, { useEffect, useState } from 'react'

function Text() {
    const [num , setNum] = useState(0);
    const [num1 , setNum1] = useState(10);
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
 
    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num === 10 ? num : num + 1 );
            setNum1((num1) => num1 === 0 ? num1 : num1 - 1 );
    setCalculation(() => count * 2);

        }, 1000);
}, [count, num , num1]);
  return (
<>
<button> increment  {num}</button>
<button> decrement  {num1}</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
</>
    )
}

export default Text;
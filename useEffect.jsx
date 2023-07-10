const [num , setNum] = useState(0);
const [num1 , setNum1] = useState(10);
import React from 'react'

function useEffect() {
 
    useEffect(() => {
        setTimeout(() => {
            setNum((num) => num === 10 ? num : num + 1 );
            setNum1((num1) => num1 === 0 ? num1 : num1 - 1 );
        }, 2000);
});
return (
    <>
<button> increment  {num}</button>
<button> decrement  {num1}</button>
</>
)
    }
    
    export default useEffect;
import { useEffect, useState } from "react";
import "./button.css";

function Button(props){
    const [count,setCount] =useState(0);
    const [bgColor, setbgColor] = useState("pink");
    const [condition, setCondition] = useState(false);
    useEffect(() => {
        const interval = setInterval(() =>{
            setCount(count +1);
        },1000);
        return  () => clearInterval(interval);
    },[count]);
    return(
        <div className="button">
            <h1>{count}</h1>
            {/* <button onClick={()=>{setbgColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
            setCondition(condition);
            }} >{props.title}</button> */}

        </div>
    )
    
}
export default Button;
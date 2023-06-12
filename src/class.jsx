import { useState } from "react"

export default function Class(props ){
    const [count, setCount] = useState({second:"here",first:"hrllo"})
    function update(){
setCount({...count  ,first:"hy"})
    }
    return(
        <>
        <div>hello{props.title}</div>
        <button className="bnx2" onClick={update}>click {count.second} hrg {count.first}</button>
        </>
    )
}
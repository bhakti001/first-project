import { useState } from "react"
import { words } from "./App"



const btn={
    
        padding: '10px',
        margin: '20px',
        width: '120px',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', 'Arial, sans-serif'",
        fontSize: '16px',
        borderRadius: '5px',
         background: 'rgb(36, 175, 230)',
         boxShadow: '1px 1px 1px  black',
         border: '1px solid black',
        cursor: 'pointer',
}
function State(){
 
    
    const [text, setText] = useState("success")
    return(
        <div>
<h1 style={{fontSize:"200px" , letterSpacing:"20px"}}>{text}</h1>
<button  style={btn} onClick={()=> setText(words[Math.floor(Math.random() * words.length)]) } > Change text</button>
</div>
    )
}
export default State
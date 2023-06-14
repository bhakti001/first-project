import { useState ,useEffect} from "react"
import { words } from "./App"


function State(){
    const [text, setText] = useState("success")
const [animeClass,setAnimeClass] =useState("")
    
    useEffect(() => {
if (animeClass) {
    setAnimeClass("");
    setTimeout(() => {
       setAnimeClass("anime"); 
    }, 500);
}      else{
    setAnimeClass("anime")
}
 } ,[text] )   
    return(
        <div className="quotes">
<h1 className={`quote-text ${animeClass}`}>{text}</h1>
<ul className="quote-ul">
{
    words.map((ele) => (

    <li className="quote-li" onMouseEnter={() => setText(ele)}>{ele}</li>
    ))
}
{/* <button  style={btn} onClick={()=> setText(words[Math.floor(Math.random() * words.length)]) } > Change text</button> */}

</ul>
</div>
    )
}
export default State;
import "./boxes.css"
import React, { useState } from "react";



export default function Box(){
   const[count,setCount] = useState(0)

   const [addbox,setAddBox]=useState([]);
   const Addboxes=()=>{
       const abc=[...addbox,[]]
       setAddBox(abc)
   }  
   // console.log(addbox,"data-")
return(
    <>
    <button onClick={()=>Addboxes()}>Add</button>
        {addbox.map((data)=>{
            return(
               <div>
                    <div className="box1" value={data}/>
               </div>
            )
        })}
    </>
);
}


























// function  Boxes(props){
   
//  return(

//     <div className="box1" style={{backgroundColor:props.color}}></div>
//  )
// }
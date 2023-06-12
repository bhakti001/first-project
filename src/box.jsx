import { useState } from "react";

function Box() {
    const duplicateArray = Array.from({ length: 50 }).map(() => ({ color: "" }));
  const [boxes, setBoxes] = useState(duplicateArray);
  function changeColor(index, action) {
    const updateArray = boxes.map((ele, i) => {
      if (i === index) {
        if (action === "enter") {
          return { color: "red" };
        } else {
          return { color: "" };
        }
      } else {
        return ele;
      }
    });
    setBoxes(updateArray);
  }
  return(
    <>
    <div className="box-container">
{
    boxes.map((ele,i)=>(
        <div onMouseEnter={()=> changeColor(i,'enter')}onMouseLeave={()=> changeColor(i,'leave')}className="box1">
            <div className={'box-wrrapper ${ele.color && "anime"}'}></div>
        </div>

    ))
}
    </div>
    </>
  )
}

export default Box;

    //  function Box() {
    // const [addbox, setAddBox] = useState([]);
    
    //     const Addboxes =() => {
    //         const add =[...addbox,[]];
    //         setAddBox(add);
    //     };
    //     return(
    //         <>
    //         <button className="bnx2" onClick={()=>Addboxes()}>Add Box</button>
    //         {addbox.map((data)=>{
    //             return(
    
    //                 <div className="box1" value={data}></div>
    //                 );
    //         })}
    
    //         </>
    //     )
    // }
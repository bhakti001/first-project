import { useState } from "react";

 function Box() {
const [addbox, setAddBox] = useState([]);

    const Addboxes =() => {
        const add =[...addbox,[]];
        setAddBox(add);
    };
    return(
        <>
        <button className="bnx2" onClick={()=>Addboxes()}>Add Box</button>
        {addbox.map((data)=>{
            return(
                
                <div className="box1" value={data}></div>
                );
        })}
            
                
        </>
    )
}

export default Box;
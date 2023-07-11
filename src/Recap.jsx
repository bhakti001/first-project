import React, { useEffect, useState } from 'react'

function Recap() {
    const [status,setStatus] =useState('');

    useEffect (() => {
        let message = " "; 
        if (!status){
            message = `Recap Component`;
        }else{
            message = `Recap Component Task is  ${status}`;
        }
        document.title = message;
        localStorage.setItem('message',message);
        return ()=>{
            localStorage.clear();
        }
    }, [status]);
    function statusUpdate() {
        if (!status) {
            setStatus("pending");
        }else if (status === "pending"){
            setStatus ("processing");
        } else if (status === "processing"){
            setStatus ("Completed");
        }

    }
  return (
    <>
    <h1>Recap</h1>
    <h1>{status}</h1>
    <button onClick={statusUpdate}>Update</button>
    </>
  )
}

export default Recap;
import React, { useCallback, useEffect, useMemo, useState } from 'react'

function UseCallback() {
    const [number,setNumber] =useState(1);
    const [numbe,setNumbe] =useState(1);
    
    const memo =useMemo(() => {
        return [number ,number +1 ,number +2 ];
    },[number]);
    
    const callback =useCallback(() => {
        return [number ,number +1 ,number +2 ] 
    },[number]);
    
  return (
    <>        <h1>callback</h1>
        <input type="number" onChange={(e) => setNumber(Number(e.target.value))}></input>
        {
            callback().map((value) => (
                <h1>{value}</h1>
            ))
        }
        <h1>memo</h1>
        {
            memo.map((value) => (
                <h1>{value}</h1>
            ))
        }
    </>
  )
}

export default UseCallback;






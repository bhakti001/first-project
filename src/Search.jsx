import React, { useState } from 'react'
import Sresult from './Sresult';

function Search() {
    const[img , setImg] = useState('');
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data );
        setImg(data)
    }
  return (
    <>
    <div className='searchbar'>
        <input type="text" placeholder='Search Anything' value={img} onChange={inputEvent} />
     </div>
     {img === "" ? null : <Sresult name={img}/>} 
    </>
  )
}

export default Search
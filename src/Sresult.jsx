import React from 'react'

function Sresult(props) {
    const img = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
    <div className='searchimg'>
         <img className='searchimg' src={img}  alt="img" />
    </div>
    </>
  )
}

export default Sresult
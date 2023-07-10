import React, { useEffect, useState } from 'react'
import {   useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';
function Home() {
  const navigate=useNavigate();
  const [today, setToday] = useState('');

  useEffect(() => {
      setToday(`${dayjs().format('DD/MM/YYYY ')}`);
  
  }, [])
  return (
    <>

    <div>Home</div>
    {today}
    <button onClick={() => navigate('/about')}  className='btn2'> click me</button>
    </>
  )
}

export default Home
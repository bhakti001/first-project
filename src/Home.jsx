<<<<<<< HEAD
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

=======
import React from 'react'
import Card from './Card'

function Home() {
  return (
    <>
 <Card/>
    <Card/>
    <Card/>
    </>
  )
}
>>>>>>> 23d67654c56c7cfc75b302732235a8121d0ff78b
export default Home
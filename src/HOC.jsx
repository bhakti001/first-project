import React, { Component, useState } from 'react'

function HOC() {
    const[isAuthenticated,setIsAuthenticated] = useState(false);
    useEffect(() => {
      const loggedIn = localStorage.getItem('user')
      if(loggedIn){
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
    }, [isAuthenticated])
    
  return (
<>
<Component isAuthenticated={isAuthenticated}/>
</>
    )
}

export default HOC;
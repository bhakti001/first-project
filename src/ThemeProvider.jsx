import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext({})
function ThemeProvider({childern}) {
   const theme = localStorage.getItem('theme');
   const[mode , setMode] = useState(theme ?? '');
// console.log(theme ,'theme');
   useEffect(() => {
    //  if (mode === 'light' ){
    //     document.body.style.backgroundColor ='gray'
    // }else {
    //      document.body.style.backgroundColor ='lightblue'
    //  }
     localStorage.setItem('theme' , mode);
   }, [mode])
   
  return (
    <>
        <ThemeContext.Provider value={{mode,setMode}}>
 {childern}
        </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider;
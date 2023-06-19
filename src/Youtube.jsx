import React from 'react'
import { styled } from 'styled-components';

function Youtube() {
  return (
    <>
<Maindiv>
<Ybar>

    <Yt1 src="https://i.ytimg.com/vi/FIeJs8aeR3Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCA9LTWKFo04JbjFuQpWnl8iImiKg" alt="" />
<Ytwrapper>
    <Ytim src="https://yt3.googleusercontent.com/qAFwAVYgGe11kY-cKsyVwNaI04rCt8RUI_iLLldNM9EcZO3d4es-QXGWZp0k5QEU_l91nO1D=s176-c-k-c0x00ffffff-no-rj" alt="" />
    <Yp>
Ram Siya Ram | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम | 1 hour straight |
    </Yp>
</Ytwrapper>
  <Yr>
  <Yp>
  TIME LOFI AND CHILL
  </Yp>
             <Yp>7.5M views 7 months ago</Yp>
             </Yr>
</Ybar>
</Maindiv>
    </>
  )
}
const Maindiv= styled.div`
 width:100%;
 height:100vh;
 display:flex;
 justify-content:center;
 align-item:center;
`
const Ybar = styled.div`
 width:20%;
  border:2px solid black;
 padding:5px 5px 5px;
 border-radius:15px;
 margin:auto;
`
const Yt1 = styled.img`
 width:100%;
 border-radius:10px;
 height:20vh;    
`
const Ytim = styled.img`
 width:8%;
 height:3vh;
 border-radius:100%;
`
const Yp = styled.div`
margin:0px;
`
const Yr = styled.div`
margin:7px;
margin-left:32px;`

const Ytwrapper = styled.div`
display:flex;
gap:10px;
justify-content:center;
`
export default Youtube;









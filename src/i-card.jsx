import { useRef } from "react"
import { colors } from "./App";

function Card({name,address,grno,dob,cource}){
    const cardRef = useRef();
    const changeColor = () =>{
cardRef.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
    const main=
    {width:"20%" ,textAlign:"center" ,border:"2px solid black"  ,boxShadow: "0px 0px 40px 0px black",margin:"130px" ,background:'white',borderRadius:"30px"}
    const img1=
        {width:"200px", marginTop:"10px"}
    const img2={width:"130px" ,height:"130px",borderRadius:"50%" , marginTop:"1px"  , transform: "rotate(145deg) ,skew(22.5deg)" }
    const nam={fontFamily:"cursive" , color:"blue"}
    const im="download-removebg-preview.png"
    const im1="IMG_2767 (2).jpg"
    return(

        <div style={main} onClick={{changeColor}}>
            <img src={im} alt="" style={img1} /><br />
            <img src={im1} alt="" style={img2}/> <br />
                <span style={nam}>{name}</span> 
            <div style={{textAlign:"left" ,padding:"5px"}}>
            <label >GR NO:</label>
            <span>{grno}</span> <br />
            <label >DOB:</label>
            <span>{dob}</span> <br />
            <label >Cource:</label>
            <span>{cource}</span> <br />
            <label >Address:</label>
            <span>{address}</span>
<br /><br />
            </div>
        </div>
    )
}
export default Card;
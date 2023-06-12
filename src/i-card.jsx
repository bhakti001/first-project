function Card({name,address,grno,dob,cource}){
    return(
        <div style={{width:"20%" ,textAlign:"center" ,border:"2px solid black"  ,boxShadow: "0px 0px 40px 0px black",margin:"130px" ,background:'white',borderRadius:"30px"}}>
            <img src="download-removebg-preview.png" alt="" style={{width:"200px", marginTop:"10px"}} /><br />
            <img src="IMG_2767 (2).jpg" alt="" style={{width:"130px" ,height:"130px",borderRadius:"50%" , marginTop:"1px"  , transform: "rotate(145deg) ,skew(22.5deg)" }}/> <br />
                <span style={{fontFamily:"cursive" , color:"blue"}}>{name}</span> 
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
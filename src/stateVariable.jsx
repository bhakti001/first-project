import {Component,  useState } from "react";

// export default function StateVariable(){
//     const[greetings,setGreetings] = useState("Good morning");
//     const[count,setCount] = useState(0)
//     const[showgreetings,setShowGreetings] =useState(false);

//     function setData(greetings){
//         setGreetings(greetings);
//         setShowGreetings(true)
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         { showgreetings &&  <h1>{greetings}</h1>}
//  <button className="form-btn" onClick={() => setData("Good morning")}>Good afternoon</button><br />
//  <button className="form-btn" onClick={() => setData("Good afternoon")}>Good morning</button> <br />
//  <button className="form-btn" onClick={() => setData("Good night")}>Good night</button><br />
//  <button className="form-btn" onClick={() => setCount({count: count >= 20 ? count: count + 1})}>Click me</button><br />
 
 
//  </>
//     )
// }

export default class StateVariable extends Component{
    constructor(){
        super();
        this.state ={
            count : 0,
            greetings:"Good morning",
            showgreetings:false
        }
    } 
 setData = (greetings)=>{
    this.setState({greetings,showgreetings:true})
 }
 render(){
    const {count,greetings,showgreetings} = this.state;
    return (
        <>
        <h1>{count}</h1>
        { showgreetings &&  <h1>{greetings}</h1>}
 <button className="form-btn" onClick={() => this.setData("Good morning")}>Good afternoon</button><br />
 <button className="form-btn" onClick={() => this.setData("Good afternoon")}>Good morning</button> <br />
 <button className="form-btn" onClick={() => this.setData("Good night")}>Good night</button><br />
 <button className="form-btn" onClick={() => this.setState({count: count >= 20 ? count: count + 1})}>Click me</button><br />
        </>
        )
    }


}
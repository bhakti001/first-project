// import logo from './logo.svg';
import "./App.css";
// import ClassEquipment from './ClassEquipment';
// import Box from './box';
// import Boxes from './boxes';
// import Form from './form';
// import UseRef from './Useref';
// import StateVariable from './stateVariable';
import Class from "./class";
import Card from "./i-card";

function App() {
  // const duplicateArray = Array.from({length:100});
  // const colors = ["red","blue","green","yellow","skyblue","cyan","purple","#282c34","#fff","rgba(44, 255, 227, 0.884)"];
  // const[count,setCount]=UseState(0)
  // const [color,setcolor]= UseState([{Color:"red"},{color:"blue"}])

  return (
    <div className="App">
      {/* <StateVariable/> */}
      <Card name="BHAKTI SAVALIYA" address="sitanagar,surat" dob="01/11/2004" grno="234554" cource="WEB DESIGN"/>
      {/* <Box></Box> */}
      {/* <ClassEquipment label={"room 1"}fan={3} whiteboard={"1"} bench={15} projecter={"1"} watch={"1"} ac={"1"} laptop={"5"}/>
<ClassEquipment label={"room 2"}fan={3} whiteboard={"1"} bench={15} projecter={"1"} watch={"1"} ac={"1"} laptop={"5"}/>
<ClassEquipment label={"room 3"}fan={3} whiteboard={"1"} bench={15} projecter={"1"} watch={"1"} ac={"1"} laptop={"5"}/> */}
      {/* <Class title={"     yash"} /> */}
    </div>
  );
}
export default App;

// {/* <Form></Form>*/}
// {/* <Post src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" content={"Wikis oconstantly changes the website landscape."} /> */}
// {/* <Button content={"Click Here"}/>
// <Button  content={"Read More"}/>
// <Button  content={"Stop"}/>
// <Button  content={"Start"}/> */}
// {/* { duplicateArray.map(() => (

// // <Boxes color={colors[Math.floor(Math.random() * colors.length)]}></Boxes>

// ))};  */}
// {/* <Button/> */}

// {/* <button onClick={()=> setCount(count=10 ? count: count+1)}>click me</button> */}

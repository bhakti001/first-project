import logo from './logo.svg';
import './App.css';
import Boxes from './boxes';

function App() {
  // const duplicateArray = Array.from({length:100});
  // const colors = ["red","blue","green","yellow","skyblue","cyan","purple","#282c34","#fff","rgba(44, 255, 227, 0.884)"]; 
  const[count,setCount]=UseState(0)
  // const [color,setcolor]= UseState([{Color:"red"},{color:"blue"}])
  return (
    <div className="App">
      {/* <Post src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" content={"Wikis oconstantly changes the website landscape."} /> */}
      {/* <Button content={"Click Here"}/>
    <Button  content={"Read More"}/>
    <Button  content={"Stop"}/>
    <Button  content={"Start"}/> */}
{/* { duplicateArray.map(() => (

      // <Boxes color={colors[Math.floor(Math.random() * colors.length)]}></Boxes>
       
))};  */}
<h1>
  this button is for {count}Click.
</h1>


<button onClick={()=> setCount(count=10 ? count: count+1)}>click me</button>
    </div>
  );  
};
export default App;

import './Navbar.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import MainHeader from "./MainHeader";
import Login from './Login';
import PrivateRoute from './utils/PrivateRoute';
import Register from './Register';

function App() {
/*  const [videoLink, setVideoLink] = useState("");
  const link = videoLink.replace('watch?v=','embed/'); */
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
     <Route element={<MainHeader/>} path="/">
<Route path='/' element={<PrivateRoute element={Home}/>} />
<Route path='/about' element={<About/>}  exact={true}/>
<Route path='/contact' element={<Contact/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='*' element={<Error/>} />
</Route>
</Routes>
     </BrowserRouter>


      {/* <Maindiv>
          {YtData.map((yt) => (
            <Ytsstyled {...yt} onClick={(link) => setVideoLink(link)}/>

          ))}
        </Maindiv>
        {videoLink && <iframe width="100%" height="800vh" src={link}  title="Coke Studio | Season 14 | Tu Jhoom | Naseebo Lal x Abida Parveen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>} */}

    </div>
  );
}
///* const Maindiv = styled.div`*/

// width: 90%;
// gap: 25px;
// margin: auto;
// margin-top: 10px;
// display: grid;
// grid-template-columns: repeat(3, 1fr);

// @media (max-width: 576px) {
//   grid-template-columns: 1fr;
// }

// @media (min-width: 576px) and (max-width: 992px) {
//   grid-template-columns: repeat(2, 1fr);
// }
// `;
export default App;

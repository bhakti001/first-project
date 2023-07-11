import './Navbar.css'
import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import MainHeader from "./MainHeader";
import Login from './Login';
import PrivateRoute from './utils/PrivateRoute';
import Register from './Register';
// import Recap from './Recap';
// import UseReducer from './UseReducer';

function App() {

  return (
    <div className="App">
     
     <Routes>
     <Route element={<MainHeader/>} path="/">
<Route path='/' element={<PrivateRoute element={Home}/>} />
<Route path='/about' element={<About/>}  exact={true}/>
<Route path='/contact' element={<Contact/>} />
{/* <Route path='/recap' element={<Recap/>} /> */}
{/* <Route path='/reduce' element={<UseReducer/>} /> */}
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='*' element={<Error/>} />
</Route>
</Routes>
    </div>
  );
}

export default App;

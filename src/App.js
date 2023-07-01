import { Route, Routes } from 'react-router-dom';
// import './App.css';
import './Navbar.css';
import ContactUs from './ContactUs';
import About from './About';
import MainHeader from './MainHeader';
import Home from './Home';
import Services from './Services';
import Search from './Search';

function App() {
 
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<MainHeader/>}>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
    </div>
  );
}
export default App;

import './App.css';
import {
  BrowserRouter,
  Route,
  Routes

} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from "./Component/Home.js";
import About from "./Component/About.js";




function App() {
  
  return (
    <BrowserRouter>
    <div className="App"> 
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     {/* <Blog /> */}
     <Navbar/> 
    <Routes>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/Home" element={<Home />}></Route>
    </Routes> 
    </div>
  );
}

export default App;

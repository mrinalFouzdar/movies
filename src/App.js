import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddminPannel from './Component/From/AddminPannel';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      mohaprobhu

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addmin_pannel' element={<AddminPannel/>}/>
      </Routes>
    </div>
  );
}

export default App;

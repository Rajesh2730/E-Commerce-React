import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Nav/NavBar';
import Slider from '../Sliders/Sliders';
import Signup from '../Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Slider/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='logup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

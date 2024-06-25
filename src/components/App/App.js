import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Nav/NavBar';
import Slider from '../Sliders/Sliders';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      <Slider/>
    </BrowserRouter>
  );
}

export default App;

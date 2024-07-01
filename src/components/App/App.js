import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Nav/NavBar';
import Slider from '../Sliders/Sliders';
import Signup from '../Signup/Signup';
import New from './New';
function App() { 
  let  name="rajesh"
  return (
    <div> 
      <Routes> 
        <Route path='/' element={<New name={name}/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      
      
    </div>
  );
}

export default App;

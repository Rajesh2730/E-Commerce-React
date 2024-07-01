import './App.css';

import { Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Signup/Signup';
import New from './New';
function App() { 
  return (
    <div> 
      <Routes> 
        <Route path='/E-Commerce-React' element={<New/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      
      
    </div>
  );
}

export default App;

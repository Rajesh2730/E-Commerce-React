import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/Nav/NavBar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      <NavScrollExample/>
    </BrowserRouter>
  );
}

export default App;

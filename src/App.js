import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav/NavBar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
      </Routes>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;

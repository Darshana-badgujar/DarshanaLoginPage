import {BrowserRouter,Routes,Route } from 'react-router-dom' ;

import logo from './logo.svg';
import './App.css';
import Login from './Component/Pages/Login'
import Register from './Component/Pages/Register';
function App() {
  return (
   //< Register/>
  //  <Login/>
    <BrowserRouter>
    <Routes>
     
     

     
     <Route path='/'  element={<Login/>}/>
     
     <Route path='/Register'element={<Register/>}/>
    </Routes>
     </BrowserRouter>
  ) ;
  
}

export default App;

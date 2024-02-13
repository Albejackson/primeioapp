import logo from './logo.svg';
import './App.css';
import Button from './components/Button/button';
import { useState } from 'react';
import Header from './components/Header/header';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/Comentarios/comentarios';



function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contato' element={<Contato />}/>
      <Route path='/fotos' element={<Fotos />}/>
      <Route path='/Comentarios' element={<Comentarios />}/>

    </Routes>
    </BrowserRouter> 


    </div>
  );
}

export default App;

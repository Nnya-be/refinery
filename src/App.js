import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route index  className='cursor-pointer' element={<Home/>} />
        <Route path='/'  className='cursor-pointer' element={Home}/>
        <Route path='/' className='cursor-pointer' element={About}/>
        <Route path='/' className='cursor-pointer' element={Contact} />
      </Routes>
    </Router>
)}


export default App;

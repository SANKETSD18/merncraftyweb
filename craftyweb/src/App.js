// rafc
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Pages/Home';
import Shoes from './Componets/Pages/Shoes';
import Watches from './Componets/Pages/Watches';
import Laptop from './Componets/Pages/Laptop';
import ConnectTo from './Componets/ConnectTo';
import Registration from './Componets/Registration';
import Camera from './Componets/Pages/Camera';

const App = () => {


  return (

    <>
      <Navbar />
      <Routes  >
        <Route path='/craftyweb' element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Shoes' element={<Shoes />} />
        <Route exact path='/Camera' element={<Camera />} />
        <Route exact path='/Watches' element={<Watches />} />
        <Route exact path='/Laptop' element={<Laptop />} />
        <Route exact path='/ConnectTo' element={<ConnectTo />} />
        <Route exact path='/Registration' element={<Registration />} />
      </Routes>
    </>

  );
}

export default App;


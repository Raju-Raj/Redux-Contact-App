import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';



const App=()=> {
  return (
    <div className="App">

      {/* need routes 1-add 2-edit/:id */}

      <ToastContainer/>

      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route  path="/add" element={<AddContact/>}/>

        <Route path="/edit/:id" element={<EditContact/>} />

      </Routes>
      

    </div>
  );
}

export default App;

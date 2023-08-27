import React, { useState } from "react";
import axios from "axios";
import $api from "./Api";
import Register from "./Pages/Register"
import Login from "./Pages/Login";
import Main from './Pages/Main'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/App.css'

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path='/' element={<Main />} />
  </Routes>
    </BrowserRouter>
  );
  }

export default App;
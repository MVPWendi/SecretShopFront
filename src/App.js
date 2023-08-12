import React, { useState } from "react";
import axios from "axios";
import $api from "./Api";
import Register from "./Pages/Register"
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (
    
    <BrowserRouter>
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
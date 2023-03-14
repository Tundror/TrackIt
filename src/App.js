import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SIgnUpPage";
import HabitsPage from "./pages/HabitsPage";

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" element={<HabitsPage />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

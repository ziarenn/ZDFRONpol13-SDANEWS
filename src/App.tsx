import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* TU KOMPONENTY KTORE MAJA SIE WYSWIETLAC CALY CZAS */}
        <Navbar />
        {/* ------- */}
        {/* TU KOMPONENTY KTORE BEDA SIE POJAWIAC I ZNIKAC (PODSTRONY KTORE BEDA SIE PRZELACZAC) */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* ------- */}
        {/* TU PONIZEJ ZNOW KOMPONENTY KTORE MAJA SIE WYSWIETLAC CALY CZAS, TU NP. FOOTER */}
      </BrowserRouter>
    </div>
  );
}

export default App;

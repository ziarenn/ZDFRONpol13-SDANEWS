import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
        {/* ------- */}
        {/* TU PONIZEJ ZNOW KOMPONENTY KTORE MAJA SIE WYSWIETLAC CALY CZAS, TU NP. FOOTER */}
      </BrowserRouter>
    </div>
  );
}

export default App;

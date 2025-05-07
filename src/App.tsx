import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import EmiForm from "./components/EmiForm";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/emi" element={<EmiForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

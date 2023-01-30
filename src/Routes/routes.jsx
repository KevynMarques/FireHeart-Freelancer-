import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

export const Rotas =  () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Home />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
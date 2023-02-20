import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";

export const Rotas =  () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Main />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
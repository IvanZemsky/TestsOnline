import React from "react";
import Header from "./components/Header/Header";
import "./basicStyles/App.css";
import './basicStyles/fonts.css';
import './basicStyles/wrapper.css'
import './basicStyles/_vars.css'
import { Route, Routes } from "react-router-dom";
import Tests from "./pages/Tests/Tests";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from './pages/ResultPage/ResultPage'

const App = () => {
   return (
      <div className="app">
         <Header />
         <Routes>
            <Route path="/" element={<Tests />} />
            <Route path="/test/:id" element={<TestPage />} />
            <Route path="/test/:id/result" element={<ResultPage />} />
         </Routes>
      </div>
   );
};

export default App;

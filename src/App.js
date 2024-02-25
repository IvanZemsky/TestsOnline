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
            <Route path="/tests" element={<Tests />} />
            <Route path="/tests/:id" element={<TestPage />} />
            <Route path="/tests/:id/result" element={<ResultPage />} />
         </Routes>
      </div>
   );
};

export default App;

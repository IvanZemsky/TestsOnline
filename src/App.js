import React from "react";
import Header from "./components/Header/Header";
import "./basicStyles/App.css";
import './basicStyles/fonts.css';
import './basicStyles/wrapper.css'
import './basicStyles/_vars.css'
import { Route, Routes } from "react-router-dom";
import Tests from "./pages/Tests/Tests";
import Test from "./pages/Test/Test";
import Result from './pages/Result/Result'
import Landing from "./pages/Landing/Landing";

const App = () => {
   return (
      <div className="app">
         <Header />
         <Routes>
            <Route index element={<Landing/>}/>
            <Route path="/tests" element={<Tests />} />
            <Route path="/tests/:id" element={<Test />} />
            <Route path="/tests/:id/result" element={<Result />} />
         </Routes>
      </div>
   );
};

export default App;

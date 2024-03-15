import React from "react";
import "./styles/App.css";
import "./styles/fonts.css";
import "./styles/wrapper.css";
import "./styles/_vars.css";
import { Route, Routes } from "react-router-dom";
import {LazyTests as Tests} from "./pages/Tests/LazyTests";
import {LazyTest as Test} from "./pages/Test/LazyTest";
import {LazyResult as Result} from "./pages/Result/LazyResult";
import {LazyLanding as Landing} from "./pages/Landing/LazyLanding";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";

const App = () => {
   const theme = useSelector((state) => state.theme.theme);

   return (
      <div className={`app ${theme}`}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Landing />} />
               <Route path="tests" element={<Tests />} />
               <Route path="tests/:id" element={<Test />} />
               <Route path="tests/:id/result" element={<Result />} />
            </Route>
         </Routes>
      </div>
   );
};

export default App;

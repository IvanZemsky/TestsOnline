import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

const Layout = () => {
   return (
      <>
         <Header />
         <Suspense>
            <Outlet />
         </Suspense>
      </>
   );
};

export default Layout;

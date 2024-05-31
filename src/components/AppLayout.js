import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  const location = useLocation();

  // List of routes where NavBar and Footer should not appear
  const noNavBarRoutes = ["/login", "/signup", "/404"];
  console.log(location)

  return (
    <div>
      {!noNavBarRoutes.includes(location.pathname) && <Navbar />}

      {children}

      {!noNavBarRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default AppLayout;

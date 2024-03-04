import React from "react";
import Routes from "./components/route/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/route/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
     <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;

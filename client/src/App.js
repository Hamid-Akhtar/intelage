import React from "react";
import FormScreen from "./screens/FormScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import ThankyouScreen from "./screens/ThankyouScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/form" element={<FormScreen />} />
        <Route path="/thankyou" element={<ThankyouScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

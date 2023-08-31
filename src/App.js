import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./styledComp";
import Cards from "./Cards";
import Detail from "./Detail";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./GlobalStyles";
import logo from "../src/assets/img/logo.png";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Menu>
        <img src={logo} style={{ width: "200px" }} alt="logo" />
      </Menu>
      <Routes>
        {useSelector((state) => state.contents).map((content, idx) => {
          return (
            <Route
              path={content.path}
              key={idx}
              element={<Detail content={content.detail} />}
            />
          );
        })}
        <Route path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

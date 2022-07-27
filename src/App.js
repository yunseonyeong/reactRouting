import React from "react";
import styled from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Love from "./pages/Love";
import Navbar from "./components/Navbar";
import UseEffectTest from "./UseEffectTest";
import UseEffectInput from "./UseEffectInput";
import Details from "./components/Details";
import Javascript from "./Javascript";
import Test from "./Test";

const AppDom = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  flex-basis: 50%;
`;

const App = () => {
  return (
    <AppDom>
      <Test />
      {/* <Navbar /> */}
      {/* <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path=":nickname" element={<Details />} />
          </Route>
          <Route path="/love" element={<Love />} />
        </Routes>
      </Content> */}
      {/* /* <UseEffectTest /> */}
      {/* <UseEffectInput /> */}
      {/* <Javascript /> */}
    </AppDom>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Love from "./pages/Love";
import Navbar from "./components/Navbar";
import UserNav from "./components/UserNav";
import UseEffectTest from "./UseEffectTest";
import UseEffectInput from "./UseEffectInput";

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
      {/* <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UserNav />}>
            <Route path=":nickname" element={<About />} />
          </Route>
          <Route path="/love" element={<Love />} />
        </Routes>
      </Content> */}
      {/* <UseEffectTest /> */}
      <UseEffectInput />
    </AppDom>
  );
};

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../components/UserNav";
import styled from "styled-components";

const Dom = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: space-around;
`;

const About = () => {
  return (
    <Dom>
      <UserNav />
      <Outlet />
    </Dom>
  );
};

export default About;

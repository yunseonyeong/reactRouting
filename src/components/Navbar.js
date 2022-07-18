import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.btnColor || "blue"};
  border-radius: 20px;
  cursor: pointer;
  color: white;
  margin: 2%;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const clickBtn = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Button
        btnColor="purple"
        onClick={() => {
          clickBtn("/");
        }}
      >
        Home
      </Button>
      <Button
        btnColor="orange"
        onClick={() => {
          clickBtn("/about");
        }}
      >
        About
      </Button>
      <Button
        btnColor="pink"
        onClick={() => {
          clickBtn("/love");
        }}
      >
        Love
      </Button>
    </div>
  );
};

export default Navbar;

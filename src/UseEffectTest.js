import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const [fake, setFake] = useState(0);

  useEffect(() => {
    console.log(count);
    console.log(fake);
  }, [count]);

  const handleClick = () => {
    setCount((c) => c + 1);
  };
  const handleClick2 = () => {
    setFake((c) => c + 1);
  };

  return (
    <>
      <div>UseEffectTest</div>
      <Button onClick={handleClick}>Up</Button>
      <Button onClick={handleClick2}>Up</Button>
      <p>Count : {count}</p>
      <p>Fake : {fake}</p>
    </>
  );
};

export default UseEffectTest;

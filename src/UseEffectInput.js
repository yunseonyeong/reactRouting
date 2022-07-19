import React, { useState, useEffect } from "react";

const UseEffectInput = () => {
  const [value, setValue] = useState("");
  const [checkValue, setCheckValue] = useState("");

  useEffect(() => {
    setCheckValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>입력하세요</div>
      <input onChange={handleChange}></input>
      <p>{value}</p>
      <p>{checkValue}</p>
    </>
  );
};

export default UseEffectInput;

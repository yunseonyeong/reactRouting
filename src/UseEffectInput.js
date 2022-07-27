import React, { useState, useEffect, useRef } from "react";

const UseEffectInput = () => {
  const [value, setValue] = useState("");
  const [checkValue, setCheckValue] = useState("");
  const here = useRef();

  useEffect(() => {
    setCheckValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    // setCheckValue(value + "체크");
  };

  const focusRef = () => {
    if (value.length === 0) {
      here.current.focus();
    } else {
      alert(value);
    }
  };

  return (
    <>
      <div>입력하세요</div>
      <input value={value} ref={here} onChange={handleChange}></input>
      <button onClick={focusRef}>검색</button>
      <p>{value}</p>
      <p>{checkValue}</p>
    </>
  );
};

export default UseEffectInput;

import React, { useState, useEffect, useRef } from "react";

// 검색창이 있는거에요
// input 태그로 만들어야겠쬬
// 검색란에 검색어를 막 입력을 해서 검색 버튼을 누를 수 있도록 버튼도 존재해야겠조
// 검색어 : value
// 체크용 : checkValue  콘솔에 찍어보거나, 렌더링을 해보는 식으로
// useEffect, useState

// 검색어가 없어 검색란에 커서가 포커싱이 되는거에요  // useRef
// 특정 Dom 요소에 접근할 수 있는 훅 이라고 생각하시면 됩니다.

// 검색어가 있으면 alert창을 띄운다던가

const Test = () => {
  const [value, setValue] = useState("");
  const [checkValue, setCheckValue] = useState("");

  const here = useRef();

  const handleClick = () => {
    if (value.length <= 5) {
      setValue("");
      here.current.focus();
    } else {
      alert(value);
    }
  };

  useEffect(() => {
    setCheckValue(value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input ref={here} value={value} onChange={handleChange}></input>
      {/* <p>{value}</p> */}
      {/* <p>{checkValue}</p> */}
      <button onClick={handleClick}>검색</button>
    </>
  );
};

export default Test;

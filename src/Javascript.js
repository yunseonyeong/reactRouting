import React, { useEffect, useState } from "react";

const Javascript = () => {
  const [value, setValue] = useState([1, 2, 3, 4]);

  const handleClick = () => {
    const copy = [...value];
    copy.push(5);
    setValue(copy);
    console.log(copy);
    console.log(value);
  };

  return <div onClick={handleClick}>{value}</div>;
};

export default Javascript;

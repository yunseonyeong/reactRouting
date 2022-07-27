import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/information";
import styled from "styled-components";

// const More = styled.div`
//   color: gray;
//   font-style: italic;
//   margin-top: 2%;
//   cursor: pointer;
// `;

const More = styled.div`
  color: gray;
  font-style: italic;
  margin-top: 2%;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100%;
  height: 20%;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
  border-radius: 10px;
`;



// const Modal = styled.div`
//   width: 100%;
//   height: 20%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 3%;
//   padding: 3%;
//   background-color: beige;
//   color: gray;
//   border-radius: 20px;
// `;
const Dom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = () => {
  const a = useParams();
  console.log(a);
  const nickname = a.nickname;
  const [isClicked, setIsClicked] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const who = data.members.filter((member) => member.nickname === nickname)[0];

  const handleMore = () => {
    // isClicked 값이 true이면 모달이 보이도록
    // isClicked 값이 false이면 모달이 보이지 않도록
    setIsClicked(!isClicked);
  };

  return (
    <Dom>
      <div>About {who.name}</div>
      <div>{who.memId}번째 멤버</div>
      <div>역할 : {who.role}</div>
      <div>소개 : {who.description}</div>
      <More onClick={handleMore}>더보기</More>
      {/* {isClicked ? <Modal>{who.name}에 대해 더 알고 싶으신가요 ?</Modal> : null} */}
      <Modal isClicked={isClicked}>{who.name}에 대해 더 알고 싶으신가요?</Modal>
    </Dom>
  );
};

export default Details;

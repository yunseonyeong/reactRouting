import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/information";
import styled from "styled-components";

const More = styled.div`
  color: gray;
  font-style: italic;
  margin-top: 2%;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3%;
  padding: 3%;
  background-color: beige;
  color: gray;
  border-radius: 20px;
`;

const About = () => {
  const { nickname } = useParams();
  const [isClicked, setIsClicked] = useState(false);

  const who = data.members.filter(function (member) {
    return member.nickname === nickname;
  })[0];

  return (
    <>
      <div>About {who.name}</div>
      <div>{who.memId}번째 멤버</div>
      <div>역할 : {who.role}</div>
      <div>소개 : {who.description}</div>
      <More onClick={() => setIsClicked(!isClicked)}>더보기</More>
      {isClicked ? <Modal>{who.name}에 대해 더 알고 싶으신거?</Modal> : null}
    </>
  );
};

export default About;

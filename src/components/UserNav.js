import React from "react";
import data from "../data/information";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserNavDom = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
    font-weight: bold;
    font-style: italic;
  }
`;

const UserNav = () => {
  return (
    <UserNavDom>
      <Menu>
        {data.members.map((mem, i) => (
          <span key={i}>
            <StyledLink to={`/about/${mem.nickname}`}>
              {mem.nickname}
            </StyledLink>
          </span>
        ))}
      </Menu>
    </UserNavDom>
  );
};

export default UserNav;

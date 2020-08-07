import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import reactHooksImg from "../img/react-hooks.png";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 640px;
  height: 320px;

  @media (max-width: 360px) {
    width: 320px;
    height: 160px;
  }
`;

const MenuContainer = styled.div`
  min-height: 150px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: whitesmoke;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LinkStyled = styled(Link)`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  text-decoration: none;
  color: #3f93ff;
  font-weight: bold;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 2.5rem;

  &:first-child {
    margin-bottom: 20px;
  }

  &:hover {
    background-color: #3f93ff;
    color: whitesmoke;
  }
`;

const Menu = () => (
  <Container>
    <Img src={reactHooksImg} alt="React Hooks" />
    <MenuContainer>
      <LinkStyled to="/counter">
        <span>Counter</span>
      </LinkStyled>
      <LinkStyled to="/chrono">
        <span>Chronometer</span>
      </LinkStyled>
    </MenuContainer>
  </Container>
);

export default Menu;

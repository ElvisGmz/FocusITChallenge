import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faWheelchair,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: #080c22;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.nav`
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  max-width: 1144px;

  @media only screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

const Logo = styled.div`
  box-sizing: border-box;
  padding: 15px 0px;
  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const Links = styled.div`
  display: flex;
  box-sizing: border-box;
  transition: all 0.3s;

  a {
    box-sizing: border-box;
    padding: 14px 20pxgut;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background-color: #2770b9;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;

      &:last-child {
        background-color: crimson;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    background-color: #080c22;
    top: 55.6px;
    right: ${({ isOpen }) => isOpen};
    width: 100%;
    max-width: 425px;
    min-height: calc(100vh - 55.6px);
    flex-flow: column nowrap;
    justify-content: center;

    a {
      width: 100%;
      box-sizing: border-box;
      text-align: center;

      &:hover {
        border-radius: 0;
      }
    }
  }
`;

const Burger = styled.div`
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding: 15px;
  display: none;

  div {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 10px;

    &:last-child {
      width: calc(100% - 5px);
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export default function NavBar() {
  const [openNav, setNav] = useState(false);

  return (
    <Nav>
      <Bar>
        <Logo onClick={() => setNav(false)}>
          <Link to="/">Empleados</Link>
        </Logo>
        <Burger onClick={() => setNav(!openNav)}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
        <Links isOpen={openNav ? "0px" : "-100%"}>
          <Link onClick={() => setNav(false)} to="/">
             <FontAwesomeIcon icon={faUsers} />
          </Link>
          <Link onClick={() => setNav(false)} to="/discapacidad">
            <FontAwesomeIcon icon={faWheelchair} />
          </Link>
          <Link onClick={() => setNav(false)} to="/login">
            <FontAwesomeIcon icon={faTimesCircle} />
          </Link>
        </Links>
      </Bar>
    </Nav>
  );
}

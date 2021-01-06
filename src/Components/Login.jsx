import React from "react";
import styled from "styled-components";
import login_icon from "../assets/login_icon.svg";

const Container = styled.div`
box-sizing: border-box;
padding: 20px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Card = styled.div`
  width: 60vw;
  max-width: 1000px;
  height: 100%;
  max-height: 700px;
  background-color: #28295a;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 #233566;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5rem 2.5rem;

  @media only screen and (max-width: 1024px) {
    width: 75vw;
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
    flex-flow: column nowrap;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  color: #fff;

  img {
    max-width: calc(100% - 20px);
  }

  h1{
    text-align: left;
    color: cyan;
    width: 100%;
  }

  form input {
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    min-width: 250px;
    box-sizing: border-box;
    outline: 0;
    margin-bottom: 10px;
      border: 0;

    &[type="button"] {
      background-color: dodgerblue;
      cursor: pointer;
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
export default function Login() {
  return (
    <Container>
      <Card>
        <Box>
          <img src={login_icon} alt="Icono de Login" />
        </Box>
        <Box>
          <h1>Inicio de Sesion</h1>
          <p>Alto ahi colega, debes identificarte para poder entrar</p>
          <form action="">
            <input
              type="text"
              name=""
              id="username"
              placeholder="Nombre de Usuario"
              required
            />
            <input
              type="password"
              name=""
              id="pass"
              placeholder="Contraseña"
              required
            />
            <input id="submit" type="button" value="Iniciar Sesion" />
          </form>
        </Box>
      </Card>
    </Container>
  );
}

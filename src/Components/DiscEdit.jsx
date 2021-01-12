import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function DiscEdit({ match }) {
  const id = match.params.id;
  const [empleado, setEmpleado] = useState([]);
  const [name, setName] = useState("");
  const [rol, setRol] = useState("");
  const [dateS, setDateS] = useState("");
  const [dateE, setDateE] = useState("");
  const [discState, setDiscState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.EMPLEADOS_URI}${id}`)
      .then((res) => res.json())
      .then((resJson) => setEmpleado(resJson));
  }, []);

  useEffect(() => {
    setName(empleado.name);
    setRol(empleado.rol);
    setDiscState(empleado.disc_state);
    setDateS(empleado.date_start);
    setDateE(empleado.date_end);
  }, [empleado]);

  //   function formatDate(dateString = "") {
  //     let newDate = dateString.replace(/[/]/g, "-");
  //     return newDate.split("-").reverse("").join("-");
  //   }

  const updateEmp = (empleado) => {
    const { name, rol, dateS, dateE, discState } = empleado;
    axios
      .put(`${process.env.EMPLEADOS_URI}${id}`, {
        name,
        rol,
        date_start: dateS,
        date_end: dateE,
        disc_state: discState,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push("/discapacidad");
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        history.push("/");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const empleado = { name, rol, dateS, dateE, discState };
    updateEmp(empleado);
  };

  return (
    <Container>
      <CardContainer>
        <Card>
          <Content>
            <h1>{empleado.name}</h1>
            <p>{empleado.rol}</p>
            <form onSubmit={handleSubmit}>
                Inicio de permiso:
              <input
                type="date"
                onChange={(e) => setDateS(e.target.value)}
                format=""
                defaultValue={dateS}
              />
              <br/>
              Fin de permiso:
              <input
                type="date"
                onChange={(e) => setDateE(e.target.value)}
                defaultValue={dateE}
              />
              <br/>
              Habilitar Permiso:
              <input
                type="checkbox"
                onChange={() => setDiscState(!discState)}
                checked={discState ? true : false}
              />
              <button id="submit" type="submit">
                Guardar
              </button>
            </form>
          </Content>
        </Card>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #dff6ff;
  box-sizing: border-box;
  padding-top: 67px;
  width: 100%;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  padding: 5px;
  max-width: 1144px;
  margin: auto;
`;

const Card = styled.div`
  min-width: 250px;
  flex: 32%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  max-width: 368px;
  min-height: 300px;
  color: #fff;
  background-color: #121231;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
`;

const Content = styled.div`
  h1 {
    font-size: 36px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: #35ffd3;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  div {
    background-color: #1e1e38;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 20px;
  }

  input{
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 20px;
  }

  div p {
    color: yellow;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  div p span {
    color: cyan;
  }

  button {
    background-color: dodgerblue;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
    outline: 0;

    &:hover {
      background-color: crimson;
    }
  }
`;

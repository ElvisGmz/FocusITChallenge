import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { useHistory } from "react-router-dom";

export default function Body() {
  const [empleados, setEmpleados] = useState([]);
  const history = useHistory();

  function formatDate(dateString) {
    let newDate = dateString.replace(/[/]/g, "-");
    return newDate.split("-").reverse("").join("-");
  }

  function handleClick(e) {
    history.push(`/discapacidad/${e.target.value}`);
  }

  useEffect(() => {
    fetch(`${process.env.EMPLEADOS_URI}`)
      .then((res) => res.json())
      .then((resJson) => setEmpleados(resJson));
  }, []);

  return (
    <Container>
      <Title>Lista de Empleados</Title>
      <CardContainer>
        {empleados.map((item) => (
          <Card key={item._id}>
            <Content>
              <h1>{item.name}</h1>
              <p>{item.rol}</p>
              <div>
                {item.disc_state ? (
                  <>
                    <p>
                      <span>Inicio de discapacidad:</span>
                      <br />
                      {DateTime.fromISO(
                        formatDate(item.date_start)
                      ).toLocaleString(DateTime.DATE_MED)}
                    </p>
                    <p>
                      <span>Fin de discapacidad:</span>
                      <br />
                      {DateTime.fromISO(
                        formatDate(item.date_end)
                      ).toLocaleString(DateTime.DATE_MED)}
                    </p>
                  </>
                ) : (
                  ""
                )}
                <p>
                  <span>Permiso por discapacidad:</span> <br />
                  {item.disc_state ? "En vigencia" : "No existente"}
                </p>
              </div>
            </Content>
            <button onClick={handleClick} value={item._id}>
              Editar
            </button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #dff6ff;
  box-sizing: border-box;
  width: 100%;
  min-height: 500px;
`;

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 10px 1rem;
  font-size: 40px;
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

  button {
    background-color: dodgerblue;
    padding: 10px;
    box-sizing: border-box;
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

const Content = styled.div`
  h1 {
    font-size: 36px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: #35ffd3;
    font-weight: 200;
  }

  div {
    background-color: #1e1e38;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 20px;
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
`;

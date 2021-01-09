import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  align-items: flex-start;
  box-sizing: border-box;
  padding: 5px;
  max-width: 1144px;
  margin: auto;
`;

const Card = styled.div`
  min-width: 250px;
  flex: 32%;
  max-width: 368px;
  min-height: 300px;
  color: #fff;
  background-color: #121231;
  box-sizing: border-box;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;

  h1{
    font-size: 36px;
    margin-bottom: 0;
  }

  p{
      margin: 0;
      color: #35ffd3;
      font-weight: 200;
  }
`;

export default function Body() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((resJson) => setEmpleados(resJson.items));
  }, []);

  return (
    <Container>
      <Title>Lista de Empleados</Title>
      <CardContainer>
        {empleados.map((item) => (
          <Card key={item.fields.id}>
            <h1>{item.fields.name}</h1>
            <p>{item.fields.rol}</p>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

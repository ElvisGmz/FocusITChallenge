import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    background-color: #dff6ff;
    box-sizing: border-box;
    width: 100%;
    min-height: 500px;
`

const CardContainer = styled.div`

`

const Card = styled.div`

`

export default function Body() {
    return (
        <Container>
            <CardContainer>
                <Card>Hola</Card>
            </CardContainer>
        </Container>
    )
}

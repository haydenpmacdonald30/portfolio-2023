import React from 'react'
import styled from 'styled-components'

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 50px auto;
    grid-gap: 50px;
    align-items: center;
    min-width: 500px;

     :hover {
            transform: scale(1.05, 1.1);
            transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);
        } 
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;

    
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;

   
`
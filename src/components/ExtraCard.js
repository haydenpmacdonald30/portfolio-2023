import React from 'react'
import styled from 'styled-components'

const ExtraCard = props  => {

    return (
        <div>
            <a href={props.link}>
                <CardContainer>
                    <img src={props.image} alt='' />
                    <h3>{props.title}</h3>
                    <img className='icon-small' src='images/github.png' alt='' />
                </CardContainer>
            </a>
        </div>
    )
}

export default ExtraCard

const CardContainer = styled.div`
    width: auto;
    min-height: 320px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;

    display: grid;
    grid-template-rows: 4fr 4fr;
    transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);

    :hover { 
        transform: scale(1.1, 1.1);
        box-shadow: 0 30px 60px rgba(0,0,0, 0.5);
    }

    .icon-small {
        height: 15px;
        width: auto;
        z-index: 1;
        position: absolute;
        top: 10px;
        left: 10px;
    }

    img {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);

        :hover {
            transform: translateY(-10px) scale(1.1, 1.1);
        } 
    }

    h3 {
        color: white;
        font-size: 30px;
        margin: 20px 0 0 20px;
        width: 190px;
        z-index: 1;
    }

  

    p {
        color: black;
        font-size: 10px;
        margin: 20px 0 0 20px;
        width: 190px;
        z-index: 1;
        align-self: end;
        margin: 0 0 05px 20px;
    }
`


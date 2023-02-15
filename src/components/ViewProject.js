import React from 'react'
import styled from 'styled-components'

const Product = ({ product }) => {
    return (
   

        <CardContainer>
          <h2>{product.title}</h2>
          <ProjectContainer>
          <a href={`/product/${product._id}`}>
                  <img src={product.image} alt='alt' variant='top'/>
                  
                </a>
          </ProjectContainer>
        
          <p>CASE STUDY {product.date}</p>
                <SmallText>
                    <a href={`/product/${product._id}`}>view the case</a> 
                </SmallText>
        </CardContainer>
    )
}

export default Product


const ProjectContainer = styled.div`

    width: 1000px;
    height:500px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    padding: 20px;
    transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1); 

    :hover { 
        transform: scale(1.1, 1.1);
        box-shadow: 0 10px 60px rgba(0,0,0, 0.5);
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: auto;
        width: 800px;
        z-index: 1;
        transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);

        :hover {
            transform: translateY(30px) scale(1.01, 1.01);;
        } 
    }

    p {
        color: white;
        font-size: 15px;
        margin: 20px 0 0 20px;
        width: 190px;
        z-index: 1;
        text-transform: uppercase;
        align-self: end;
        margin: 0 0 20px 20px;
    }
`

const CardContainer = styled.div`
    border-bottom: 1px solid rgba(0,0,0, 0.1);

    h2 {
        font-weight: 400;
        font-size: 15px;
        text-transform: uppercase;
        color: black;
        text-align: center;
        letter-spacing: 2px;
    }
`



const SmallText = styled.div`
    z-index: 1;
    font-size: 10px;
    text-align: center;
    padding: 5px 20px;
    border-radius: 25px;
    width: 100px;
    background-color: #0377ed; 
    margin-bottom: 20px; 

    a {
        color: white;
        vertical-align: middle;
    }

   
    

`
import React from 'react'
import products from '../products'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ProductScreen = (props) => {
    const product = products.find(p => p._id === props.match.params.id)
  

    return (
        <ProductScreenContainer>
            
            <Redirect>
                <Link className='btn btn-dark my-3' to='/'>
                    <img src='/images/left-arrow.png' alt='sdfg' /> 
                </Link>
            </Redirect>
            <ImageContainer>

            <TextContainer>
                <h1>Project Overview</h1>
                <h2>{product.title}</h2>
                <img src={product.image} alt='product main' fluid />  
            </TextContainer>
                 

                <TextContainer>
                <h1>Design Goals:</h1>
                </TextContainer>
                    <ul>
                        <li>{product.design_goal_1}</li>
                        <li>{product.design_goal_2}</li>
                        <li>{product.design_goal_3}</li>
                    </ul>
          
                <TextContainer>
                    <h1>Solution</h1>
                    <p>{product.design_solution}</p>
                </TextContainer>
                  
                <SideBySide>
                    <div>
                        <img src={product.image_two} alt='placeholder' fluid />   

                    </div>
                    <div> 
                        <img src={product.image_three} alt='placeholder' fluid />  
                    </div>
                </SideBySide>
                
                <TextContainer>
                    <h2>Areas to improve through market research</h2>
                    <p>{product.market_research}</p>
                </TextContainer>

                <SideBySide>
                    <div>
                        <img src={product.image_four} alt='placeholder' fluid />     
                    </div>
                    <div> 
                        <img src={product.image_five} alt='placeholder' fluid />  
                    </div>
                </SideBySide>
            </ImageContainer>

            <Redirect>
                <Link className='btn btn-dark my-3' to='/'>
                    <img src='/images/left-arrow.png' alt='sdfg' /> 
                </Link>
            </Redirect>            
        </ProductScreenContainer>
    )
}

export default ProductScreen

const ProductScreenContainer = styled.div`
    max-width: 2000px;
    margin: auto;
    overflow: hidden;
`


const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    justify-items: center;

    img {
        width: 1000px;
    }

        @media (max-width: 1060px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
    p, li {
        letter-spacing: 2px;
        line-height: 2.5;
    }
`

const SideBySide = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    justify-items: center;
    text-align: center;
    background-color: transparent;

    img {
        width: 800px;
        transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);
        filter: grayscale(60%);

        :hover { 
        transform: scale(1.2, 1.2);
    
        filter: grayscale(0%);
    }
    }
`

const Redirect = styled.div`

    img {
        width: 50px;
        margin: 20px;
        transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);
    }
`

const TextContainer = styled.div`

    max-width: 1200px;
    text-align: center;

    h1 {
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        color: #94A4BA;
        text-align: center;
        letter-spacing: 4px;
    }

    h2 {
        font-weight: 400;
        font-size: 15px;
        text-transform: uppercase;
        color: #94A4BA;
        text-align: center;
        letter-spacing: 2px;
    }
`
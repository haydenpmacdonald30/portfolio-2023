import React from "react";
import styled from 'styled-components'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <Redirect>
                <Link className='btn btn-dark my-3' to='/'>
                    <img src='/images/left-arrow.png' alt='sdfg' /> 
                </Link>
            </Redirect>
            <HeroContainer>
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                <h1>CONTACT</h1>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default Hero

const HeroContainer = styled.div`
    Color: black;

    h1 {
        letter-spacing: 2rem;
        font-size: 200px;
        background-image: url('https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 200px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        font-family: 'Steelfish Rg', 'helvetica neue',
                    helvetica, arial, sans-serif;
        font-weight: 900;
        -webkit-font-smoothing: antialiased;
    }
    
`

const Redirect = styled.div`

    img {
        width: 50px;
        margin: 20px;
        transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);
    }
`


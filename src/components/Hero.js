import React from "react";
import styled from 'styled-components'
import Banner from '../components/Banner'
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div>
            <HeroContainer>
                
                <HeroGroup>
                <div className="Logos">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <img alt='logos' src='/images/white-logo.png' width="500" />  
                    </motion.div>
                        
                        </div>
                        <Banner />       
{/*
                    <h2 className='scrolling'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2> */}
                        
                        <ScrollArrow>
                            <img alt='logos' src='/images/right-arrow.png' width="50" />    
                        </ScrollArrow>                   
                        <svg width="100%" height="170" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="white" >
                        <animate repeatCount='indefinite'
                        fill='freeze' attributeName='d' dur='15s'
                        values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

                            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

                            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
                        </path>
                    </svg>
                </HeroGroup>
            </HeroContainer>
        </div>
    )
}

export default Hero

const HeroContainer = styled.div`
    background-image: url("https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    height: 1000px;
    background-size: cover;
    background-position: center;
    position: relative;
`

const HeroGroup = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 150px 50px;

    h1 {
        color: black;
        font-size: 60px;

            @media (max-width: 640px) {
            font-size: 45px;  
        }   
    }
    
    h3 {
        line-height: 0.8px;
    }

    h2, .scrolling {
        text-align: center;
        animation: scrolling 20s linear infinite;
        animation-duration: 20s;
        font-size: 100px;
        color: white;
        clear: both;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;

        @keyframes scrolling {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-350%);
            }
        }
    }

    p {
        color: grey;
        font-size: 15px;
        line-height: 1.5;

    }
    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .Logos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        margin: 50px 0;
        justify-items: center;
    }
`

const ScrollArrow = styled.div`
    position: absolute;
    top: 70%;
    right: 0px;
    z-index: 100;
   
    img {
        transform: rotate(90deg);
        height: 80px;
        width: auto;
       
    }
`




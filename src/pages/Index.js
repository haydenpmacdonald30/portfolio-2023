import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Header from '../components/Header'
import ExtraCard from '../components/ExtraCard'
import Footer from '../components/Footer'
import MobileHeader from '../components/MobileHeader'
import ViewProject from '../components/ViewProject'
import products from '../products'


import { AnimatePresence } from "framer-motion";


const Index = ({ }) => {

    return (
 
        <AnimatePresence>
            <Header />
            <MobileHeader />
            <Hero />
            <CardGroup>
      
                <SectionCaption>
                    <h1>Figma Projects</h1>
                </SectionCaption>
               
               {products.map(product => (
                   <ViewProject product={product} />
               ))}
      
                
            </CardGroup>
            <SectionCaption>
                <h1>React JS Projects</h1>
                <p>please click images for github redirect</p>
            </SectionCaption>
            
            <Group>

                <ExtraCard
                    text='github project' 
                    // title='React for Designers'
                    image='/images/ecomm_mobile.png' 
                    link='https://github.com/haydenpmacdonald30/food-app-MERN'
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/darcys-ss.png' 
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/tge-ss.png' 
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/project_image_blog.png'
                    link='https://github.com/haydenpmacdonald30/MEAN-blog'
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/re-ss.png' 
                    link='https://github.com/haydenpmacdonald30/landing-page-hero-slider'
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/nba-ss.png' 
                    link='https://github.com/haydenpmacdonald30/nba-stats-app'
                />
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/to-do-mobile-ss.png' 
                />
                
                <ExtraCard
                    // text='12 sections' 
                    // title='React for Designers'
                    image='/images/darcys-ss.png' 
                />

            </Group>
            <Footer/>
        </AnimatePresence>

    )
}

export default Index


const CardGroup = styled.div`
    margin: 50px 40px 100px;
    padding: 150px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
    justify-items: center;


        @media (max-width: 1060px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(1, 1fr);
        }
`

const Group = styled.div`
margin: auto;
padding: 150px;
display: grid;
grid-template-columns: repeat(4, 4fr);
grid-gap: 60px;
justify-items: center;
max-width: 1000px;


    @media (max-width: 1060px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 20px;
    }
    @media (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
`



const SectionCaption = styled.p`

    text-align: center;
    
    h1 {
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        color: #94A4BA;
        letter-spacing: 4px;
    }
  
    p {
        font-size: 10px;
    }
`
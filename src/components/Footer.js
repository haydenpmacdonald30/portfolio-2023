import React from 'react'
import styled from 'styled-components'

const Footer = props => (
    <FooterContainer>
        <SectionCellGroup>
            <FooterGroup>
                <FooterImage>
                    <img src='/images/github.png' alt='asrgfasdg'></img>
                </FooterImage>
                <FooterTitle>
                    <p>gitHub</p>
                    <a href='https://github.com/haydenpmacdonald30'>view</a> 
                </FooterTitle>

                <FooterImage>
                    <img src='/images/linkedin.png' alt='asrgfasdg'></img>
                </FooterImage>
                <FooterTitle>
                    <p>linkedin</p>
                    <a href='https://www.linkedin.com/in/hayden-macdonald-315720190/'>view</a> 
                </FooterTitle>
                
                <FooterImage>
                    <img src='/images/email.png' alt='asrgfasdg'></img>
                </FooterImage>
                <FooterTitle>
                    <p>email</p>
                    <a href='mailto:haydenpmacdonald@gmail.com'>view</a> 
                </FooterTitle>
            </FooterGroup>            
        </SectionCellGroup>
    </FooterContainer>
    
)

export default Footer


const FooterContainer = styled.div`
   border-top: 1px solid rgba(0,0,0, 0.1);
   padding-top: 100px;
   text-align: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }  
`

const SectionCellGroup = styled.div`
    width: 600px;
    margin: auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const FooterGroup = styled.div`
    display: grid;
    grid-template-columns: 50px auto;
    grid-gap: 50px;
    align-items: center;
    height: 500px;
    min-width: 600px;
`

const FooterImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-size: 60px;

    img {
        height: 25px;
        padding-top: 15px;
     
    }
`

const FooterTitle = styled.div`
    font-size: 15px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-items: center;

    a {
        background-color: #0377ed;
        border-color: transparent;
        color: white;
        border-radius: 15px;
        padding: 5px 10px;
        box-shadow: 0 2px 5px black;
    }

    :hover {
            transform: scale(1.05, 1.1);
            transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);
        } 
`
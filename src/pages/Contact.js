import React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from "framer-motion";
import ContactHero from '../components/ContactHero'
import Footer from '../components/Footer'


const Index = ({ }) => {

    return (
 
        <AnimatePresence>
            <ContactHero />
            <Footer />
        </AnimatePresence>

    )
}

export default Index


const ContactContainer = styled.div`
 
`

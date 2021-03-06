import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub, } from 'react-icons/fa'
import ItemContact from '../../src/components/ItemContact'


function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/matheusrebeschini" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/matheuspedrow" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/matheuspedrow"  
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="matheuspedrow@gmail.com"
        />
      </Content>
    </Container>
  )
}

export default Contact
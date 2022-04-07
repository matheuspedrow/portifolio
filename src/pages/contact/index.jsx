import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/matheusrebeschini/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/matheuspedrow" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/matheuspedrow/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="matheuspedrow@gmail.com"
        />
      </Content>
    </Container>
  )
}
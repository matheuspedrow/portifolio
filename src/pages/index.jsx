/* eslint-disable @next/next/link-passhref */
import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Matheus Pedro</Name>
        <Function>FullStack Developer Jr.</Function>
        <Intro>Estudante de Analise e Desenvolvimento de Sistemas, 
          tenho experiência em desenvolvimento Web
          (React, JS, Styled-Components, NodeJS, NextJS, MySql e outros), busco sempre continuar aprendendo cada vez mais.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}

export default Home
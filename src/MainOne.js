import React from "react";
import styled from "styled-components";
import Hobbit from './assets/Hobbit.jpg'

const Container = styled.section`
height:60vh;
display:flex;
background-color:black;
align-items:center;
`
const BoxTitle = styled.div`
margin-left:3%;
margin-top:5%;
color:white;
font-size:1.2vw;
`
const BoxP = styled.div`
width:30vw;
`
const Img= styled.img`
width:35vw;
margin-left:4%;
margin-top:4%;
`
export default class MainOne extends React.Component{
  render(){
      return(
          <Container>
          <Img src={Hobbit} alt='family'/>
          <BoxTitle>
          <p>Visto recentemente</p>
          <b><h2>The Hobbit</h2></b>
          <BoxP>
          <p>Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.</p>
          </BoxP>
          </BoxTitle>
          </Container>         

      )
  }
}
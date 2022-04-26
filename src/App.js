import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Icon from './assets/icone.svg'
import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ReactStars from 'react-rating-stars-component'
import Home from './Home'
import Favoritos from './Favoritos'
import { createGlobalStyle } from "styled-components";
import JaVistos from "./JáVistos";
import Todos from './Todos'
import Adicionados from './Adicionados'

const GlobalStyle= createGlobalStyle`
margin:0;
padding:0;
box-sizing:border-box;
`

const Container = styled.section`
background-color:black;
height:20vh;

`
const H2 = styled.h2`
font-family: 'Bebas Neue', cursive;
color:#E71B27;
font-size:3vw;
margin-left:3.5%;
`

const ModalBox = styled.div`
width:47vw;
height:8vh;
display:flex;
align-items:center;
margin-left:5%;
display:flex;
 
justify-content:center;
`
const BoxName = styled.div`
width:35vw;
color:white;
margin-left:3%;
font: normal normal normal  Arial;
`
const ButtonClose = styled.button`
background-color:black;
color:white;
margin-left:94%;
margin-top:2%;
border-style:none;
cursor:pointer;
font: normal normal normal 20px/33px Arial
`
const InfoBox = styled.div`
display:flex;
color:white;
justify-content:space-evenly;
align-items:center;
font-size: 1.5vw;
`
const ButtonOpen = styled.button`
color:white;
height:4.4vh;
width:8.6vw;
font-size:1vw;
background-color:red;
border-style:none;
border-radius:10%;
cursor:pointer;
`
const InputSrc = styled.input`
margin-left:1%;
width:15vw;
height:4vh;
background-color: #2C2C2C;
border-radius: 4px;
border:none;
font-size:1.2vw;
padding:2px;
transition: 0.3s ease all;
    &:focus{
      width: 14vw;
      padding-left:7px;
    } 

`

const ImgIcon = styled.img`
margin-left:3%;
height:4vh;
`
const ModalS = styled(Modal)`
background-color:black;
height:70vh;
margin-top:5.7%;
width:70vw;
font-size:1vw;
margin-left:13%;
border-radius:5%;
 
`


const TitleModal = styled.h2`
color:white;
margin-left:3%;
font: normal normal normal Arial;
`
 
const BoxList = styled.ul`
width: 7vw;
display: flex;
flex-direction: column;
padding: 12px;
background-color: black;
position:absolute;
top:8.7%;
height:17vh;
justify-content:space-between;
`

const LinkS = styled(Link)`
text-decoration: none;
color: whitesmoke;
margin-left:4%;
&:hover{
  color:red;
  transition: 0.5s ease-in-out
}
`
const P = styled.p`
display:;
&:hover{
    color:red;
    transition: 0.5s ease-in-out;
    cursor:pointer;
  }
`
const BtnList = styled.div`
display:flex;
cursor:pointer;
width:10vw;
justify-content:space-evenly;
`
export default class Header extends React.Component{

state={
    taAberto: false,
    selectedList: '',
    hideList: false
}
handleList = ()=>{
    this.setState({hideList : !this.state.hideList})
}

handleModal=()=>{
    this.setState({taAberto: !this.state.taAberto})
}

listSelect =value=> ()=>{
    this.setState({hideList: false, 
    selectedList: value})
}

    render(){
        return(
           <Router> 
             <GlobalStyle/>
            <Container>
              
            <InfoBox>
            <LinkS to='/'><H2>MARLINFLIX</H2> </LinkS>
            <LinkS to='/'>Início</LinkS>
            <div>
              <BtnList> 
                <p onClick={this.handleList}>Categorias</p>{this.state.hideList ? <p>&#9662;</p> : <p>&#9656;</p>  }
                {this.state.hideList? (
                <BoxList>
                    <div onClick={this.listSelect('Todos')}>
                       <LinkS to='/Todos' onClick={this.handleList}>Todos</LinkS> 
                    </div>
                    
                    <LinkS to='/Favoritos' onClick={this.handleList}>Favoritos</LinkS>
                    <LinkS to='/JaVistos' onClick={this.handleList}>Já Vistos</LinkS>
                    <LinkS to='/Adicionados' onClick={this.handleList}>Adicionados</LinkS>
                </BoxList>
                ) : null}
              </BtnList>
          

            </div>
          
            <ModalBox >
                <ButtonOpen onClick={this.handleModal}>Adicionar filme</ButtonOpen>
                <ModalS 
                onRequestClose={this.handleModal}
                shouldCloseOnOverlayClick={true}
                isOpen={this.state.taAberto}>
                <ButtonClose onClick={this.handleModal}>X</ButtonClose>
                <TitleModal>Adicionar filme</TitleModal>
                <BoxName>
                <b><label for="nome">Nome</label></b><br></br>
                <input/>
                <b> <p>Descrição</p></b>
                <textarea></textarea>
                <ReactStars
                size={22}
                isHalf={true}
                />
                </BoxName>
                </ModalS>
            <InputSrc placeholder="🔍Pesquisar" type='text' /> 
            <ImgIcon src={Icon}/>
            
            </ModalBox>
            
            </InfoBox>
            <Routes>
            <Route path="/Favoritos" element={<Favoritos/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/Todos" element={<Todos/>}/>
            <Route path="/JaVistos" element={<JaVistos/>}/>
            <Route path="/Adicionados" element={<Adicionados/>}/>
            </Routes>
            </Container>
            </Router>
        )
    }
}
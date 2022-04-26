import React from "react";
import styled from "styled-components";
import Shrek from './assets/shrek.png'
import Quehrs from './assets/quehrs.png'
import Homiranha from './assets/homiranha.png'
import Liberdade from './assets/liberdade.png'
import Sozinho from './assets/sozinho.png'
import Carousel from "nuka-carousel";
import Kong from './assets/Kong.jpg'

const Arrow = styled.svg`
  fill:#fff;
  opacity:30;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    opacity: 20;
  }
`;

const Container= styled.section`
height:27vh;
display:flex;
align-items:center;
background-color:black;
`
const Img= styled.img`
width:20vw;
height:24vh;
`
export default class MainTwo extends React.Component{

    render(){
        return(
            <Container>
            <Carousel
            slidesToShow={4}
            wrapAround= {true}
            autoplay={true}
            autoplayInterval={2000}
            defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: 'none',
                },
              }}

              renderCenterLeftControls={({ previousSlide }) => (
                <Arrow
                  onClick={previousSlide}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </Arrow>
              )}

              renderCenterRightControls={({ nextSlide }) => (
                <Arrow onClick={nextSlide} 
                xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></Arrow>
            )}
            >
            <Img src={Shrek}/>
            <Img src={Sozinho}/>
            <Img src={Homiranha}/>
            <Img src={Liberdade}/>
            <Img src={Quehrs}/>   
            <Img src={Kong}/> 
            </Carousel>
            
            </Container>
        )
    }
}
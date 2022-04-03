import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h1`
font-family: 'Oswald', sans-serif;
color: #222;
font-size: 60px;
font-weight: 900;
text-transform: capitalize;
width: 80%;
.text-1{
    color: red;
    font-size: 20px;
}
.text-2{
    color: green;
    font-size: 20px;
}
.text-3{
    color: blue;
    font-size: 20px;
}

@media (max-width: 64em){
    font-size: 30px;
    font-weight: bold;
    /* align-self: center; */
    text-align: center;
}
`
const Subtitle = styled.h3`
color: #555;
/* align-self: flex-start; */
width: 80%;
margin-bottom: 1rem;
font-weight: 600;

@media (max-width: 64rem){
    font-weight: 200;
    text-align: center;
    font-size: 12px;
}
`
const BtnContainer = styled.div`
/* align-self: flex-start; */
width: 80%;

@media (max-width: 64rem){
    text-align: center;
}
`
const Btn = styled.button`
display: inline-block;
outline: none;
border: none;
color: #fff;
font-weight: 800;
background-color: tomato;
padding: 0.8rem 2.5rem;
border-radius: 50px;
transition: all .2s ease;
position: relative;
cursor: pointer;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% ) scale(0);
    border: 2px solid tomato;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all .2s eas;
}
&:hover::after{
    transform: translate(-50%, -50% ) scale(1);
    padding: .3rem;
}
`

const scrollTo = (id)=>{
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
   
  }
const Typewritereffect = () => {
  return (
    <>
    <Title>
        Marketing for the Digital Age!
        <Typewriter 
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter)=>{
            typewriter.typeString('<span class="text-1">Discord OutReach</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Discord Engagement 24/7</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Discord Moderation 24/7</span>')
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
        />
    </Title>
    <Subtitle>
        {/* Bored Of Apes? Try Something New. */}
    </Subtitle>
    <BtnContainer>
       {/* <Button text="Explore"/> */}
       <Btn onClick={()=> scrollTo('services')}>Explore</Btn>
    </BtnContainer>
    
    </>
    
  )
}

export default Typewritereffect
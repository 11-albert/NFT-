import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Button from './Button'



const Section = styled.section`
/* width: 100vw; */
position: relative;
/* background: linear-gradient(to right, #ccc, #eee) */
background:  #093691;

`
const NavBar =styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 5rem;
margin: 0 auto;
/* background-color: #5e035a; */

.mobile{
  display: none;
}
@media (max-width: 64em){
  .desktop{
    display: none;
  }
  .mobile{
    display: inline-block;
  }
}
`
const Menu = styled.ul`
display: flex;
list-style: none;
@media (max-width: 64em){
  /* 1024px */
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh-5rem);
  z-index: 50;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(2px);
  transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)'};
  transition: all .3s ease;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  touch-action: none;

}
`
const MenuItem = styled.li`
margin: 0 1rem;
cursor: pointer;
font-size: 18px;
color: #fff;
font-weight: 800;

&::after{
  content: ' ';
  display: block; 
  width: 10%;
  height: 2px;
  background-color: #fff;
  transition: width .3s ease;
}
&:hover::after{
    width: 100%;
  }
  @media (max-width: 64em){
  /* 1024px */
  margin: 1rem;

  &::after{
    display: none;
  }

}
  
`
const Hamburger = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background-color: #fff;
position: absolute;

left: 50%;
transform: ${props => props.click ? 'translatex(-50%) rotate(90deg)' : 'translatex(-50%) rotate(0)'} ;
display: none;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all .3s ease;

@media (max-width: 64em){
  /* 1024px */
  display: flex;

}

&::after, &::before{
  content: ' ';
  width: ${props => props.click ? '1rem' : '1.5rem'} ;
  height: 2px;
  display: block;
  background-color: #fff;
  position: absolute;
  right: ${props => props.click ? '-2px' : '0'};
  transition: all .3s ease;
}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'} ;
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'} ;
}
&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;

}
`
const Btn = styled.button`
display: inline-block;
outline: none;
border: none;
color: #000;
background-color: #fff;
font-size: 15px;
font-weight: 800;
padding: 0.8rem 2.0rem;
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
    border: 2px solid #fff;
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

const Nav = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id)=>{
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
      
      
    })
    setClick(!click);
  }
  
  return (
    
    <Section id='nav' onClick={()=> setClick(!click)}>
      <NavBar>
        <Logo/>
        <Hamburger click={click} onClick={()=> setClick(!click)}>
          &nbsp;
        </Hamburger>
        <Menu click={click}>
          <MenuItem onClick={()=> scrollTo('nav')}>Home</MenuItem>
          <MenuItem onClick={()=> scrollTo('About')}>About</MenuItem>
          <MenuItem onClick={()=> scrollTo('services')}>Service</MenuItem>
          <MenuItem onClick={()=> scrollTo('testimonials')}>Testimonials</MenuItem>
          <MenuItem>
          <div className='mobile'>
            {/* <Button text="Contact" onClick={()=> scrollTo('About')}/> */}
            <Btn onClick={()=> scrollTo('contact')}>Contact Us</Btn>
          </div>
          </MenuItem>
        </Menu>
          <div className='desktop'>
            {/* <Button text="Contact" onClick={()=> scrollTo('services')} /> */}
            <Btn onClick={()=> scrollTo('contact')}>Contact Us</Btn>
          </div>
      </NavBar>
    </Section>
  )
}

export default Nav;
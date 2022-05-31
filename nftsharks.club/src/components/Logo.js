import React from 'react'
import styled from 'styled-components'
import logoImage from '../Images/nft-logo.svg'


const LogoText = styled.h1`
color: #fff;
font-size: 45px;
font-family: Verdana;
cursor: pointer;
transition: all .2s ease;
font-family: 'Akaya Telivigala', cursive;
align-items: center;
display: flex;

@media (max-width: 64em){
  font-size: 30px;
}
&:hover{
    transform: scale(1.1);
}
img{
  width: 120px;
}
`
const Logo = () => {
  return (
    <LogoText>
           <img src={logoImage}/>        
    </LogoText>
  )
}

export default Logo
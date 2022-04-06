import React from 'react'
import styled from 'styled-components'
import Gif from '../video/crypto cows testimon.gif'


const ContentContainer = styled.p`
font-size: 44px;
font-weight: 800;
color: #2c3e50;

@media (max-width: 64em){
   font-size: 20px;
  text-align: center;
 }
`
const ClientAbout = styled.h3`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Akaya Telivigala', cursive;
  text-align: end;
  color: #2e91f9;
  @media (max-width: 64em){
   font-size: 14px;
  text-align: right;
 }
`
const ClientImage = styled.div`
width: 10%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;


embed{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50%;
}
`
const Content1 = () => {
  return (
    <>
    <em>
      <ContentContainer>
        <ClientImage>
          <embed src={Gif}/>
        </ClientImage>
      "Super professional, super kind. Excellent work done by this guys. 100% will work again with them"<br/>
     <ClientAbout>-from CryptoCows</ClientAbout>
    </ContentContainer></em>
    
    </>
  )
}

export default Content1
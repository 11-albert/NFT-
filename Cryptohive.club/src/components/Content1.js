import React from 'react'
import styled from 'styled-components'


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
const Content1 = () => {
  return (
    <>
    <em>
      <ContentContainer>
      "Super professional, super kind. Excellent work done by this guys. 100% will work again with them"<br/>
     <ClientAbout>-from CryptoCows</ClientAbout>
    </ContentContainer></em>
    
    </>
  )
}

export default Content1
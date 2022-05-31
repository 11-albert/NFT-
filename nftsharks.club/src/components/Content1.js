import React from 'react'
import styled from 'styled-components'
import Gif from '../video/crypto cows testimon.gif'
import "../components/styleAttribute.css"


const ContentContainer = styled.div`
font-size: 44px;
font-weight: 800;
color: #2c3e50;
width: 100%;
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
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
z-index: 1;

embed{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  position: relative;

}

`
const Overlay = styled.div`
`
const Card = styled.div`

`
const Content1 = () => {
  return (
    <>
    <div className="container">
    <div className='card'>
         <div className="imageBox">
            <embed src={Gif}  />
         </div>
         <div className="contentBox">
           <div className="content">
             <h3>CryptoCows</h3>
           </div>
           
         </div>
       </div>
    </div>
       



    {/* <em>
      <ContentContainer>
        <Card>
          <ClientImage>
            <embed src={Gif}  />
          </ClientImage>
          <Overlay>
            <h1>hello</h1>
          </Overlay>
        </Card>
        
      "Super professional, super kind. Excellent work done by this guys. 100% will work again with them"<br/>
     <ClientAbout>-from CryptoCows</ClientAbout>
    </ContentContainer></em> */}
    
    </>
  )
}

export default Content1
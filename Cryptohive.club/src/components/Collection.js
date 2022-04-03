import React from 'react'
import styled from 'styled-components'
import image1 from "../image/1.png"



const ImageContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        margin: 0 auto;
    }
`
const MainContainer = styled.div`
    padding: 70px;
`
const Section = styled.section`
    background: #C0C0C0;
`

const Collection = () => {
  return (
    <Section>
           <div class="owl-carousel owl-theme">
    <MainContainer>
        <ImageContainer>
          <img src={image1} alt="" />
        </ImageContainer>
    </MainContainer>
    <MainContainer>
        <ImageContainer>
          <img src={image1} alt="" />
        </ImageContainer>
    </MainContainer>
    <MainContainer>
        <ImageContainer>
          <img src={image1} alt="" />
        </ImageContainer>
    </MainContainer>
</div>
    </Section>
  )
}


export default Collection
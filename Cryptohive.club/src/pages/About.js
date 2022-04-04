import React from 'react'
import styled from 'styled-components'
import Content2 from '../components/Content2'
import ConvertVideo3 from '../components/ConvertVideo3'








const Section = styled.section`
 width: 100%;
 background-color: #fff;
 padding: 70px;
 /* background-color: pink; */
 @media (max-width: 64em){
  padding: 40px 12px;
  height: auto;
   
 }
`
// const Container = styled.div`
// width: 75%;
// display: flex;
// justify-content: center;
// `
const Title = styled.h1`
display: flex;
justify-content: center;
margin: 1rem auto;
border-bottom: 2px solid #093691;
color: #093691;
width: fit-content;
font-family: 'Oswald', sans-serif;

@media (max-width: 64em){
   
   margin-bottom: 2rem;
 }
`
const Container = styled.div`
width: 100%;
min-height: 80vh;
margin: 0 auto;
/* background-color: pink; */
gap: 30px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 64rem){
min-height: 40vh;
flex-direction: column-reverse;
width: 100%;
gap: 0;
  
  
  

  /* &>":first-child{
    width: 100%;
    margin-top: 2rem;
  } */
}
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 64em){
   width: 80%;
   margin-top: 1rem;
   
 }

`
const About = () => {
    return (
        <Section id="About">
            <Title>ABOUT US</Title>
            <Container>
                <Box>
                <Content2/>
                </Box>
                <Box>
                <ConvertVideo3/>
                </Box>
            </Container>
        </Section>
      )
}

export default About
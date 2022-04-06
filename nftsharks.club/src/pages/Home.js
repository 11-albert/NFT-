import React from 'react'
import styled from 'styled-components'
import Convertvideo from '../components/Convertvideo'
import Typewritereffect from '../components/Typewritereffect'




const Section = styled.section`
min-height: calc(100vh-5rem);
position: relative;
background-color:  #fff;

`
const Container = styled.div`
width: 75%;
min-height: 90vh;
margin: 0 auto;
/* background-color: pink; */
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 64rem){
  flex-direction: column-reverse;
  width: 100%;
  gap: 30px;

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

`
const Home = () => {
  return (
    <Section id="home">
        <Container>
            <Box>
              <Typewritereffect/>
            </Box>
            <Box>
             <Convertvideo/>
            </Box>
        </Container>
    </Section>
  )
}

export default Home
import React from 'react'
import styled from 'styled-components'
import Content1 from '../components/Content1'





const Section = styled.section`
 width: 100%;
 background-color: #fff;
 padding: 20px 70px;

 @media (max-width: 64em){
   padding: 20px;
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
color: #093691;
border-bottom: 2px solid #093691;
width: fit-content;
font-family: 'Oswald', sans-serif;

@media (max-width: 64em){
   
   margin-bottom: 0px;
 }
`
const Container = styled.div`
width: 75%;
min-height: 20vh;
margin: 0 auto;
/* background-color: #2c3e50; */
padding: 40px 20px;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 64rem){
  flex-direction: column-reverse;
  width: 100%;
  padding: 6px;

  /* &>":first-child{
    width: 100%;
    margin-top: 2rem;
  } */
}
`
const Box = styled.div`


`
const Advertising = () => {
  return (
    <Section id="testimonials">
       <Title>TESTIMONIALS</Title>
      <div class="owl-carousel owl-theme">
          <div>
             
              <Container>
                  <Box>
                    <Content1/>
                  </Box>
              </Container>
          </div>
          <div>
              
              <Container>
                  <Box>
                    <Content1/>
                  </Box>
              </Container>
          </div>
      </div>
    </Section>

    
  )
}

export default Advertising
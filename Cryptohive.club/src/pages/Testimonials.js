import React from 'react'
import styled from 'styled-components'



const SubTitle = styled.h2`

`
const Text1 = styled.p`
margin-top: 5px;
font-size: 18px;
font-weight: 800;
text-align: justify;
text-align: center;
`
const Title1 = styled.h1`
font-weight: 600;
color: tomato;
/* border-bottom: 2px solid #555; */
width: fit-content;
margin: 30px auto;
@media (max-width: 64em){
  font-size: 20px;
  text-align: center;
}
`
const Container = styled.div`
text-align: center;
width: 80%;
margin: 0 auto;
`
const Testimonials = () => {
  return (
    <>
    <Title1>Advantages Of Hiring The Best NFT Marketing Agency</Title1>
    <div class="owl-carousel owl-theme">
        
      <div>
    
        <Container>
            <SubTitle>Marketing Experts:</SubTitle>
            <Text1>We have a bunch of expertise in our NFT Marketing agency to assist our global customers by opening
                doors to new strategies that shape their business according to their desires.
            </Text1>
        </Container>
      </div>
      <div>
    
        <Container>
            <SubTitle>Cost-Effective:</SubTitle>
            <Text1>Our NFT Marketing service provides economic marketing strategies with attractivefeatures to boost your
                business results to top the market and stay ahead of competitors.
            </Text1>
        </Container>
      </div>
      <div>
     
        <Container>
            <SubTitle>High Employee Productivity:</SubTitle>
            <Text1>We have a skilled workforce to devote themselves to provide 24x7
                marketing campaign to support oour trusted customers for better efficiency.
            </Text1>
        </Container>
      </div>
  </div>
  </>
  )
}

export default Testimonials
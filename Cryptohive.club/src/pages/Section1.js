import React from 'react'
import styled from 'styled-components'
import Testimonials from './Testimonials'



const Section = styled.section`
width: 100%;
height: auto;
background-color: #fff;
padding: 70px 70px;
@media (max-width: 64em){
    padding: 40px 12px;
}
`
const Title = styled.h1`
font-family: 'Oswald', sans-serif;
font-weight: 600;
color: #093691;
border-bottom: 2px solid #093691;
width: fit-content;
margin: 0 auto;
`
const Text = styled.p`
text-align: center;
margin-top: 30px;
font-size: 18px;
font-weight: 800;
justify-content: left;
text-align: justify;
span{
    color: #2e91f9;
}
`

const Section1 = () => {
  return (
    <Section>
        <Title>What is the future of NFT?</Title>
        <Text>Experts in the crypto industry, including David Gerard, estimate that<span> 40% </span>of new users will use NFTs 
            to get started. NFT has become a larger part of the digital economy due to its popularity.
        </Text>
        <Testimonials/>
        {/* <Title1>Advantages Of Hiring The Best NFT Marketing Agency</Title1>
        <SubContainer>
            <div>
                <SubTitle>Marketing Experts:</SubTitle>
                <Text1>We have a bunch of expertise in our NFT Marketing agency to assist our global customers by opening
                    doors to new strategies that shape their business according to their desires.
                </Text1>
            </div>
            <div>
                <SubTitle>Cost-Effective:</SubTitle>
                <Text1>Our NFT Marketing service provides economic marketing strategies with attractivefeatures to boost your
                    business results to top the market and stay ahead of competitors.
                </Text1>
            </div>
            <div>
                <SubTitle>High Employee Productivity:</SubTitle>
                <Text1>We have a skilled workforce to devote themselves to provide 24x7
                    marketing campaign to support oour trusted customers for better efficiency.
                </Text1>
            </div>
        </SubContainer> */}
    </Section>
  )
}

export default Section1
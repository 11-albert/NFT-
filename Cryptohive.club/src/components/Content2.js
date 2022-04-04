import React from 'react'
import styled from 'styled-components'


const ContentContainer = styled.p`
font-size: 24px;
font-weight: 600;
text-align: justify;
span{
  font-family: 'Montserrat', sans-serif;
  color: #093691;
  
  
}
@media (max-width: 64em){
    font-size: 16px;
    text-align: justify;
    
}
`
const Content2 = () => {
  return (
    <ContentContainer><em><span>NFTs are a promising future for the current generation to make valuable investment.</span></em><br/><br/>
    Our NFT marketing services offer strong marketing strategies to help you complete in the global market.
    We have professional marketing experts who can help your dream business succeed by providing cost-effective
    NFT marketing solutions. Why are you still debating whether or not to start your business?<br/>
     Let's get started
    today, let's begin today.
    </ContentContainer>
  )
}

export default Content2
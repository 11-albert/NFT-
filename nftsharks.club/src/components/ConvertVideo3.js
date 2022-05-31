import React from 'react'
import styled from 'styled-components'

import gif from '../video/About Video.gif'

const Videocontainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
/* video{
    width: 100%;
    height: auto;

    @media (max-width: 64rem){
      min-width: 40vw;
    }
} */
embed{
    width: 80%;
    height: auto;

    @media (max-width: 64rem){
      min-width: 40vw;
      width: 100%;
      
    }
}
`
const ConvertVideo3 = () => {
  return (
    <Videocontainer>
       
        <embed data-aos="fade-left" data-aos-duration="1500" src={gif}  />
    </Videocontainer>
  )
}

export default ConvertVideo3
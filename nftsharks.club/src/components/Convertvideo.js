import React from 'react'
import styled from 'styled-components'
import Gif from '../video/Home Video2.gif'


const Videocontainer = styled.div`
width: 80%;
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
    width: 100%;
    height: auto;
    border-radius: 20px;

    @media (max-width: 64rem){
      min-width: 70vw;
      margin-top: 10px;
    }
}
`
const Convertvideo = () => {
  return (
    <Videocontainer>
        
        <embed data-aos="zoom-in" data-aos-duration="1500" src={Gif}  />  
    </Videocontainer>
  )
}

export default Convertvideo
import React from 'react'
import styled from 'styled-components'


const Videocontainer = styled.div`
width: 100%;

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

    @media (max-width: 64rem){
      min-width: 40vw;
    }
}
`
const Convertvideo2 = () => {
  return (
    <Videocontainer>
        {/* <video src={Gif} type="video/mp4" autoPlay muted loop/> */}
        
    </Videocontainer>
  )
}

export default Convertvideo2
import React from 'react'
import styled from 'styled-components'
import logoImage from '../Images/nft-logo.svg'





const Section = styled.section`
background: #fff;
`
const Footer1 = styled.footer`
width: 100%;
/* background: linear-gradient(to right, #eee, #2c3e50); */
background: #093691;
color: #fff;
padding: 100px 0 30px;
border-top-left-radius: 125px;
font-size: 13px;
line-height: 20px;
@media (max-width: 700px){
  bottom: unset;
}

`
const Row = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

`
const Col =styled.div`
  flex-basis: 25%;
  padding: 10px;
  @media (max-width: 700px){
    flex-basis: 100%;
  }
`
const LogoText = styled.h1`
color: #fff;
font-size: 80px;
margin-bottom: 80px;
cursor: pointer;
transition: all .2s ease;
font-family: 'Akaya Telivigala', cursive;

&:hover{
    transForm: scale(0.9);
  
}
img{
  width: 100px;
}
`
const Menu = styled.ul`
  list-style: none;
  margin-top: 40px;
`
const Items= styled.li`
  margin-bottom: 12px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  a{
    text-decoration: none;
    
  }
`
const Form = styled.form`
  padding-bottom: 15px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  margin-bottom: 50px;
  .far{
    font-size: 18px;
    margin-right: 10px;
  }
  input {
    width: 100%;
    background: transparent;
    padding-left: 20px;
    color: #fff;
    border: none;
    outline: none;
    &::placeholder{
      color: #fff;
      font-weight: 600;
    }

  }
  button{
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    .fas{
      font-size: 16px;
      color: #fff;
    }
  }
`
const SocialIcon = styled.div`
  .fab, .fa-brands{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    color: #000;
    background: #fff;
    margin-right: 15px;
    margin-top: 70px;
    cursor: pointer;
    
    @media (max-width: 70em){
      margin-right: 6px;
      width: 35px;
      height: 35px;
      font-size: 15px;
      text-align: center;
    }
    @media (max-width: 64em){
      margin-top: 100px;
      margin-right: 6px;
      width: 35px;
      height: 35px;
      font-size: 15px;
      text-align: center;
    }
    @media (max-width: 64em){
      margin-right: 12px;
      margin-top: 18px;
    }
  }
`
const Hr = styled.hr`
  width: 90%;
  border: none;
  border-bottom: 1px solid #fff;
  margin: 20px auto;
`
const Copyright = styled.p`
  text-align: center;
  font-weight: 800;
`
const Underline = styled.div`
  width: 15%;
  height: 1px;
  background: #fff;
  border-radius: 3px;
  position: relative;
  top: 25px;
  left: 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 64em){
    width: 5%;
  }
  /* span{
  width: 6px;
  height: 100%;
  background: #000;
  border-radius: 3px;
  position: absolute;
  animation: moving 5s linear infinite;
  transition: all .5 ease;
  @keyframes moving{
    0%{
      left: -2px;
    }
    100%{
      left: 80%;
    }
  }
  } */
`
const Title = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: #fff;
`


  const scrollTo = (id)=>{
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
   
  }
const Footer = () => {
  return (
    <Section>
      <Footer1  id="footer">
        <Row>
          <Col>
          <LogoText onClick={()=> scrollTo('nav')}>
            <img src={logoImage}/>
          </LogoText>
          <Title>NFTsharks.club</Title>
          </Col>
          <Col>
          <h3><Underline><span></span></Underline>Links</h3>
          <Menu>
            <Items onClick={()=> scrollTo('nav')}>Home</Items>
            <Items onClick={()=> scrollTo('About')}>About</Items>
            <Items onClick={()=> scrollTo('services')}>Service</Items>
            <Items onClick={()=> scrollTo('testimonials')}>Testimonials</Items>

          </Menu>
          </Col>
          <Col>
          <h3><Underline><span></span></Underline>Social Links</h3>
          {/* <Form>
            <i class='fas fa-envelope'></i>
            <input type="email" name='user_email' placeholder='Enter your email id' required/>
            <button><i class='fas fa-arrow-right'></i></button>
          </Form> */}
          <SocialIcon>
          <a href="https://www.facebook.com/nftsharks.club"><i class='fab fa-facebook-f'></i></a>
          <a href="https://twitter.com/nftsharksclub"><i class='fab fa-twitter'></i></a>
          <i class='fab fa-whatsapp'></i>
          <a href="www.linkedin.com/in/nftsharksclub"><i class='fab fa-linkedin'></i></a>
          <a href="tiktok.com/@nftsharks.club"><i class="fa-brands fa-tiktok"></i></a>
          </SocialIcon>
          </Col>
        </Row>
        <Hr />
        <Copyright>Copyright@2022</Copyright>
    </Footer1>
    </Section>
  )
}

export default Footer
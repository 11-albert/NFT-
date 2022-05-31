import React from 'react'
import styled from 'styled-components'
import logoImage from '../Images/logo.png'





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
margin-bottom: 0px;
cursor: pointer;
transition: all .2s ease;
font-family: 'Akaya Telivigala', cursive;

&:hover{
    transForm: scale(0.9);
  
}
img{
  // background: pink;
  width: 100%;
  @media (max-width: 64em){
    width: 50%;
  }
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
  font-size: 20px;
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
    margin-top: 40px;
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
const ContactContainer = styled.div`
margin-top: 5px;

.fa-solid, .fa-brands{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  color: #000;
  background: #fff;
  margin-right: 15px;
  margin-top: 20px;
  cursor: pointer;
}
h3{
  font-size: 20px;
}
p{
  margin-top: 0px;
  font-size: 18px;
  font-weight: 800;
}
`
const SubTitle = styled.h3`
font-size: 20px;
font-weight: 800;
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
          {/* <Title>NFTsharks.club</Title> */}
          </Col>
          <Col>
          <SubTitle><Underline><span></span></Underline>Links</SubTitle>
          <Menu>
            <Items onClick={()=> scrollTo('nav')}>Home</Items>
            <Items onClick={()=> scrollTo('About')}>About</Items>
            <Items onClick={()=> scrollTo('services')}>Service</Items>
            <Items onClick={()=> scrollTo('testimonials')}>Clients</Items>

          </Menu>
          </Col>
          <Col>
          <SubTitle><Underline><span></span></Underline>Contact</SubTitle>
          {/* <Form>
            <i class='fas fa-envelope'></i>
            <input type="email" name='user_email' placeholder='Enter your email id' required/>
            <button><i class='fas fa-arrow-right'></i></button>
          </Form> */}
        
          <SocialIcon>
          <a href="https://www.facebook.com/nftsharks.club" target="_blank"><i class='fab fa-facebook-f'></i></a>
          <a href="https://twitter.com/nftsharksclub" target="_blank"><i class='fab fa-twitter'></i></a>
          <a href='https://t.me/nftsharksclub' target="_blank"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://www.linkedin.com/company/80561984" target="_blank"><i class='fab fa-linkedin'></i></a>
          <a href="https://tiktok.com/@nftsharks.club" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          </SocialIcon>
          <ContactContainer>
            
            <p><b><i class="fa-solid fa-envelope-open-text"></i></b> rizwan@nftsharks.club</p>
            <p><b><i class="fa-brands fa-whatsapp"></i> </b> +923147765574</p>
          
          </ContactContainer>
          </Col>
        </Row>
        <Hr />
        <Copyright>Copyright@2022</Copyright>
    </Footer1>
    </Section>
  )
}

export default Footer
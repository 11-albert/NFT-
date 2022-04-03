import React, {useRef} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'




const Section = styled.section`
width: 100%;
height: 100vh;
padding: 70px;
/* background-color: pink; */
@media (max-width: 64em){
    padding: 40px 12px;
    height: auto;
}
`
const Container = styled.div`
background: tomato;
padding: 40px 12px;
border-radius: 10px;
@media (max-width: 64em){
    
}
`
const Title = styled.h1`
    color: #fff;
    border-bottom: 2px solid;
    width: fit-content;
    margin: 12px auto;
    font-family: 'Oswald', sans-serif;
    @media (max-width: 64em){
      margin-bottom: 20px;
     
  } 
`
const Form = styled.form`
width: 50%;
display: flex;
flex-direction: column;
margin: 0 auto;
@media (max-width: 64em){
      width: 80%;
     
  } 
input{
    padding: 12px;
    margin-bottom: 12px;
    border: none;
    outline: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    /* border-radius: 5px; */
    background: transparent;
    &::placeholder{
        color: #fff;
        font-weight: 600;
    }
  
     
}
`
const Textarea = styled.textarea`
color: #fff;
outline: none;
border: 1px solid #fff;
border-radius: 5px;
background: transparent;
padding: 12px 12px;
&::placeholder{
    color: #fff;
    font-weight: 600;
}
`
const Btn = styled.button`
display: inline-block;
outline: none;
border: none;
color: #000;
background-color: #fff;
font-weight: 800;
padding: 0.8rem 2.5rem;
border-radius: 50px;
transition: all .2s ease;
position: relative;
cursor: pointer;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% ) scale(0);
    border: 2px solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all .2s eas;
}
&:hover::after{
    transform: translate(-50%, -50% ) scale(1);
    padding: .3rem;
}
`
const BtnContainer = styled.div`
    margin-top: 12px;
`

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vgsoip2', 'template_hvrdp7l', e.target, 'FgXQOoQZSbs71gdxx')
      .then((result) => {
          alert("your form has been sent");
      }, (error) => {
          alert("please fill the form correctly");
      });
  };

  return (
    <Section id="contact">
        <Container>
            <Form  ref={form} onSubmit={sendEmail}>
                <Title>CONTACT US</Title>
                <input type="text" name='name' placeholder='Enter first name' required/>
                <input type="text" name='lname' placeholder='Enter last name' required />
                <input type="email" name='user_email' placeholder='Enter your email' required/>
                <Textarea name="message" cols="30" rows="10" placeholder='How can we help you?' required></Textarea>
                <BtnContainer>
                  <Btn type='submit' value="Send" >Submit</Btn>    
                </BtnContainer>
                
            </Form>
        </Container>
    </Section>
  )
}

export default Contact
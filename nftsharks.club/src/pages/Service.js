import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
width: 100%;
min-height: 100vh;
background: url('../images/Content1.jpg');
background-repeat: no-repeat;
background-size: cover;
object-fit: cover;

padding: 70px 70px;
@media (max-width: 64em){
    padding: 70px 40px;
}
`
const Title = styled.h1`
font-weight: 600;
text-align: center;
color: #fff;
border-bottom: 2px solid #fff;
width: fit-content;
margin: 0 auto;
`
const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;


/* &>*:nth-of-type(2n){
    
    justify-content: start;
}
&>*:nth-of-type(2n +1){
   justify-content: end;
} */
div{
    display: flex;
    flex-direction: column;
        width: 50%;
    }
@media (max-width: 64em){
    width: 100%;
}
`
const SubTitle = styled.h2`
color: #fff;
border-bottom: 1px solid #fff;
width: fit-content;
margin-top: 60px;
`
const SubText = styled.p`
color: #fff;
margin-top: 5px;
`

// const OurService = ({title, text})=>{
//     return(
//         <>
//            <SubTitle>{title}</SubTitle>
//             <SubText>{text}</SubText>
//         </>
        
//     )
// }
const Service = () => {
    
  return (
    <Section id="services">
        <Title>OUR SERVICES</Title>
        <Container>
            {/* <OurService title="Discord Marketing" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, recusandae. Deleniti, placeat!"/>
            <OurService title="Discord Marketing" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, recusandae. Deleniti, placeat!"/>
            <OurService title="Discord Marketing" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, recusandae. Deleniti, placeat!"/> */}
            <div>
            <SubTitle>Discord Marketing</SubTitle>
            <SubText>Discord, a digital distribution platform that is still in its infancy, allows you to create
                Discord servers for discussion. You can also create and join the channel with other like-minded people interested 
                in NFT topics. This platform can help you promote your NFT projects. We teach customers detailed project features 
                on various community-based forums to reach the top business community. Our NFT Marketing services share the best 
                ideas and proposals of projects to community group and engage with them to gain their interest.<br/><br/>
                Social Media Marketing Strategy Engaging the target audience on social media channels is crucial. Not all social media 
                sites are suitable for NFT Marketing Services. On the move, however, Facebook,Linkedin and Twitter increase the chances
                of reaching potential buyers.<br/> 
                We promote our customers' projects and business ideas with an efficient marketing strategy on various social media platforms. We
                extend our SMM services on multiple platforms like Facebook, I
            </SubText>
            </div>
            <div></div>
        </Container>
        <Container>
           <div></div>
            
           <div>
           <SubTitle>Paid Advertisements</SubTitle>
           <SubText>This is a great marketing strategy approach that produces the best results. Content is the king. It is the heart of marketing.
               By promoting NFT project through blogs, infographics and other media, it increases brand visibility. This will allow to reach your 
               target audience directly.<br/><br/>
               We offer our customers strategic content to cover the global audience interest towards your NFT Marketplace. We provide engaging content
               like blogs to promote their products on various sites to seek users' attention.
           </SubText>
           </div>
        </Container>
        <Container>
          <div>
          <SubTitle>Telegram Marketing</SubTitle>
          <SubText>Telegram group and channels act as a best outsourcing medium. We promote your NFT marketplace in Telegram for the visibility.</SubText>
          </div>
          <div></div>
           
        </Container>
        <Container>
        <div></div>
            <div>
            <SubTitle>Influencer's Marketing</SubTitle>
            <SubText>Reaching out to influencers in the NFT industry to explain the products to make use of their influence to promote the NFTs marketplace.
                We ensure to gain the interest of influence from the NFT industry to brief our products and make use of that strategy to promote our NFT Marketplace.
                 Influencing a group of people is an evergreen technique to gain the traction of users towards your brand.
            </SubText>
            </div>
           
        </Container>
        <Container>
          
            
           <div>
           <SubTitle>Media PR</SubTitle>
           <SubText>Improving the reach and credibility of the NFT with Strategic information release on crypto sites and publish prints in your niche.<br/><br/>
           Publishing press releases is a crucial strategy. Publishing press releases will benefit your business in a significant way as it allows you to communicate the 
           news to the right people. For the press release to be featured, ensure that you choose top-tier media outlets.<br/><br/>
           We strategize to improve the credibility and reach of your NFT projects through efficients press releases on various sites and desired magazines.
           Many business giants are showing interest in strategic PR for convering the interest of the global audience.
           </SubText>
           </div>
           <div></div>
        </Container>
        <Container>
        <div></div>
          <div>
          <SubTitle>NFT Listing Services</SubTitle>
          <SubText>Our listing service helps to list your projects in top marketplaces and platform to seek the audience traction towards your NFT platform.
              We help customers with listing services to list their NFT projects in top marketplaces and platforms to gain the interest of global audiences.
              Our strategic listing services keep the investors in a leading to dominate competitors.
          </SubText>
          </div>
         
           
        </Container>
        <Container>
       
          <div>
          <SubTitle>Search Engine Optimizatiion</SubTitle>
          <SubText>To attract potential buyers, you can also increase your NFT project's organic visibility visibility through SEO (Search Engine Optimization).
              This is undoubtedly the best option, as people now rely on Google search results to find answers or insights. You can achieve this by contacting the best NFT
              marketing agency.
          </SubText>
          </div>
          <div></div>
           
        </Container>
    </Section>
  )
}

export default Service
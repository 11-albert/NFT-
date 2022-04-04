import React from 'react'
import styled from 'styled-components'
import Button2 from '../components/Button2'



const Section = styled.section`
    background-color: #fff;
    width: 100%;
    min-height: 100vh;
    padding: 70px 70px;
    @media (max-width: 64em){
        padding: 40px 12px;
    }
`
const Title = styled.h1`
    font-weight: 800;
    color: #093691;
    border-bottom: 2px solid #093691;
    width: fit-content;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`
const Container = styled.div`
background-color: #2e91f9;
padding: 0px 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 75vh;
margin-top: 40px;
@media (max-width: 54em){
    flex-direction: column;
    gap: 40px;
    height: auto;
    padding: 12px 20px;
}
div{
    width: 60%;
    @media (max-width: 64em){
        width: 100%;
    }
    
}
`
const SubTitle = styled.h2`
color: #fff;
border-bottom: 1px solid #fff;
font-size: 34px;
font-weight: 800;
width: fit-content;
margin-bottom: 16px;
`
const SubText = styled.p`
color: #fff;
font-weight: bolder;
margin-top: 5px;
text-align: justify;
`
const BtnContainer = styled.div`
/* background-color: #fff;
display: flex;
flex-direction: column;
gap: 8px; */
/* background-color: #34495e; */
display: flex;
flex-direction: column;
gap: 8px;
padding: 12px 12px;
border-radius: 12px;

@media (max-width: 64em){
    padding: 4px;
}
`
const Btn = styled.button`
width: 40px;
height: 40px;
padding: 0 12px;
background-color: #fff;
color: #000;
font-weight: bold;
outline: none;
border: none;
border-radius: 10px;
overflow: hidden;
display: flex;
align-items: center;
text-align: center;
transition: all .3s ease;
margin-bottom: 10px;
cursor: pointer;


/* display: inline-block;
outline: none;
border: none;
color: #fff;
font-weight: 600;
background-color: #555;
padding: 0.8rem 2.5rem;
border-radius: 5px;
transition: all .2s ease;
position: relative; */


&:hover{
    width: 100%;
    
    
   
}


@media (max-width: 64em){
    width: 100%;
    height: 100%;
    display: inline-block;
    outline: none;
    border: none;
    color: #000;
    font-weight: 600;
    background-color: #fff;
    padding: 0.8rem 2.5rem;
    border-radius: 5px;
    transition: all .2s ease;
    position: relative;
    margin-bottom: 0px;
   

}
`
const Icon = styled.i`
margin-right: 30px;
font-size: 16px;
@media (max-width: 64em){
    margin-right: 12px;
    font-size: 12px;
    
}
`
const MidIcon = styled.i`
font-size: 200px;
color: #fff;
display: flex;
/* justify-content: center; */
@media (max-width: 64em){
    justify-content: center;
    font-size: 100px;
}
`
const OurService = () => {
    const [mainContent, setmainContent] = React.useState("discord");
   
   
  return (
    <Section id="services"> 
        <Title>OUR SERVICES</Title>
        <Container>
        
            <div>
                <BtnContainer>
                    <Btn onClick={() => setmainContent("discord")}><Icon><i class="fa-brands fa-discord mr-4"></i></Icon>Discord</Btn>
                    <Btn onClick={() => setmainContent("advertisement")}><Icon><i class="fa-solid fa-rectangle-ad mr-4"></i></Icon>Advertisement</Btn>
                    <Btn onClick={() => setmainContent("telegram")}><Icon><i class="fa-brands fa-telegram mr-4"></i></Icon>Telegram</Btn>
                    <Btn onClick={() => setmainContent("influencer")}><Icon><i class="fa-solid fa-money-bill-trend-up mr-4"></i></Icon>Influencer Marketing</Btn>
                    <Btn onClick={() => setmainContent("mediapr")}><Icon><i class="fa-solid fa-display mr-4"></i></Icon>PR</Btn>
                    <Btn onClick={() => setmainContent("NFTlisting")}><Icon><i class="fa-solid fa-list mr-4"></i></Icon>NFT Listing</Btn>
                    <Btn onClick={() => setmainContent("searchEngine")}><Icon><i class="fa-brands fa-searchengin mr-4"></i></Icon>SEO</Btn>
                   
                </BtnContainer>
            
            
            </div>
            {
                 mainContent == "discord" ? 
            <div>
                <MidIcon><i class="fa-brands fa-discord mr-4"></i></MidIcon>
            </div>: mainContent == "advertisement" ?
            <div>
                <MidIcon><i class="fa-solid fa-rectangle-ad mr-4"></i></MidIcon>
            </div>: mainContent == "telegram" ?
            <div>
                <MidIcon><i class="fa-brands fa-telegram mr-4"></i></MidIcon>
            </div>: mainContent == "influencer" ?
            <div>
                <MidIcon><i class="fa-solid fa-money-bill-trend-up mr-4"></i></MidIcon>
            </div>: mainContent == "mediapr" ?
            <div>
                 <MidIcon><i class="fa-solid fa-display mr-4"></i></MidIcon>
            </div>: mainContent == "NFTlisting" ?
            <div>
                 <MidIcon><i class="fa-solid fa-list mr-4"></i></MidIcon>
            </div>:
            <div>
                <MidIcon><i class="fa-brands fa-searchengin mr-4"></i></MidIcon>
            </div>
}
        
        {
             mainContent == "discord" ? 
        <div>
            <SubTitle>Discord Marketing</SubTitle>
            <SubText>Discord, a digital distribution platform that is still in its infancy, allows you to create
                Discord servers for discussion. You can also create and join the channel with other like-minded people interested 
                in NFT topics. This platform can help you promote your NFT projects. We teach customers detailed project features 
                on various community-based forums to reach the top business community. Our NFT Marketing services share the best 
                ideas and proposals of projects to community group and engage with them to gain their interest.<br/><br/>
            
                
            </SubText>
        </div>: mainContent == "advertisement" ?
        <div>
            <SubTitle>Paid Advertisements</SubTitle>
            <SubText>This is a great marketing strategy approach that produces the best results. Content is the king. It is the heart of marketing.
                By promoting NFT project through blogs, infographics and other media, it increases brand visibility. This will allow to reach your 
                target audience directly.<br/><br/>
                We offer our customers strategic content to cover the global audience interest towards your NFT Marketplace. We provide engaging content
                like blogs to promote their products on various sites to seek users' attention.
            </SubText>
        </div>: mainContent == "telegram" ?
        <div>
           <SubTitle>Telegram Marketing</SubTitle>
           <SubText>Telegram group and channels act as a best outsourcing medium. We promote your NFT marketplace in Telegram for the visibility.</SubText>
        </div>: mainContent == "influencer" ?
        <div>
        <SubTitle>Influencer's Marketing</SubTitle>
        <SubText>Reaching out to influencers in the NFT industry to explain the products to make use of their influence to promote the NFTs marketplace.
            We ensure to gain the interest of influence from the NFT industry to brief our products and make use of that strategy to promote our NFT Marketplace.
             Influencing a group of people is an evergreen technique to gain the traction of users towards your brand.
        </SubText>
        </div>: mainContent == "mediapr" ?
         <div>
         <SubTitle>Media PR</SubTitle>
         <SubText>Improving the reach and credibility of the NFT with Strategic information release on crypto sites and publish prints in your niche.<br/><br/>
         Publishing press releases is a crucial strategy. Publishing press releases will benefit your business in a significant way as it allows you to communicate the 
         news to the right people. For the press release to be featured, ensure that you choose top-tier media outlets.<br/><br/>
         We strategize to improve the credibility and reach of your NFT projects through efficients press releases on various sites and desired magazines.
         Many business giants are showing interest in strategic PR for convering the interest of the global audience.
         </SubText>
         </div>: mainContent == "NFTlisting" ?
          <div>
          <SubTitle>NFT Listing Services</SubTitle>
          <SubText>Our listing service helps to list your projects in top marketplaces and platform to seek the audience traction towards your NFT platform.
              We help customers with listing services to list their NFT projects in top marketplaces and platforms to gain the interest of global audiences.
              Our strategic listing services keep the investors in a leading to dominate competitors.
          </SubText>
          </div>:
          <div>
          <SubTitle>Search Engine Optimizatiion</SubTitle>
          <SubText>To attract potential buyers, you can also increase your NFT project's organic visibility visibility through SEO (Search Engine Optimization).
              This is undoubtedly the best option, as people now rely on Google search results to find answers or insights. You can achieve this by contacting the best NFT
              marketing agency.
          </SubText>
          </div>
}
            

        </Container>
    </Section>
  )
}

export default OurService
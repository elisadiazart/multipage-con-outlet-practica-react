import SmallTitle from "../components/small-title/SmallTitle"
import Text from "../components/text/Text"
import Title from "../components/title/Title"
import { StyledAboutContainer, StyledAboutDataContainer, StyledAboutImage, StyledData, StyledMainTop } from "./styles"

const About = () => {
    return <main>
    <StyledMainTop></StyledMainTop>
    <StyledAboutContainer>
        <Title text='We empower innovators
    by delivering access to the financial system'/>
    <SmallTitle text='Our Vision'/>
    <Text text='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ' color='#6C8294'/>
    <SmallTitle text='Our Business'/>
    <Text text='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ' color='#6C8294'/>
    </StyledAboutContainer>
    <StyledAboutImage ></StyledAboutImage>
    <StyledAboutContainer>
        <StyledAboutDataContainer>
        <Text text='Team Members' color='#6C8294'/>
        <StyledData>300+</StyledData>
        <Text text='Offices in the US' color='#6C8294'/>
        <StyledData>3</StyledData>
        <Text text='Transactions analyzed' color='#6C8294'/>
        <StyledData>10M+</StyledData>
        </StyledAboutDataContainer>
        <SmallTitle text='The Culture'/>
        <Text text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title." color='#6C8294'/>
        <SmallTitle text='The People'/>
        <Text text=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills." color='#6C8294'/>
    </StyledAboutContainer>
    </main>
}

export default About
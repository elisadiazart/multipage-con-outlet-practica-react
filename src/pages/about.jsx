import SmallTitle from "../components/small-title/SmallTitle"
import Text from "../components/text/Text"
import Title from "../components/title/Title"
import { StyledAboutContainer, StyledAboutDataContainer, StyledAboutImage, StyledData, StyledMainTop, StyledTitleContainer, StyledTextContainer } from "./styles"

const About = () => {
    return <main>
    <StyledMainTop></StyledMainTop>
    <StyledAboutContainer>
        <StyledTitleContainer>
        <Title text='We empower innovators
    by delivering access to the financial system'/>
    </StyledTitleContainer>
    <StyledTextContainer>
    <SmallTitle text='Our Vision'/>
    <Text left='true' text='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ' color='#6C8294'/>
    </StyledTextContainer>
    <StyledTextContainer>
    <SmallTitle text='Our Business'/>
    <Text left='true' text='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ' color='#6C8294'/>
    </StyledTextContainer>
    </StyledAboutContainer>
    <StyledAboutImage ></StyledAboutImage>
    <StyledAboutContainer>
        <StyledAboutDataContainer>
            <div>
            <Text text='Team Members' color='#6C8294' displayIpad='none'/>
            <StyledData>300+</StyledData>
            </div>
            <div>
            <Text text='Offices in the US' color='#6C8294' displayIpad='none'/>
            <StyledData>3</StyledData>
            </div>
            <div>
            <Text text='Transactions analyzed' color='#6C8294' displayIpad='none'/>
            <StyledData>10M+</StyledData>
            </div>
        </StyledAboutDataContainer>
        <StyledTextContainer>
        <SmallTitle text='The Culture'/>
        <Text left='true' text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title." color='#6C8294'/>
        </StyledTextContainer>
        <StyledTextContainer>
        <SmallTitle text='The People'/>
        <Text left='true' text=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills." color='#6C8294'/>
        </StyledTextContainer>
    </StyledAboutContainer>
    </main>
}

export default About
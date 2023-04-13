import { v4 } from "uuid"
import { ADVANTAJES } from "../../constants/advantajes"
import BorderButton from "../border-button/borderButton"
import Brands from "../brands/Brands"
import Form from "../form/Form"
import Text from "../text/Text"
import Title from "../title/Title"
import { StyledImageMobile, StyledHeaderBottom,StyledMain, StyledCircle, StyledBrandsDiv,StyledImplement, StyledImplenmentImage, StyledUi, StyledMobiletImage, StyledCard, StyledTitle, StyledCards, StyledTextContainer, StyledDiv, StyledBrandsContainer } from "./styles"

const Main = () => {
    return <StyledMain>
        <StyledCircle></StyledCircle>
        <StyledHeaderBottom>
            <StyledDiv>
                <StyledImageMobile src='/home/desktop/illustration-phone-mockup.svg'/>
                <StyledTextContainer>
                <Title text='Start building with our APIs for absolutely free.'/>
                <Form/>
                <Text leftPc='true' text='Have any questions?' span='Contact Us'/>
                </StyledTextContainer>
            </StyledDiv>
        </StyledHeaderBottom>
        <StyledBrandsDiv>
            <StyledBrandsContainer>
            <Brands color='white' marginTop='6rem'/>
            <StyledTextContainer>
            <Title text='Who we work with' color='#FBFCFE'/>
            <Text leftPc='true' text='Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.' color='#AEB3B7'/>
            <BorderButton text='About Us' border='white' color='white'/>
            </StyledTextContainer>
            </StyledBrandsContainer>
        </StyledBrandsDiv>
        <StyledImplement>
            <StyledImplenmentImage src="/home/desktop/illustration-easy-to-implement.png" alt="" />
            <div>
            <Title text='Easy to implement' />
            <Text leftPc='true' text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.' />
            </div>
        </StyledImplement>
        <StyledUi>
            <StyledMobiletImage src="/home/desktop/illustration-simple-ui.svg" alt="" />
            <div>
            <Title text='Simple UI & UX' />
            <Text leftPc='true' text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. ' />
            </div>
        </StyledUi>
        <StyledCards>
            {ADVANTAJES.map(card => (
                <StyledCard key= {v4()}>
                <img src={card.image} alt={card.title} />
                <StyledTitle>{card.title}</StyledTitle>
                <Text text={card.text} />
                </StyledCard>
            ))}
        </StyledCards>
    </StyledMain>


}

export default Main
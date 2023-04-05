import Form from "../form/Form"
import Title from "../title/Title"
import { StyledFooter, StyledNav, StyledDiv, StyledLogo, StyledUl,StyledLi, StyledIconsContainer } from "./styles"

const Footer = () => {
    return <StyledFooter>
        <StyledDiv>
        <Title text='Ready to start?'/>
        <Form/>
        </StyledDiv>
        <StyledNav>
            <StyledLogo src="/shared/desktop/logo-white.svg" alt="logo" />
            <StyledUl>
                <StyledLi><a href="/pricing">Pricing</a></StyledLi>
                <StyledLi><a href="/about">About</a></StyledLi>
                <StyledLi><a href="/contact">Contact</a></StyledLi>
                <StyledIconsContainer>
                    <img src="/shared/desktop/facebook.svg" alt="" />
                    <img src="/shared/desktop/twitter.svg" alt="" />
                    <img src="/shared/desktop/linkedin.svg" alt="" />
                </StyledIconsContainer>
            </StyledUl>
        </StyledNav>
    </StyledFooter>
}

export default Footer
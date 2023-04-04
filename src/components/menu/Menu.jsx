import { StyledDiv, StyledCross, StyledLi, StyledButton, StyledContainer } from "./styles"

const Menu = ({translate, HandleClick}) => {
    return <StyledContainer translate={translate}>
    <StyledDiv >
        <StyledCross src="/shared/mobile/close.svg" alt="cross" onClick={() =>{HandleClick()}}/>
        <StyledLi>
            <a href="/pricing">Pricing</a>
        </StyledLi>
        <StyledLi>
        <a href="/about">About</a>
        </StyledLi>
        <StyledLi>
            <a href="/contact">Contact</a>
        </StyledLi>
        <StyledButton>
            <a href="">Schedule a Demo</a>
        </StyledButton>
    </StyledDiv>
    </StyledContainer>
}

export default Menu
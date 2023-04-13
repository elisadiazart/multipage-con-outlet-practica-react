import { v4 } from "uuid"
import Brands from "../components/brands/Brands"
import Input from "../components/input-text/Input"
import Title from "../components/title/Title"
import { CONTACTINFO } from "../constants/contact"
import { StyledForm, StyledInput, StyledLabel, StyledMain, StyledCheckbox, StyledCheckboxBox,StyledSubmit, StyledDiv, StyledMainTop, StyledTitleContainer, StyledTitle } from "./styles"

const Contact = () => {
    return <StyledMain>
        <StyledMainTop></StyledMainTop>
        <StyledTitleContainer>
        <Title text='Submit a help request and we’ll get in touch shortly.'/>
        </StyledTitleContainer>
        <StyledForm>
            {CONTACTINFO.map(input => (
                <Input key={v4()} id={input[1]} text={input[0]}/>
            ))}
            <StyledLabel htmlFor='message'>Message</StyledLabel>
            <StyledInput id='message'/>  
            <StyledCheckbox>
                <StyledCheckboxBox type="checkbox" id='checkbox'/>
                <label htmlFor="checkbox">Stay up-to-date with company announcements and updates to our API</label>
            </StyledCheckbox>
            <StyledSubmit type="submit" value='Submit'/>
        </StyledForm>
        <StyledDiv>
        <StyledTitleContainer>
        <StyledTitle>Join the thousands of innovators already building with us</StyledTitle>
        </StyledTitleContainer>
        <Brands color='dark' marginTop='-4rem'/>
        </StyledDiv>
    </StyledMain>
}

export default Contact
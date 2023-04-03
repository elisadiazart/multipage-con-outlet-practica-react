import Text from "../text/Text"
import Title from "../title/Title"
import { StyledImageMobile, StyledHeaderBottom, StyledForm, StyledInputText, StyledSubmit ,StyledMain } from "./styles"

const Main = () => {
    return <StyledMain>
        <StyledHeaderBottom>
        <StyledImageMobile src='/home/desktop/illustration-phone-mockup.svg'/>
        <Title text='Start building with our APIs for absolutely free.'/>
        <StyledForm >
        <StyledInputText type="text" placeholder="Enter email address"/>
        <StyledSubmit type='submit' value='Schedule a Demo'/>
        </StyledForm >
        <Text text='Have any questions?' span='Contact Us'/>
        </StyledHeaderBottom>
    </StyledMain>


}

export default Main
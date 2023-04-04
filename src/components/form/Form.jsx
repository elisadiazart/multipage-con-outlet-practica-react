import { StyledForm, StyledInputText, StyledSubmit  } from "./styles"


const Form = () => {
    return  <StyledForm>
    <StyledInputText type="text" placeholder="Enter email address"/>
    <StyledSubmit type='submit' value='Schedule a Demo'/>
    </StyledForm >
}

export default Form
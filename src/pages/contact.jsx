import Title from "../components/title/Title"
import { StyledInput, StyledForm, StyledLabel, StyledMain } from "./styles"

const Contact = () => {
    return <StyledMain>
        <Title text='Submit a help request and we’ll get in touch shortly.'/>
        <StyledForm>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput type="text" text="Name" id='name'/>
            <StyledLabel htmlFor="email">Email Address</StyledLabel>
            <StyledInput type="text" text="Email Address" id="email"/>
            <StyledLabel htmlFor="company">Company Name</StyledLabel>
            <StyledInput type="text" text="Company Name" id="company"/>
            <StyledLabel htmlFor="title">Title</StyledLabel>
            <StyledInput type="text" text="Title" id='title'/>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledInput type="text" text="Title" id='message'/>
        </StyledForm>
    </StyledMain>
}

export default Contact
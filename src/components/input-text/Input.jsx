import { StyledInput, StyledLabel } from "./styles"

const Input = ({id, text}) => {
    return <>
    <StyledLabel htmlFor={id}>{text}</StyledLabel>
    <StyledInput type="text" id={id}/>
    </>
}

export default Input
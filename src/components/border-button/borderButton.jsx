import { StyledButton } from "./styles"

const BorderButton = ({text, border}) => {
    return <StyledButton border ={border}>
        {text}
        </StyledButton>
}

export default BorderButton
import { StyledButton } from "./styles"

const BorderButton = ({text, border, color}) => {
    return <StyledButton border={border} color={color}>
        {text}
        </StyledButton>
}

export default BorderButton
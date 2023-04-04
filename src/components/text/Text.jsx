import { StyledText, StyledSpan } from "./styles"

const Text = ({text, span, color}) => {
    return <StyledText color={color}>
        {text}
        <StyledSpan>{span}</StyledSpan>
    </StyledText>

}

export default Text
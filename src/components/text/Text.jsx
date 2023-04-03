import { StyledText, StyledSpan } from "./styles"

const Text = ({text, span}) => {
    return <StyledText>
        {text}
        <StyledSpan>{span}</StyledSpan>
    </StyledText>

}

export default Text
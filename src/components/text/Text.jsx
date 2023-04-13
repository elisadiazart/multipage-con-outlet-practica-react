import { StyledText, StyledSpan } from "./styles"

const Text = ({text, span, color, display, displayIpad, left}) => {
    return <StyledText color={color} display={display} displayIpad={displayIpad} left={left}>
        {text}
        <StyledSpan>{span}</StyledSpan>
    </StyledText>

}

export default Text
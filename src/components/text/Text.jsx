import { StyledText, StyledSpan } from "./styles"

const Text = ({text, span, color, display, displayIpad, left, leftPc }) => {
    return <StyledText color={color} display={display} displayIpad={displayIpad} left={left} leftPc={leftPc}>
        {text}
        <StyledSpan>{span}</StyledSpan>
    </StyledText>

}

export default Text
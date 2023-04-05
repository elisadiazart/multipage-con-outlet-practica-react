import { StyledCheck } from "./styles"

const Check = ({text, pseudo}) => {
    return <StyledCheck pseudo={pseudo}>
        {text}
    </StyledCheck>
}

export default Check
import styled from "styled-components";

const StyledText = styled.p`
    text-align: center;
    line-height: 38px;
    color: ${({ color }) => color};

`

const StyledSpan = styled.span`
    margin-left: .3rem;
    font-weight: 700;
`


export {StyledText, StyledSpan}
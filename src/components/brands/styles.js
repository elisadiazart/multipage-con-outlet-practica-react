import styled from "styled-components";

const StyledBrands = styled.div`
    margin-top: ${({ marginTop }) => marginTop};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: ${({ bgcolor }) => bgcolor};
    padding: 4rem 2rem ;
`

const StyledLogo = styled.img`
    margin: auto;
    padding: 1rem;
`


export {StyledBrands, StyledLogo}
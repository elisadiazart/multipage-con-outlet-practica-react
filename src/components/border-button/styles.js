import styled from "styled-components";

const StyledButton = styled.button`
    color: ${({ border }) => border} ;
    border: 1px solid ${({ border }) => border};
    background-color: transparent;
    border-radius: 24px;
    padding: 1rem 2rem;
    font-family: 'Public Sans', sans-serif;
    font-size: 1rem;
    margin: 2rem auto;
    display: flex;
    
`

export {StyledButton}
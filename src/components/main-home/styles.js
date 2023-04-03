import styled from "styled-components"


const StyledMain = styled.main`
    background-image: url(/shared/desktop/bg-pattern-circle.svg);
    background-repeat: no-repeat;
    background-position: -80px -410px;
    position: absolute;
    top: 0;
    padding-top: 6rem
`

const StyledImageMobile = styled.img`
    margin: auto;
    height: 500px;
    transform: translateX(1.5rem);
`

const StyledHeaderBottom = styled.div`
    margin: 0 3rem 6rem 3rem;
`

const StyledForm  = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`

const StyledInputText = styled.input`
    background-color: #FBFCFE;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border: none;
    border-radius: 24px;
    padding: 1rem 2rem;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
    color: #99A7B4 ;
`


const StyledSubmit = styled.input`
    padding: 1rem 2rem;
    border-radius: 24px;
    background: #BA4270;
    border-radius: 24px;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'Public Sans', sans-serif;
`
export{ StyledHeaderBottom, StyledImageMobile, StyledInputText, StyledForm, StyledSubmit, StyledMain}
import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/colors";

const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
    box-sizing: border-box;
    }
    img{
        max-width: 100%;
        display: block;
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        margin: 0;
        max-width: 100vw;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Public Sans', sans-serif;
        color: ${COLORS.color};
        overflow: hidden;
        background-color: ${COLORS.bgcolor}
    }
    *{
        margin: 0;
    }
`


export {GlobalStyles}
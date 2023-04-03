import Menu from "../menu/Menu"
import { StyledUl, StyledDiv, StyledNav } from "./styles"

const Nav = () =>{
    return <StyledNav>
        <StyledUl>
            <StyledDiv>
            <li>
                <a href=""><img src="/shared/desktop/logo.svg" alt="" /></a>
            </li>
            <li>
                <img src="/shared/mobile/menu.svg" alt="" />
            </li>
            </StyledDiv>
            <Menu/>
        </StyledUl>
    </StyledNav>
}

export default Nav
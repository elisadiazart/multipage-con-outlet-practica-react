import Menu from "../menu/Menu"
import { StyledUl, StyledDiv, StyledNav, StyledMenuIcon } from "./styles"
import { useState } from 'react';

const Nav = () =>{
    const [open, setOpen] = useState(false);
    return <StyledNav>
        <StyledUl>
            <StyledDiv>
            <li>
                <a href="/"><img src="/shared/desktop/logo.svg" alt="logo" /></a>
            </li>
            <li>
                <StyledMenuIcon src="/shared/mobile/menu.svg" alt="menu"  onClick={() => setMenu(open, setOpen)} />
            </li>
            </StyledDiv>
            <Menu translate= {open ? '0' : '100vw'} HandleClick= {() => setMenu(open, setOpen)} />
        </StyledUl>
    </StyledNav>
}

const setMenu = (open, setOpen) => {
	setOpen(!open);
};

export default Nav
import Form from "../form/Form"
import Title from "../title/Title"
import { StyledFooter } from "./styles"

const Footer = () => {
    return <StyledFooter>
        <Title text='Ready to start?'/>
        <Form/>
        <nav>
            <ul>
                <img src="/shared/desktop/logo.svg" alt="logo" />
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </ul>
        </nav>
    </StyledFooter>
}

export default Footer
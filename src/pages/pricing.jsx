import { v4 } from "uuid"
import BorderButton from "../components/border-button/borderButton"
import Check from "../components/check/Check"
import Title from "../components/title/Title"
import { PRICINGS } from "../constants/pricings"
import { StyledMainPricing, StyledMainTop, StyledChecksContainer, StyledCheckContainer, StyledPrice, StyledPriceTitle } from "./styles"

const Pricing = () => {
    return <StyledMainPricing>
        <StyledMainTop></StyledMainTop>
        <Title text='Pricing'/>
        <div>
            {PRICINGS.map(card => (
                <div  key={v4()}>
                <StyledChecksContainer>
                <StyledPriceTitle>{card.title}</StyledPriceTitle>
                <StyledPrice>{card.price}</StyledPrice>
                <StyledCheckContainer>
                    {Object.values(card.features).map(value => (
                        <Check key={v4()} pseudo={value[1]}text={value[0]}/>
                    ))}
                    
                </StyledCheckContainer>
                </StyledChecksContainer>
                <BorderButton text='Request Access' border='#36536B'/>
                </div>
            ))}
        </div>
    </StyledMainPricing>
}

export default Pricing
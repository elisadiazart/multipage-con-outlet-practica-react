import { v4 } from "uuid"
import BorderButton from "../components/border-button/borderButton"
import Check from "../components/check/Check"
import Text from "../components/text/Text"
import Title from "../components/title/Title"
import { PRICINGS } from "../constants/pricings"
import { StyledMainPricing, StyledMainTop, StyledChecksContainer, StyledCheckContainer, StyledPrice, StyledPriceTitle, StyledPricings} from "./styles"

const Pricing = () => {
    return <StyledMainPricing>
        <StyledMainTop></StyledMainTop>
        <Title text='Pricing'/>
        <StyledPricings>
            {PRICINGS.map(card => (
                <div  key={v4()}>
                <StyledChecksContainer>
                <StyledPriceTitle>{card.title}</StyledPriceTitle>
                <Text display='none' text={card.text}/>
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
        </StyledPricings>
    </StyledMainPricing>
}

export default Pricing
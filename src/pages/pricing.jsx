import { v4 } from "uuid"
import Check from "../components/check/Check"
import Title from "../components/title/Title"
import { PRICINGS } from "../constants/pricings"
import { StyledMainPricing, StyledMainTop } from "./styles"

const Pricing = () => {
    return <StyledMainPricing>
        <StyledMainTop></StyledMainTop>
        <Title text='Pricing'/>
        <div>
            {PRICINGS.map(card => (
                <div key={v4()}>
                <h3>{card.title}</h3>
                <p>{card.price}</p>
                <div>
                    {Object.values(card.features).map(value => (
                        <Check key={v4()} pseudo={value[1]}text={value[0]}/>
                    ))}
                    
                </div>
                </div>
            ))}
        </div>
    </StyledMainPricing>
}

export default Pricing
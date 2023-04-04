import { v4 } from "uuid"
import { BRANDS } from "../../constants/brands"
import { StyledBrands, StyledLogo } from "./styles"

const Brands = ({color, bgcolor, marginTop}) => {
    return <StyledBrands bgcolor={bgcolor} marginTop={marginTop}>
        {BRANDS[color].map(brand =>(
            <StyledLogo key={v4()} src={brand[0]} alt={brand[1]}/>
        ))}
    </StyledBrands>
}

export default Brands
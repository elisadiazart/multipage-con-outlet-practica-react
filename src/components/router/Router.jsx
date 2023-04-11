
import { Route, Routes } from "react-router-dom"
import About from "../../pages/about"
import Contact from "../../pages/contact"
import Home from "../../pages/home"
import Pricing from "../../pages/pricing"
import Layout from "../layout/Layout"

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="about" element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Routes>
    )
}


export default Router
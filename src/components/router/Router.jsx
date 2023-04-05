
import { Route, Routes } from "react-router-dom"
import Home from "../../pages/home"
import Pricing from "../../pages/pricing"
import Layout from "../layout/Layout"

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="about" element={<h1>about</h1>}/>
                <Route path='contact' element={<h1>contact</h1>}/>
            </Route>
        </Routes>
    )
}


export default Router
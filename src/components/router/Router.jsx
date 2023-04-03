
import { Route, Routes } from "react-router-dom"
import Layout from "../layout/Layout"
import Main from "../main-home/Main"

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="pricing" element={<h1>pricing</h1>}/>
                <Route path="about" element={<h1>about</h1>}/>
                <Route path='contact' element={<h1>contact</h1>}/>
            </Route>
        </Routes>
    )
}


export default Router
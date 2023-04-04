import { Outlet } from "react-router"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const Layout = () =>  {
    return <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
}

export default Layout
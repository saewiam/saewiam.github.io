import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/header";
import Footer from "../components/footer";

function rootComponent(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export const rootRoute = createRootRoute({component: rootComponent})
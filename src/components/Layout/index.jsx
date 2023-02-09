import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";
document.body.style = 'background: black';

export const Layout = () => {
    return(
        <React.Fragment>
            <Header/>
            <main >
                <Outlet/>
            </main>
        </React.Fragment>
    )
}
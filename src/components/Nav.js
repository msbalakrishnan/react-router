// import React from "react"
// import { Outlet, Link } from "react-router-dom"
import { Outlet, Link } from "react-router-dom";


export const Nav = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>

            <Outlet />
        </>
    )
}

import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <h1>header</h1>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    )
}

export default Layout

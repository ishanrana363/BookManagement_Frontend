import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-100px)] mt-16' >
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout

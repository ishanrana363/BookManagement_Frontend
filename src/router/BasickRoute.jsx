import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'

const BasickRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<div>home page</div>} />
                        <Route path="/about" element={<div>About</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BasickRoute

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import ShopPage from '../page/shop/ShopPage'
import EBook from '../page/ebook/EBook'
import AddBook from '../page/add-book/AddBook'

const BasickRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                    <Route path='/' element = {<div>home</div>} />
                        <Route path="books" element={ <ShopPage></ShopPage> } />
                        <Route path="ebooks" element={<EBook></EBook>} />
                        <Route path="membership" element={ <div>membership</div> } />
                        <Route path="books/add" element={<AddBook></AddBook> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BasickRoute

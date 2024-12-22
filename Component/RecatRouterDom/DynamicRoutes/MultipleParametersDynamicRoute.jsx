import React from 'react'
import { Routes, Route, Link, useParams } from "react-router-dom";

const Product = () => {
    const {category, productId} = useParams();
    return <h1>Categous: {category}, Product Id: {productId}</h1>
}

function MultipleParametersDynamicRoute() {
  return (
    <>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="product/electromics/123">Product Electromics</Link>
                    </li>
                    <li>
                        <Link to="product/clothing/123">Product Clothing</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path='/' element={<h1>This is Home page</h1>} />
            <Route path='product/:category/:productId' element={<Product/>} />
        </Routes>
    </>
  )
}

export default MultipleParametersDynamicRoute
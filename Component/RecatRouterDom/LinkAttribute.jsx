import React from 'react'
import { use } from 'react';
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is home page</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is profile page</p>
        </div>
    )
}

const Products = () => {

    const productList  = [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Smartphone", price: 800 },
        { id: 3, name: "Headphones", price: 200 },
    ]

    return (
        <>
            <div>
                <h1>Products</h1>
                <ul>
                    {productList.map((products) => (
                        <li key={products.id}> <Link to="product-details" state={{
                            productId: products.id,
                            productsName: products.name,
                            productsPrice: products.price
                        }}>{products.name}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ProductsDetails = () => {

    const location = useLocation();
    const {productId, productsName, productsPrice } = location.state || {}


    return (
        <>
            <div>
                <h1>Product Details</h1>
                {productId ? (
                    <div>
                        <p><strong>Product Id</strong>{productId}</p>
                        <p><strong>Name</strong>{productsName}</p>
                        <p><strong>Price</strong>{productsPrice}</p>
                    </div>
                ) : (
                    <p>No product details available.</p>
                )}
            </div>
        </>
    )
}

const Dashboard  = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/* Default behavior (relative="route") */}
                        <Link to="settings">Setting</Link>
                    </li>
                    <li>
                        {/* Explicit relative="path" */}
                        <Link to="profile" relative="path">Profile</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

const Settings = () => {
    return (
        <>
            <h1>Setings Page</h1>
            <p>This is settings page</p>
        </>
    )
}

function LinkAttribute() {
  return (
    <>

        <nav>
            <ul>
                <li>
                    {/* Normal Link */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Link with replace */}
                    <Link to="profile" replace={true}>Profile</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/product' element={<Products/>} />
            <Route path='/product/product-details' element={<ProductsDetails/>} />
            <Route path='/dashboard/*' element={<Dashboard/>} > 
                <Route path='settings' element={<Settings/>}/>
                <Route path='profile' element={<Profile/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default LinkAttribute
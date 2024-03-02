import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BaseComponent from "../components/baseComponent/baseComponent";
import Notfound from "../components/notFound/notFound";
import Home from "../containers/home/home";
import ProductDetails from "../containers/product/details/productDetails";
import Product from "../containers/product/product";
import Cart from "../containers/cart/cart";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/shop" element={<BaseComponent />}>
                <Route path="home" index element={<Home />}></Route>
                <Route path="products" element={<Product />}></Route>
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />}></Route>
            </Route>
            <Route path="*" element={<Notfound />} />
            <Route path="/" element={<Navigate to="/shop/home" />} />
            <Route path="/shop" element={<Navigate to="/shop/home" />} />
        </Routes>
    )
}

export default Navigation;
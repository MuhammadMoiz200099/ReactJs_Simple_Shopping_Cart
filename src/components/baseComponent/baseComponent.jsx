import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ImCart } from "react-icons/im";


const BaseComponent = () => {
    const navigation = useNavigate();

    const navigateTo = (location) => navigation(location);

    return (
        <div className='w-full h-screen bg-gray-50'>
            <nav class="font-sans flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-violet-900 text-white shadow sm:items-baseline w-full">
                <div className='flex items-center gap-4'>
                    <div className='text-xl font-bold'>Shopping Cart</div>
                    <span class="text-lg text-grey-darkest hover:text-blue-dark ml-2 hover:underline cursor-pointer" onClick={() => navigateTo('/')}>Home</span>
                    <span class="text-lg text-grey-darkest hover:text-blue-dark ml-2 hover:underline cursor-pointer" onClick={() => navigateTo('/shop/products')}>Products</span>
                </div>
                <div>
                    <ImCart size={20}  onClick={() => navigateTo('/shop/cart')} className='cursor-pointer' />
                </div>
            </nav>
            <div className='px-5 py-5 w-full max-h-screen overflow-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default BaseComponent
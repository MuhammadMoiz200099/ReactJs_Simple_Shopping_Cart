import React from 'react';
import PRODUCT_DATA from "../../mock/product_data";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Product = () => {

  const navigate = useNavigate();

  const viewProduct = (e, id) => {
    e.preventDefault();
    navigate(`/shop/product/${id}`)
  }

  return (
    <div className='w-full'>
      {PRODUCT_DATA && PRODUCT_DATA.length ? (
        <div className="p-4 grid grid-cols-4 gap-4">
          {PRODUCT_DATA.map((product) => (
            <div key={product.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <img class="rounded-t-lg" src={product.img} alt={product.title} />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800" onClick={(e) => viewProduct(e, product.id)}>
                  Details
                  <MdArrowRightAlt size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Product
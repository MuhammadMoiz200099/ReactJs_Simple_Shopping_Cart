import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";


const Cart = () => {
  const [price, setPrice] = useState(0);

  const removeItems = (index) => {
    var allitems = JSON.parse(localStorage.getItem("cart")) || [];
    var newItems = [];
    allitems.forEach((items, idx) => {
      if (idx !== index) newItems.push(items);
    });
    console.log(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
    window.location.reload();
  };

  const totalPrice = () => {
    let temp = 0;
    JSON.parse(localStorage.getItem("cart")).forEach(itemPrice => {
      temp += itemPrice.price;
    });
    setPrice(temp);
  };

  useEffect(() => {
    totalPrice();
  }, []);
  return (
    <div className="w-full">
      <div className='text-5xl uppercase font-bold tracking-widest'>
        Add to cart
      </div>
      <div class="relative overflow-x-auto py-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {JSON.parse(localStorage.getItem("cart")).map((items, idx) => (
              <tr key={idx} className="bg-white border-b">
                <td class="px-6 py-4">
                  <img src={items.img} height="70" width="70" alt="" />
                </td>
                <td class="px-6 py-4">{items.title}</td>
                <td class="px-6 py-4">
                  {items.description.length > 0
                    ? items.description
                    : "default product"}
                </td>
                <td class="px-6 py-4">{items.price}</td>
                <td class="px-6 py-4">
                  <MdDelete className='text-red-800 cursor-pointer' size={24} onClick={() => removeItems(idx)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center">
        <div className='text-3xl font-bold'>Total: {price}</div>
      </div>
    </div >
  )
}

export default Cart
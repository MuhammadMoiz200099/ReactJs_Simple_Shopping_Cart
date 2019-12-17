import React, { useState, useEffect } from "react";

const Add_to_cart = () => {
  const [price, setPrice] = useState(0);

  const removeItems = index => {
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
    <div className="container">
      <h1>Add to cart</h1>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">Product</th>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Items Remove</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("cart")).map((items, idx) => (
            <tr key={idx}>
              <td>
                <img src={items.img} height="70" width="70" alt="" />
              </td>
              <td>{items.title}</td>
              <td>
                {items.description.length > 0
                  ? items.description
                  : "default product"}
              </td>
              <td>{items.price}</td>
              <td>
                <button
                  onClick={removeItems.bind(null, idx)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="totalPrice">
        <h3>Total: {price}</h3>
      </div>
    </div>
  );
};

export default Add_to_cart;

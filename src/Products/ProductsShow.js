import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

import ProductsList from "../Data/product_data";

function ProductsShow() {
  return (
    <div className="container">
      {ProductsList.map((product, idx) => (
        <Link
          key={idx}
          to={{
            pathname: `/productDetails/${product.id}`,
            state: { data: product }
          }}
        >
          <div className="col-md-4 text-center">
            <div key={idx} className="card">
              <div className="card-body">
                <h2 className="card-titles">{product.title}</h2>
              </div>
              <img src={product.img} alt="Card" />
              <div className="card-body">
                <p className="card-text">{product.description}</p>
                <p>Price {product.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsShow;

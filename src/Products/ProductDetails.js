import React, { useState } from "react";
import "./Products.css";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const ProductDetials = props => {
  const [price, setPrice] = useState(props.location.state.data.price);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const priceHashRef = React.useRef({});
  // const selectHashRef = React.useRef({})

  const updatePrice = (item, cat) => () => {
    // console.log(priceHashRef.current, cat, item);
    priceHashRef.current[cat] = item;
    var temp = 0;
    for (let x in priceHashRef.current) {
      temp += priceHashRef.current[x].price;
    }
    setPrice(props.location.state.data.price + temp);
  };

  const sendTocart = () => {
    var allitems = JSON.parse(localStorage.getItem("cart")) || [];
    var data = [];
    for (let x in priceHashRef.current) {
      data.push(x + " : " + priceHashRef.current[x].title);
    }
    allitems.push({
      id: props.location.state.data.id,
      img: props.location.state.data.img,
      title: props.location.state.data.title,
      price: price,
      description: data,
      quantity: 1
    });
    localStorage.setItem("cart", JSON.stringify(allitems));
    setIsPaneOpen(true);
    totalPrices();
  };

  const totalPrices = () => {
    let temp = 0;
    JSON.parse(localStorage.getItem("cart")).filter(itemPrice => {
      temp = temp + itemPrice.price;
    });
    console.log(temp);
    setTotalPrice(temp);
  };

  React.useEffect(() => {
    setPrice(props.location.state.data.price);
  }, [props.location.state.data.price]);

  return (
    <div>
      <center>
        <h1 className="text-info">Product # {props.location.state.data.id}</h1>
      </center>
      <br />

      <div className="col-md-6 text-center">
        <img src={props.location.state.data.img} alt="" />
      </div>
      <div className="col-md-6">
        <h2 className="text-info">
          {props.location.state.data.title} -{" "}
          {props.location.state.data.description}
        </h2>
        <h3 className="text-success">
          US $ <span>{price}</span>
        </h3>

        <div>
          {props.location.state.data.varients.map((e, idx) => (
            <div key={e.title}>
              <h3>{e.title}</h3>
              <ul className="varients">
                {e.items.map(x => (
                  <li key={x.title} onClick={updatePrice(x, e.title)}>
                    <p
                      onClick={() => setIsSelected(!isSelected)}
                      className={
                        (priceHashRef.current[e.title] &&
                          priceHashRef.current[e.title].title) == x.title
                          ? "dataSelected"
                          : ""
                      }
                    >
                      {x.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button onClick={sendTocart} className="btn btn-info">
          Add to cart
        </button>
      </div>

      <div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={isPaneOpen}
          title="Checkout"
          onRequestClose={() => setIsPaneOpen(false)}
        >
          <div className="container-fluid">
            <table className="table table-hover">
              <thead>
                <tr className="table-light text-center">
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <div className="totalPrice">
              <h3>Total: {totalPrice}</h3>
            </div>
          </div>
        </SlidingPane>
      </div>
    </div>
  );
};

export default ProductDetials;

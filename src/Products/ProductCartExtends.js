import React from "react";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function ProductCartExtends() {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [isPaneOpenLeft, setIsPaneOpenLeft] = useState(false);

  useEffect(() => {
    Modal.setAppElement(this.el);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default ProductCartExtends;

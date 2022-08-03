import React from "react";

function Producto({name, img}) {
  return (
    <div className="cart_products-container">
      <div className="products-container_images-description_row">
        <div className="cart_row-image-container">
          <img
            src={`/images/${img}`}
            alt={name}
            className="images-description_image"
          />
        </div>
        <div className="cart_row-description-container">
          <span className="cart_row-description-description">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Producto;

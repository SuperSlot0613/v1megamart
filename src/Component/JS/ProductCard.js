import React from "react";
import "../CSS/ProductCard.css";

function ProductCard({ image,description }) {
  return (
    <div className="product_card">
      <div className="container">
        <div className="card">
          <div className="imgbox">
            <img src={image} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                The is<br></br>
                <span>{description}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

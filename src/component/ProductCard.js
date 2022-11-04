import React from 'react';
import "../component/productCard.css";


function ProductCard({ productObj }) {
  return (
    <div className="mainProductDisplay">
      <img className="imgstyle" src={productObj.img} alt="not working" />
      <div> ${productObj.price} <span > {" "}<small>{" "} { productObj.size } </small> </span></div>
      <small> {productObj.brand} </small>
      <span>
        {" "}
        <small> ( {productObj.gender} ) </small>{" "}
      </span>
      <div> { productObj.name } </div>
    </div>
  );
}

export default ProductCard;
import React from "react";
import { useParams } from "react-router-dom";
import data from "./../../data.json";

function Detail() {

  let { productId } = useParams();
  const product = data.find((item) => item.id == productId);

  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Detail;

import React from "react";
import { useParams } from "react-router-dom";
import { productListData } from "../constraint/PRODUCT_LIST";

function ProductDetail() {
  const { id } = useParams();
  const data = productListData.find((item) => item.id === Number(id));

  return (
    <div>
      <h1>ProductDetail</h1>
      <div>{data && <p> {data.name}</p>}</div>
    </div>
  );
}

export default ProductDetail;

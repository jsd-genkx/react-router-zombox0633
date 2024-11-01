import React from "react";
import { NavLink } from "react-router-dom";
import { productListData } from "../constraint/PRODUCT_LIST";

function ProductList() {
  return (
    <div>
      <h1>ProductList</h1>
      <ul>
        {productListData.map((item) => (
          <li key={item.id} className="">
            <NavLink to={`/product/${item.id}`}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

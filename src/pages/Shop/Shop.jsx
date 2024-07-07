import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div>shop</div>
      <div>
        {PRODUCTS.map((product) => (
          <Link key={product.id} to={product.productName}>
            <Product
              id={product.id}
              name={product.productName}
              price={product.price}
              productimg={product.productImage}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import classes from "./IndividualProduct.module.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";

export default function IndividualProduct() {
  const { addToCart } = useContext(ShopContext);
  const [count, setCount] = useState(1);
  const { productName } = useParams();
  const product = PRODUCTS.find(
    (product) => product.productName === productName
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img className={`${classes.image}`} src={product.productImage} />
      <p>{product.productName}</p>
      <p>${product.price}</p>
      <p>{count}</p>
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        minus
      </button>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => addToCart(product.id, count)}>Add to cart</button>
    </div>
  );
}

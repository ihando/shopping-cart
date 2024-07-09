import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  return (
    <>
      <div>Cart</div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.price}
                productimg={product.productImage}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div>Subtotal: ${totalAmount}</div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </>
  );
}

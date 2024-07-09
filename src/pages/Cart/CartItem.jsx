import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem({ id, name, price, productimg }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
      <img src={productimg} />
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={() => removeFromCart(id)}> - </button>
      <input
        value={cartItems[id]}
        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
      />
      <button onClick={() => addToCart(id, 1)}> + </button>
    </>
  );
}

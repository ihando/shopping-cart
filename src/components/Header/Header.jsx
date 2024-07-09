import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export default function Header() {
  const { totalItems } = useContext(ShopContext);
  return (
    <>
      <div className={`${classes.header}`}>
        <Link to="/">Logo</Link>
        <div className={`${classes.middlelinks}`}>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>

        <Link to="cart">
          Cart
          <p>({totalItems})</p>
        </Link>
      </div>
    </>
  );
}

import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={`${classes.header}`}>
        <Link to="/">Logo</Link>
        <div className={`${classes.middlelinks}`}>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
        <Link to="cart">Cart</Link>
      </div>
    </>
  );
}

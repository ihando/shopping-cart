import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const Product = ({ id, name, price, productimg }) => {
  return (
    <>
      <div>
        <img className={`${classes.image}`} src={productimg} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </>
  );
};

export default Product;

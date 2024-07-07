import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import classes from "./IndividualProduct.module.css";

export default function IndividualProduct() {
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
    </div>
  );
}

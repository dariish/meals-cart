import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  function onAddItem(amount) {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      price: props.item.price,
      amount: amount,
    });
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={styles.description}>{props.item.description}</div>
        <div className={styles.price}>€{props.item.price}</div>
      </div>
      <MealItemForm onAddItem={onAddItem} />
    </li>
  );
}

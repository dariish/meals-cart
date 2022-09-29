import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

export default function MealItemForm(props) {
  const amountRef = useRef();

  function onAddItemAmount(e) {
    e.preventDefault();
    props.onAddItem(+amountRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={onAddItemAmount}>
      <div className={styles.input}>
        <Input
          ref={amountRef}
          input={{ type: "number", defaultValue: "1", min: "1", max: "5" }}
          label="Amount"
        />
      </div>
      <button>+Add</button>
    </form>
  );
}

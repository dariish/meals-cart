import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  let itemsLength = cartCtx.items.length === 0;

  function cartItemAdd(item) {
    const newItem = { ...item, amount: 1 };
    cartCtx.addItem(newItem);
  }
  function cartItemDel(id) {
    cartCtx.delItem(id);
  }

  const cartContent = itemsLength ? (
    <p className={styles.notFound}>No items found</p>
  ) : (
    cartCtx.items.map((item) => {
      return (
        <CartItem
          onAddItem={cartItemAdd.bind(null, item)}
          onDelItem={cartItemDel.bind(null, item.id)}
          key={item.id}
          item={item}
        />
      );
    })
  );

  return (
    <Modal onClose={props.onClose}>
      {cartContent}
      {!itemsLength && (
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>€ {cartCtx.totalPrice}</span>
        </div>
      )}
      <div className={styles.actions}>
        <button onClick={props.onClose} className={styles["button--alt"]}>
          Close
        </button>
        {!itemsLength && <button className={styles["button"]}>Order</button>}
      </div>
    </Modal>
  );
}

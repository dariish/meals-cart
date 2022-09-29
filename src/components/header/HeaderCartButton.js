import React, { useContext, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import Cart from "../cart/Cart";
import { CartContext } from "../../Store/CartContext";

export default function HeaderCartButton(props) {
  const [modal, setShowModal] = useState(false);
  const cartCtx = useContext(CartContext);

  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  return (
    <React.Fragment>
      {modal && <Cart onClose={toggleModal} />}
      <button
        key={Math.random()}
        className={`${styles.button} ${styles.bump}`}
        onClick={toggleModal}
      >
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={styles.badge}>{cartCtx.badgeAmount}</div>
      </button>
    </React.Fragment>
  );
}

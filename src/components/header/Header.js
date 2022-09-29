import styles from "./Header.module.css";
import img from "../../assets/ha.png";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./MealsSummary";
export default function Header(props) {
  return (
    <React.Fragment>
      <div className={styles["main-image"]}>
        <img alt="Meals on a table" src={img} />
      </div>
      <div className={styles.header}>
        <h1>Meals Cart</h1>
        <HeaderCartButton />
      </div>
      <MealsSummary />
    </React.Fragment>
  );
}

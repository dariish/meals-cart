import styles from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2>Meals Cart Practice</h2>
      <p>
        Choose the meal you want to order from the Dummy list of meals given to
        you, you can change the amount aswell{" "}
      </p>
      <p>You can then go to the cart and order, or add/remove the foods.</p>
    </section>
  );
}

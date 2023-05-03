import style from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={style.summary}>
      <h2>Delicous Pizza, Delivered To You!</h2>
      <p>
        Choose your favorite pizza from our broad selection of available options
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our pizza's are cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
}

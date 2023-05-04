import style from "./CartItem.module.css";

export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={style["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{price}</span>
          <span className={style.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
}

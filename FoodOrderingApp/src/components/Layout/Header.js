//Returning Multiple JSX Elements Helper
import { Fragment } from "react";
//Importing CSS Module
import style from "./Header.module.css";
//Importing Main Header Image
import headerImage from "../../assets/images/meals.jpg";
//Importing Custom CartButton Component
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactPizza</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["header-image"]}>
        <img src={headerImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
}

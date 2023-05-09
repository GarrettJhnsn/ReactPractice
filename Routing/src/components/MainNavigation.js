import { NavLink } from "react-router-dom";

import style from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/thisdoesntwork">ErrorTest</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

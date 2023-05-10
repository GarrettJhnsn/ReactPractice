import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

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
              to="events"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="newsletter"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

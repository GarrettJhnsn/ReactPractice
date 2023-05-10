import { NavLink } from "react-router-dom";

import style from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink
              to={""}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              end
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"new"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

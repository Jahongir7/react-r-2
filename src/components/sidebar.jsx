import { NavLink } from "react-router-dom";
import classes from "../assets/styles/sidebar.module.css";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <b>Jahongir Xo'jamuratov</b>
      <p>Direktor</p>
      <ul>
        <NavLink
          to="stat"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>
            <Icon icon="streamline-emojis:bar-chart" width="24" height="24" />{" "}
            Statistika
          </li>
        </NavLink>
        <NavLink
          to="brand"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>
            <Icon icon="tabler:brand-google-analytics" /> Brandlar
          </li>
        </NavLink>
        <NavLink
          to="add-phone"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <li>
            <Icon
              icon="fluent:phone-desktop-add-20-regular"
              width="24"
              height="24"
            />{" "}
            Telefon Qo'shish
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;

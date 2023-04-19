import { Link } from "react-router-dom";
import classes from "../assets/styles/navbar.module.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div></div>
      <div className={classes.icons}>
        <Icon icon="mdi:bell-ring" width="24" height="24" />
        <Link to="/">
          <Icon icon="ic:twotone-exit-to-app" width="24" height="24" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

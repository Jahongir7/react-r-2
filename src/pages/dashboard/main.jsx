import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import classes from "../../assets/styles/main.module.css";

const MainDashBoard = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main_sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main_content}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashBoard;

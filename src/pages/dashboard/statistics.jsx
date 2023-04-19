import { Icon } from "@iconify/react";
import classes from "../../assets/styles/stat.module.css";

const Statistics = () => {
  return (
    <div className={classes.Statistics}>
      <div className={classes.info}>
        <div className={classes.info_item}>
          <div className={classes.number}>
            <p>BRANDLAR</p>
            <b>5</b>
          </div>
          <div className={classes.icon}>
            <Icon icon="tabler:brand-apple" />
          </div>
        </div>
        <div className={classes.info_item}>
          <div className={classes.number}>
            <p>BRANDLAR</p>
            <b>5</b>
          </div>
          <div className={classes.icon}>
            <Icon icon="tabler:brand-apple" />
          </div>
        </div>
        <div className={classes.info_item}>
          <div className={classes.number}>
            <p>BRANDLAR</p>
            <b>5</b>
          </div>
          <div className={classes.icon}>
            <Icon icon="tabler:brand-apple" />
          </div>
        </div>
        <div className={classes.info_item}>
          <div className={classes.number}>
            <p>BRANDLAR</p>
            <b>5</b>
          </div>
          <div className={classes.icon}>
            <Icon icon="tabler:brand-apple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

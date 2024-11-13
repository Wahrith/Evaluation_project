import styles from "./styles.module.scss";
import { Cloud, Alarm, Battery } from "../../assets";
import { Chrome, GitHub, Wifi, BarChart } from "react-feather";

export const NotificationBar = () => {
  return (
    <>
      <div className={`${styles.mobileIconContainer} container`}>
        <div className={styles.iconContent}>
          <p className={styles.values}>21:49</p>
          <GitHub />
          <Cloud />
          <Chrome />
          <p>...</p>
        </div>

        <div className={styles.iconContent}>
          <Alarm />
          <Wifi />
          <BarChart />
          <p className={styles.values}>35%</p>
          <Battery />
        </div>
      </div>
    </>
  );
};

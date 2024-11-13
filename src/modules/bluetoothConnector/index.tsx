import styles from "./styles.module.scss";
import { NotificationBar } from "../../components";
import { Home, Bell, Share2, Settings } from "react-feather";
import {
  bluetoothSearch,
  HalfFullBatery,
  //ArrowLeft,
  connectable,
} from "../../assets";
import AndroidNavigation from "../../components/androidNavigation";

const BluetoothConnector = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.bluetoothConnectorSection} container`}>
        <NotificationBar />
        <div className={styles.headerDiv}>
          <div className={styles.header}>
            {/* <ArrowLeft className={styles.arrowLeft} /> */}
            <h3>BT01191918898</h3>
          </div>
          <div className={styles.batteryDiv}>
            <HalfFullBatery />
            <p>88% August 7, 2020 2:55pm</p>
          </div>

          <div className={styles.pageCenter}>
            <div className={styles.imgDiv}>
            <img
              src={connectable}
              alt=""
              className={styles.bluetoothCircle}
            />
           
            </div>
          
            <img src={bluetoothSearch} alt="" className={styles.bluetoothSearch} />
            <p>Bluetooth</p>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <div className={styles.iconCircleHome}>
            <Home className={styles.homeIcon} size={40} />
          </div>
          <div className={styles.iconCircle}>
            <Bell className={styles.icon} size={40} />
          </div>
          <div className={styles.iconCircle}>
            <Share2 className={styles.icon} size={40} />
          </div>
          <div className={styles.iconCircle}>
            <Settings className={styles.icon} size={40} />
          </div>
        </div>
        </section>
        
        <AndroidNavigation />
      </main>
    </>
  );
};

export default BluetoothConnector;

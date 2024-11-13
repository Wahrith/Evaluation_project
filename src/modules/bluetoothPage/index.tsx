import styles from "./styles.module.scss";
import {
  bluetoothSearch,
  Member,
  Inbox,
  Face,
  bluetoothCircle,
} from "../../assets";
import { Bell, PlusCircle, Share2, Settings, Smartphone } from "react-feather";
import AndroidNavigation from "../../components/androidNavigation";
import { NotificationBar } from "../../components";

const BluetoothPage = () => {
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.bluetoothSection} container`}>
          <NotificationBar />
          <div className={`${styles.heading} container`}>
            <h3>My devices</h3>
            <PlusCircle className={styles.plusCircle} />
          </div>
          <div className={`${styles.heroSection} container`}>
            <img src={bluetoothCircle} alt="" className={styles.bluetooth} />

            <div className={styles.content}>
              <h3>BT01191918898</h3>
              <p>Connectable</p>
              <span className={styles.bluetoothContainer}>
                <img src={bluetoothSearch} alt="" />
                Bluetooth
              </span>
              <span className={styles.iconsContainer}>
                <Bell className={styles.iconColor} />
                <Share2 className={styles.iconColor} />
                <Settings className={styles.iconColor} />
              </span>
            </div>
          </div>

          <div className={`${styles.footer} container`}>
            <span className={styles.devices}>
              <Smartphone />
              Devices
            </span>

            <span>
              <Member />
              Member
            </span>

            <span>
              <Inbox className={styles.iconColor} />
              Inbox
            </span>

            <span>
              <Face />
              Me
            </span>
          </div>
        </section>

        <AndroidNavigation />
      </main>
    </>
  );
};

export default BluetoothPage;

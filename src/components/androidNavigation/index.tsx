import styles from "./styles.module.scss";
import { Menu, Square, ChevronLeft } from "react-feather";

const AndroidNavigation = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.androidNavigation}>
        <Menu className={styles.menu} />
        <Square className={styles.square} />
        <ChevronLeft className={styles.chevronleft} />
      </div>
    </footer>
  );
};

export default AndroidNavigation;

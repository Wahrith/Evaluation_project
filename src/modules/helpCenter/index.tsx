import styles from "./styles.module.scss";
import { ArrowLeft, ChevronRight } from "react-feather";
import { phoneQuestionMark, caution, phoneSettings, tools } from "../../assets";
import AndroidNavigation from "../../components/androidNavigation";
import { NotificationBar } from "../../components";

const HelpCenter = () => {
  return (
    <>
      <main className={styles.helpcenterSection}>
        <section className={`${styles.helpcenter} container`}>
          <NotificationBar />

          <div className={`${styles.header} container`}>
            <ArrowLeft className={styles.arrowLeft} />
            <h2>Help center</h2>
          </div>
          <div className={`${styles.mainContent} container`}>
            <div className={styles.blockItems}>
              <img
                src={phoneQuestionMark}
                alt=""
                className={styles.phoneSettingsImg}
              />
              <h3>App usage problem</h3>
              <ChevronRight className={styles.chevronRight} />
            </div>
            <div className={styles.line}></div>
            <div className={styles.blockItems}>
              <img
                src={phoneSettings}
                alt=""
                className={styles.phoneSettingsImg}
              />
              <h3>Features</h3>
              <ChevronRight className={styles.chevronRight} />
            </div>
            <div className={styles.line}></div>
            <div className={styles.blockItems}>
              <img src={tools} alt="" className={styles.phoneSettingsImg} />
              <h3>Lock Installation</h3>
              <ChevronRight className={styles.chevronRight} />
            </div>
            <div className={styles.line}></div>
            <div className={styles.blockItems}>
              <img src={caution} alt="" className={styles.phoneSettingsImg} />
              <h3>Normal trouble shooting</h3>
              <ChevronRight className={styles.chevronRight} />
            </div>
          </div>
        </section>
        <AndroidNavigation />
      </main>
    </>
  );
};

export default HelpCenter;

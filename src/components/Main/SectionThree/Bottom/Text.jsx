import React from "react";
import styles from "../SectionThree.module.css"
export default function Text(props) {
  return (
    <>
      <div className={styles.texe_bottom}>
        <p className={styles.harurTokos}>100% Organic Food</p>
        <p className={styles.weServed}>
          We served 100% organic, low process and delicious food. We allow our
          guest to have breakfast or dinner request.What ever made your taste
          buds happy.
        </p>
      </div>
    </>
  );
}

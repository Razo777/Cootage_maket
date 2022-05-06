import React from "react";
import styles from "./SectionFive.module.css"
export default function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <p className={styles.startJurney}>Start your journey!</p>
      <p className={styles.getMyRoomTitle}>How to Get My Room?</p>
      <p className={styles.getMyRoomText}>
        You can contact us by phone or email us. Easily tap the contact button
        below and it will take you to our contact point
      </p>
      <div className={styles.contactUs_btn}>
          <button className="btn">Contact Us</button>
          <p>Explore more room</p>
      </div>
    </div>
  );
}

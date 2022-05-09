import React from "react";
import styles from './SectionOne.module.css'
export default function Text() {
  return (
    <>
      <div style={{width:"50%"}} >
        <p className={styles.natureText}>Nature, Warmth, and Beauty in One Space</p>
        <p className={styles.onePlaceText}>
          One place to release all the stress, bring back happines, and get back
          to nature. We provide the best room and nature for you. Come visit us
          anytime you want.
        </p>
        <button className={styles.reservation}>Reservation</button>
      </div>
    </>
  );
}

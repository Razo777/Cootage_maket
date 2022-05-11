import React from "react";
import styles from "../SectionFour.module.css"

export default function Title() {
  return (
    <div className={styles.title_container}>
      <p className={styles.title_room}>Many Rooms to Choose</p>
      <p className={styles.about_room}>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
      <button className={styles.explore_more}>Explore more</button>
    </div>
  );
}

import React from "react";
import styles from "../Footer.module.css";
export default function Contact() {
  return (
    <div className={styles.Parts}>
      <p className={styles.ulTitles}>Contact</p>
      <ul>
        <li>
          <a href="#">Our Number</a>
        </li>
        <li>
          <a href="#">Our Email</a>
        </li>
        <li>
          <a href="#">Our Location</a>
        </li>
      </ul>
    </div>
  );
}

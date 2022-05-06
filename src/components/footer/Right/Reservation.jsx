import React from 'react'
import styles from "../Footer.module.css"
export default function Reservation() {
  return (
    <div className={styles.Parts}>
        <p className={styles.ulTitles}>Reservation</p>
        <ul>
            <li><a href='#'>See the Steps</a></li>
            <li><a href='#'>Best Time</a></li>
        </ul>
    </div>
  )
}

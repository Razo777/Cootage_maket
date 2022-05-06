import React from 'react'
import styles from "../Footer.module.css"
export default function RoomsPart() {
  return (
    <div className={styles.Parts}>
        <p className={styles.ulTitles}>Rooms</p>
        <ul>
            <li><a href='#'>Single Room</a></li>
            <li><a href='#'>Double Room</a></li>
            <li><a href='#'>Cabin</a></li>
            <li><a href='#'>Custom Room</a></li>
        </ul>
    </div>
  )
}

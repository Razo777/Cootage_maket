import React from 'react'
import Contact from './Contact'
import Reservation from './Reservation'
import RoomsPart from './RoomsPart'
import styles from "../Footer.module.css"
export default function Right() {
  return (
    <div className={styles.rightBlock}>
        <RoomsPart/>
        <Reservation/>
        <Contact/>
    </div>
  )
}

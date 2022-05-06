import React from 'react'
import SocialSites from './SocialSites'
import styles from "../Footer.module.css"
export default function Left() {
  return (
    <div className={styles.leftPart}>
        <p className={styles.title}>Cootels</p>
        <p className={styles.leftPartText}>Your Best Private Hideway From Crowd. Back to Nature.</p>
        <SocialSites/>
    </div>
  )
}

import React from 'react'
import { ImTwitter } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import styles from "../Footer.module.css"
export default function SocialSites() {
  return (
    <div className={styles.iconsBlock}>
        <ImTwitter/>
        <GrInstagram/>
        <FaFacebookF/>
    </div>
  )
}

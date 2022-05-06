import React from 'react'
import styles from "./Footer.module.css"
import Left from './Left'
import Right from './Right'
export default function Footer() {
  return (
    <footer>
        <section className={`${styles.footer_content} container`}>
            <Left/>
            <Right/>
        </section>
    </footer>
  )
}

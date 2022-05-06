import React from 'react'
import styles from './Header.module.css'
export default function Menu() {
    

    return (
        <>
            <ul className={styles.menu}>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </>
    )
}

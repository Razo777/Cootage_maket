import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import styles from './Header.module.css'
import GetStartedButton from './GetStartedButton';
export default function Header() {
    

    return (
        <>
          <header>
              <section  className={`${styles.header_content} container `}>
                <Logo/>
                <Menu/>
                <GetStartedButton/>
              </section>
          </header>
        </>
    )
}

import React from 'react'
import Accordion from './Accordion'
import ContactUs from './ContactUs'
import styles from './SectionFive.module.css'
export default function SectionFive() {
  return (
   <section>
       <div className={`${styles.sectionFive_content} container`}>
        <ContactUs/>
        <Accordion/>
       </div>
   </section>
  )
}

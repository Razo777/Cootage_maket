import React from 'react'
import Text from './Text'
import Photo from './Photo'
import styles from './SectionTwo.module.css'
export default function SectionTwo() {
    

    return (
        <section style={{padding:"80px 0px"}}>
            <div className={`${styles.sectionTwo_content} container`}>
                          <Photo/>
                          <Text/>
            </div>
        </section>
    )
}

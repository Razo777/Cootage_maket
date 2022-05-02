import React from 'react'
import Photo  from './Photo'
import Text from './Text'
import styles from "../SectionThree.module.css"
export default function Bottom(props) {
    

    return (
        <>
            <div className={styles.botom_content}>
                <Photo/>
                <Text/>

            </div>
        </>
    )
}

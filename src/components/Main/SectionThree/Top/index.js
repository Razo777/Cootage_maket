import React from 'react'
import Photo from "./Photo"
import Text from "./Text"
import styles from "../SectionThree.module.css"
export default function Top() {
    

    return (
        <>
            <div className={styles.top_content}>
                <Text/>
                <Photo/>              
            </div>
        </>
    )
}

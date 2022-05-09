import React from 'react'
import Text from './Text'
import Photo from './Photo'
import style from './SectionOne.module.css'
export default function SectionOne() {
    

    return (
        <>
            <section>
                <div className={`${style.sectionOne_content} container`}>
                    <Text/>
                    <Photo/>
                </div>
            </section>
        </>
    )
}

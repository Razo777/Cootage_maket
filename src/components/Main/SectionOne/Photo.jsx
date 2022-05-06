import React from 'react'
import style from './SectionOne.module.css'
export default function Photo() {
    

    return (
        <>
           <div className={style.photo}>
           <img src='partone.png' alt=''/>
           <img style={{marginTop:'85px'}} src='parttwo.png' alt=''/>
           <img src='parttree.png' alt=''/>
           </div>
        </>
    )
}

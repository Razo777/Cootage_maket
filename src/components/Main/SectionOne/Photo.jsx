import React from 'react'
import style from './SectionOne.module.css'
export default function Photo() {
    

    return (
        <>
           <div className={style.photo}>
           <img src='partone.png'/>
           <img style={{marginTop:'90px'}} src='parttwo.png'/>
           <img src='parttree.png'/>
           </div>
        </>
    )
}

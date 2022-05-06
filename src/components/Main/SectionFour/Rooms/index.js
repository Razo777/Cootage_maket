import React from 'react'
import styles from "../SectionFour.module.css"
import {BsArrowRight} from 'react-icons/bs';
export default function Rooms() {
    const rooms = [
        {
            title:"Single Room",
            text:"Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.",
            photo:"single.png",
           
        },
        {
            title:"Double Room",
            text:"Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two",
            photo:"double.png",
            
        },
        {
            title:"Cootage",
            text:"Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends",
            photo:"cootage.png",
          
        }
    ]
  return (
    <>
        <div className={styles.rooms}>
            {rooms.map((elem)=>(
                <div key={elem.id}>
                    <img src={elem.photo} alt=''/>
                    <p className={styles.rooms_title}>{elem.title}</p>
                    <p className={styles.rooms_txt}>{elem.text}</p>
                    <div className={styles.leranMoreDiv}>
                        <button className={styles.learn_more}>Learn more</button>
                        <BsArrowRight/>
                    </div>
                    
                </div>
            ))}
        </div>
    </>
  )
}

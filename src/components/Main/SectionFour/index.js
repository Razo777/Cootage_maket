import React from 'react'
import Title from './ChoseRooms/Title'
import Rooms from './Rooms'

export default function SectionFour() {
    

    return (
       <section style={{ padding: "80px 0px" }}>
           <div className='container'>
                <Title/>
                <Rooms/>
           </div>
       </section>
    )
}

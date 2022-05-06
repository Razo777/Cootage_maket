import React, { useEffect, useState, useMemo } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import styles from "./SectionFive.module.css";

const arr = [
  {
    title: "1. Choose a room and date",
    text: "Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.",
    id: 1,
    bool: false,
  },
  {
    title: "2. Check for room availability",
    text: "Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.",
    id: 2,
    bool: false,
  },
  {
    title: "3. Enjoy your room",
    text: "Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.",
    id: 3,
    bool: false,
  },
];

export default function Accordion() {
  const [id, setId] = useState();
  const [stugum, setStugum] = useState();
  const [arrId, setArrId] = useState([])
  console.log(arr);


  
  return (
    <>
      <div className={styles.accardionDiv}>
        {arr.map((elem) => (
          <>
            <div className={`${styles.accordions} `}>
              <p className={styles.accordionsTitle}>{elem.title}</p>
              {elem.bool?< IoIosArrowUp
                className={styles.arrowIconUp}
                onClick={() => {
                  setId(elem.id);
                  setStugum(!elem.bool);
                }}
              />:<IoIosArrowDown
              className={styles.arrowIcon}
              onClick={() => {
                setId(elem.id);
                setStugum(!elem.bool);
              }}
            />}
              
              {elem.id === id ? (elem.bool = stugum) : null}
            </div>
            {elem.bool?<p className={styles.accardionsText}>{elem.text}</p> : null}
          </>
        ))}
      </div>




      
    </>
  );
}

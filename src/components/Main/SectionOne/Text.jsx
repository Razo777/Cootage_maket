import React from "react";
import style from './SectionOne.module.css'
export default function Text(props) {
  return (
    <>
      <div >
        <p className={style.natureText}>Nature, Warmth, and Beauty in One Space</p>
        <p className={style.onePlaceText}>
          One place to release all the stress, bring back happines, and get back
          to nature. We provide the best room and nature for you. Come visit us
          anytime you want.
        </p>
        <button className="btn">Reservation</button>
      </div>
    </>
  );
}

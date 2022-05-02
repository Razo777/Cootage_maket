import React from "react";
import styles from "./SectionTwo.module.css";
export default function Text() {
  return (
    <>
      <div>
        <p className={styles.cozy}>
          Cozy and Down to Earth Cootage Hotel in Norway.
        </p>
        <p className={styles.ourCootage}>
          Our Cootage Hotel is an intimate hideway concieved for dicerning
          travelers. It faces directly the unique and spectacular panorama of
          the Hallerbos Jungle.
        </p>
        <p className={styles.cootlesExtends}>
          Cootels extends along a private, quiet, and beautiful nature. Stay
          away from crowd and enjoy the cozy and beauty with us.
        </p>
        <button className='btn'>Learn More</button>
      </div>
    </>
  );
}

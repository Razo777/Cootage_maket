import React from "react"
import Bottom from "./Bottom";
import styles from "./SectionThree.module.css";
import Top from "./Top";
export default function SectionThree() {
  return (
    <section style={{ padding: "80px 0px" }}>
      <div className={`${styles.sectionThree_content} container`}>
       <Top/>
       <Bottom/>
      </div>
    </section>
  );
}

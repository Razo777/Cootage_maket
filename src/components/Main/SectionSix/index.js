import React from "react";
import Slider from "react-slick";
import styles from "./SectionSix.module.css";
import { GoPrimitiveDot } from "react-icons/go";

export default function SectionSix() {
  const arr = [
    {
      photo: "sliderGirl.png",
      text: "“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”",
      name: "Kirana Dunham",
    },
    {
      photo: "sliderGirl.png",
      text: "“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”",
      name: "Kirana Dunham",
    },
    {
      photo: "sliderGirl.png",
      text: "“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”",
      name: "Kirana Dunham",
    },
    {
      photo: "sliderGirl.png",
      text: "“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”",
      name: "Kirana Dunham",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    indicators: true,
    customPaging: function (slider, i) {
      return <GoPrimitiveDot/>;
    },
  };
  return (
    <section>
      
        <div className={styles.customers}>
          <p className={styles.title}>Hear From Our Happy Customers</p>
          <div>
            <Slider {...settings}>
              {arr.map((i) => (
                <>
                  <img src={i.photo} alt="" />
                  <p className={styles.customersText}>{i.text}</p>
                  <p className={styles.customersName}>{i.name}</p>
                </>
              ))}
            </Slider>
          </div>
        </div>
    
    </section>
  );
}

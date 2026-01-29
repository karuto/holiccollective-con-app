import React from "react";
import styles from "./Art.css";
import art1 from "../../assets/art/art-1.png";
import art2 from "../../assets/art/art-2.png";
import art3 from "../../assets/art/art-3.png";
import art4 from "../../assets/art/art-4.png";
import art5 from "../../assets/art/art-5.png";
import Heading from "../Heading/Heading";

const artImages = [art1, art2, art3, art4, art5];

function Art() {
  return (
    <section className={styles.art}>
      <Heading subtitle="Honkai: Star Rail & Genshin Impact" title="Art Showcase" />
      <div className={styles.art__grid}>
        {artImages.map((img, index) => (
          <figure key={index} className={`${styles.art__item} ${styles.art__item_full}`}>
            <img
              src={`dist/${img}`}
              alt="Art showcase"
              className={styles.art__image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Art;

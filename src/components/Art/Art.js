import React from "react";
import styles from "./Art.css";
import art1 from "../../assets/art/art-1.png";
import art2 from "../../assets/art/art-2.png";
import art3 from "../../assets/art/art-3.png";
import art4 from "../../assets/art/art-4.png";
import Heading from "../Heading/Heading";

function Art() {
  const content = {
    images: [
      {
        src: art1,
        alt: "Art showcase",
        isFullWidth: true,
      },
      {
        src: art2,
        alt: "Art showcase",
        isFullWidth: true,
      },
      {
        src: art3,
        alt: "Art showcase",
        isFullWidth: true,
      },
      {
        src: art4,
        alt: "Art showcase",
        isFullWidth: true,
      },
    ],
  };

  return (
    <section className={styles.art}>
      <Heading subtitle="Honkai: Star Rail & Genshin Impact" title="Art Showcase" />
      <div className={styles.art__grid}>
        {content.images.map((image, index) => (
          <figure
            key={index}
            className={`${styles.art__item} ${
              image.isFullWidth
                ? styles.art__item_full
                : styles.art__item_half
            }`}
          >
            <img
              src={`dist/${image.src}`}
              alt={image.alt}
              className={styles.art__image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Art;

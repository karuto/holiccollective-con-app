import React from "react";
import styles from "./Booth.css";
import boothAla1 from "../../assets/booth/booth-ala-1.jpg";
import boothAla2 from "../../assets/booth/booth-ala-2.jpg";
import boothSmall from "../../assets/booth/booth-small.jpg";
import Heading from "../Heading/Heading";

function Booth() {
  const content = {
    images: [
      {
        src: boothAla1,
        alt: "10'x10' corner setup at Anime Los Angeles 2026",
        caption: "10'x10' corner setup at Anime Los Angeles 2026",
        isFullWidth: true,
      },
      {
        src: boothAla2,
        alt: "10'x10' corner setup at Anime Los Angeles 2026",
        caption: "10'x10' corner setup at Anime Los Angeles 2026",
        isFullWidth: false,
      },
      {
        src: boothSmall,
        alt: "8' table setup at local convention",
        caption: "8' table setup at local convention",
        isFullWidth: false,
      },
    ],
  };

  return (
    <section className={styles.booth}>
      <Heading subtitle="Recent conventions" title="booth setup" />
      <div className={styles.booth__grid}>
        {content.images.map((image, index) => (
          <figure
            key={index}
            className={`${styles.booth__item} ${
              image.isFullWidth
                ? styles.booth__item_full
                : styles.booth__item_half
            }`}
          >
            <img
              src={`dist/${image.src}`}
              alt={image.alt}
              className={styles.booth__image}
            />
            <figcaption className={styles.booth__caption}>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Booth;

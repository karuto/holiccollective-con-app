import React from "react";
import styles from "./Products.css";
import Heading from "../Heading/Heading";
import img1 from "../../assets/products/hc-0r.png";
import img2 from "../../assets/products/hc-1w.png";
import img3 from "../../assets/products/hc-2g.png";
import img4 from "../../assets/products/hc-3d.png";
import img5 from "../../assets/products/hc-4h.png";

const productImages = [img1, img2, img3, img4, img5];

function Products() {
  const content = {
    description: `Unlike most artist alleys, I have no stickers and very few prints at my booth.

      I love making acrylics with obscure tech such as liquid acrylics, UV light absorbent acrylics, backlit acrylics, rotational acrylics, chest acrylics, dress up acrylics... and my acrylics are huge (10"+ in size)!

      For the very few prints I have, I always mix in some creative tech, such as water sensitivity for fun.

      Crowds at Fanime, AX, and ALA always go crazy whenever I demo my merch effects at the booth! My target audience is female, 18–25 years old, with an average transaction size of $50+ (very rare in Artist Alley).

      I design and make all the merch myself — NOT a reseller! And absolutely no AI.`,
  };

  return (
    <section className={styles.products}>
      <Heading subtitle="Creations" title="What I make" />
      <h3 className={styles.products__description}>
        {content.description.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line.trim()}
            <br />
          </React.Fragment>
        ))}
      </h3>
      <div className={styles.products__grid}>
        {productImages.map((img, idx) => (
          <img
            key={idx}
            src={`dist/${img}`}
            alt="Product photo"
            className={styles.product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;

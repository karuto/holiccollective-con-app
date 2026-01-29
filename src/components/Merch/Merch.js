import React from "react";
import styles from "./Merch.css";
import Heading from "../Heading/Heading";
import merch1 from "../../assets/merch/merch-1-mydei.png";
import merch2Anaxa from "../../assets/merch/merch-2-anaxa.png";
import merch2Phainon1 from "../../assets/merch/merch-2-phainon-1.png";
import merch2Phainon2 from "../../assets/merch/merch-2-phainon-2.png";
import merch3Sunday1 from "../../assets/merch/merch-3-sunday-1.png";
import merch3Sunday2 from "../../assets/merch/merch-3-sunday-2.png";
import merch4no1 from "../../assets/merch/merch-4-1.png";
import merch4no2 from "../../assets/merch/merch-4-2.png";
import merch5no1 from "../../assets/merch/merch-5-1.png";
import merch5no2 from "../../assets/merch/merch-5-2.png";
import merchAl1 from "../../assets/merch/merch-al-1.png";
import merchAl2 from "../../assets/merch/merch-al-2.png";

const merchImages = [
  merch1,
  merch2Anaxa,
  merch2Phainon1,
  merch2Phainon2,
  merch3Sunday1,
  merch3Sunday2,
  merchAl1,
  merchAl2,
  merch4no1,
  merch4no2,
  merch5no1,
  merch5no2,
];

function Merch() {
  return (
    <section className={styles.merch}>
      <Heading subtitle="No reselling & no AI" title="Merch showcase" />
      <div className={styles.merch__grid}>
        {merchImages.map((img, index) => (
          <figure key={index} className={styles.merch__item}>
            <img
              src={`dist/${img}`}
              alt="Merch showcase"
              className={styles.merch__image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Merch;

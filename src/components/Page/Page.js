import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Team from "../Team/Team";
import Booth from "../Booth/Booth";
import Products from "../Products/Products";
import Carousel from "../Carousel/Carousel";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves better than a plain sticker, and so do you",
    description:
      "Hi! My name is Yao and I am a Sacramento-based specialty acrylic standee maker in the Hoyo & LADS fandom. Your husbando deserves better than a plain sticker, and so do you 🤘",
  };
  const disclaimer =
    "Holic Collective is a small, non-commercial passion project run by Yao. Please reach out to hi@holiccollective.com if you have any questions!";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles["heading"]}>{content.headingGlobal}</h1>
        <h3 className={styles["subheading"]}>{content.description}</h3>
        <div className={styles.headers__content}>
          <Carousel />
        </div>
      </header>
      <div className={styles.content}>
        {/* <Team /> */}
        <Products />
        <Booth />
        <div className={styles.disclaimerSection}>
          <p className={styles.disclaimerText}>{disclaimer}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;

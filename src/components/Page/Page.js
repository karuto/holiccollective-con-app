import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Art from "../Art/Art";
import Booth from "../Booth/Booth";
import Merch from "../Merch/Merch";
import Carousel from "../Carousel/Carousel";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves better than a plain sticker, and so do you",
    description:
      "Hi! I'm Karuto, a California-based artist & specialty acrylic standee maker. Your husbando deserves better than a plain sticker, and so do you 🤘",
  };
  const disclaimer =
    "Holic Collective is a small, non-commercial passion project run by Karuto. Please reach out to hi@holiccollective.com if you have any questions!";

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
        <Art />
        <Merch />
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

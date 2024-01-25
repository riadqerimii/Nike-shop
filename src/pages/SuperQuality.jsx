import { shoe8 } from "../assets/constants/images";
import styles from "./quality.module.css";

function SuperQuality() {
  return (
    <section className={styles.grid}>
      <div className={styles.flex}>
        <h1 className={styles.text}>
          We Provide You
          <span className={styles.span}>Super Quality</span>
          Shoes
        </h1>
        <p>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p>Our dedication to detail and excellence ensures your satisfaction</p>
        <button className={styles.btn}>View Details</button>
      </div>
      <img className={styles.img} src={shoe8} alt="some shoes" />
    </section>
  );
}

export default SuperQuality;

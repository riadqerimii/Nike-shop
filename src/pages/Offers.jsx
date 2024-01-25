import { offer } from "../assets/constants/images";
import styles from "./offers.module.css";
import arrowRight from "../assets/constants/icons/arrow-right.svg";

function Offers() {
  return (
    <div className={styles.grid}>
      <img className={styles.img} src={offer} alt="offer" />
      <div className={styles.text}>
        <h2 className={styles.h2}>
          <span className={styles.special}>Special</span>
          Offer
        </h2>
        <p className={styles.info}>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className={styles.info}>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className={styles.flex}>
          <button className={styles.btn}>
            Shop Now
            <img className={styles.btn_img} src={arrowRight} alt="arrow" />
          </button>
          <button className={styles.buttons}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Offers;

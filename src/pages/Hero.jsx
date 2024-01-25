import styles from "./home.module.css";
import bigShoe from "../assets/constants/images/big-shoe1.png";
import arrowRight from "../assets/constants/icons/arrow-right.svg";
import { statistics } from "../constants";
import { shoes } from "../constants";
import bg from "../assets/constants/images/collection-background.svg";
import bg2 from "../assets/constants/images/thumbnail-background.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [image, setImage] = useState(bigShoe);
  return (
    <section className={styles.grid}>
      <div className={styles.flex}>
        <p className={styles.paragraph}>Our Summer collections </p>
        <h1 className={styles.header}>
          <span className={styles.arrival}>The New Arrival</span>
          <br /> <span className={styles.nike}>Nike</span> Shoes
        </h1>
        <p className={styles.text}>
          Discover stylish Nike arrivals, quality <br />
          comfort, and innovation for your active life.
        </p>
        <button className={styles.shop}>
          <Link to="/product">Shop Now</Link>
          <img src={arrowRight} alt="arrow" />
        </button>
        <div className={styles.value}>
          {statistics.map((item) => (
            <div key={item.value}>
              <p className={styles.values}>{item.value}</p>
              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.shoe} style={{ backgroundImage: `url(${bg})` }}>
        <img className={styles.imgImg} src={image} alt="image" />
        <div className={styles.img}>
          {shoes.map((im, index) => (
            <img
              onClick={() => {
                setImage(im.bigShoe);
              }}
              key={index}
              className={styles.images}
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
              }}
              src={im.bigShoe}
              alt={im.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

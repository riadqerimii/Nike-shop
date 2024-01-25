import { reviews } from "../constants";
import styles from "./customers.module.css";
import iconStar from "../assets/constants/icons/star.svg";

function Customers() {
  return (
    <div className={styles.max_container}>
      <h1 className={styles.text}>
        What Our
        <span className={styles.span}>Customers</span>
        Say?
      </h1>
      <p className={styles.p}>
        Hear genuine stories from our satisfied customers about
        <br />
        their exceptional experiences with us.
      </p>
      <div className={styles.grid}>
        {reviews.map((card) => (
          <div className={styles.cards} key={card.imgURL}>
            <img
              className={styles.customers}
              src={card.imgURL}
              alt={card.customerName}
            />
            <div className={styles.div}>
              <p className={styles.info}>{card.feedback}</p>
              <span className={styles.rating}>
                ({card.rating})
                <img className={styles.superstar} src={iconStar} alt="Star" />
              </span>
              <h2 className={styles.name}>{card.customerName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;

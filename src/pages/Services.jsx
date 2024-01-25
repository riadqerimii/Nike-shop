import { services } from "../constants";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      {services.map((item) => (
        <div className={styles.cards} key={item.imgURL}>
          <img className={styles.img} src={item.imgURL} alt={item.label} />
          <h1 className={styles.h1}>{item.label}</h1>
          <p className={styles.subtext}>{item.subtext}</p>
        </div>
      ))}
    </div>
  );
}
export default Services;

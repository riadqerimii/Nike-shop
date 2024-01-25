// import styles from "./popular.module.css";
import styles from "./popular.module.css";
import { products } from "../constants/index";
import Card from "../assets/components/Card";
function PopularProduction() {
  return (
    <div className={styles.padding}>
      <div>
        <h1 className={styles.text}>
          Our
          <span className={styles.span}>Popular</span>
          Products
        </h1>
        <br />
        <span className={styles.my_text}>
          Experience top-notch quality and style with our sought-after <br />{" "}
          selections. Discover a world of comfort, design, and value
        </span>
      </div>
      <div className={styles.grid_img}>
        {products.map((items) => (
          <Card styles={styles} item={items} key={items.name} />
        ))}
      </div>
    </div>
  );
}

export default PopularProduction;

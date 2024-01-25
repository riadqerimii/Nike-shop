import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import iconStar from "../constants/icons/star.svg";

function Card({ item, styles }) {
  return (
    <div className={styles.card}>
      <Link to={`/product/${item.id}`}>
        <img className={styles.img} src={item.imgURL} alt={item.name} />
        <div>
          <div className={styles.titles}>
            <img src={iconStar} alt="star" />
            <img src={iconStar} alt="star" />
            <img src={iconStar} alt="star" />
            <img src={iconStar} alt="star" />
            <span>(4.5)</span>
          </div>
          <h1 className={styles.name}>{item.name}</h1>
          <p className={styles.price}>{item.price}</p>
        </div>
      </Link>
    </div>
  );
}
Card.propTypes = {
  item: PropTypes.object,
  styles: PropTypes.object,
};
export default Card;

import styles from "./product.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../constants";
import { shoes } from "../../constants";
import bg2 from "../../assets/constants/images/thumbnail-background.svg";
import { toast } from "react-toastify";

function ProductId() {
  const { id } = useParams();

  const selectedProduct = products.find((item) => item.id === +id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  function buttonOn() {
    toast.info("I'm working on it. Please try again another day.");
  }

  return (
    <div className={styles.padding}>
      <div className={styles.product}>
        <img
          className={styles.img}
          src={selectedProduct.imgURL}
          alt={selectedProduct.name}
          key={selectedProduct.id}
        />
        <div className={styles.text}>
          <h1>{selectedProduct.name}</h1>
          <h2> {selectedProduct.price}</h2>
          <div className={styles.shoes}>
            {shoes.map((item) => (
              <img
                className={styles.map}
                style={{
                  backgroundImage: `url(${bg2})`,
                  backgroundSize: "cover",
                }}
                key={item.thumbnail}
                src={item.thumbnail}
              />
            ))}
          </div>
          <button onClick={buttonOn} className={styles.btn}>
            Buy now
          </button>
        </div>
        <div className={styles.inputs}>
          <label>Color: </label>
          <select className={styles.style} id="color">
            <option></option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <label>Number: </label>
          <select className={styles.style} id="color">
            <option></option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductId;

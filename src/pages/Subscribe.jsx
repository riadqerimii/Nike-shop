import styles from "./subscribe.module.css";

function Subscribe() {
  return (
    <div className={styles.flex}>
      <h1 className={styles.text}>
        Sign Up for <span className={styles.color}> Updates </span> & Newsletter
      </h1>
      <div className={styles.input}>
        <input
          className={styles.my}
          type="text"
          placeholder="subscribe@nike.com"
        />
        <button className={styles.btn}>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;

import styles from "./footer.module.css";
import logo from "../assets/constants/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants/index";
function Footer() {
  return (
    <>
      <div className={styles.max_container}>
        <div className={styles.flex}>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.par}>
            Get shoes ready for the new term at your nearest Nike store. <br />{" "}
            Find Your perfect Size In Store. Get Rewards
          </p>
          <div className={styles.content}>
            {socialMedia.map((images, index) => (
              <img
                key={index}
                className={styles.social}
                src={images.src}
                alt="social"
              />
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          {footerLinks.map((footer) => (
            <div className={styles.titles} key={footer.title}>
              <h1>{footer.title}</h1>
              <ul>
                {footer.links.map((li) => (
                  <li className={styles.links} key={li.name}>
                    {li.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.end}>
        <span>&copy;2021 NIKE Inc. All rights reserved</span>
        <h1 className={styles.terms}>Terms & Conditions</h1>
      </div>
    </>
  );
}

export default Footer;

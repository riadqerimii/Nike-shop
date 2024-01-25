import { Link } from "react-router-dom";
import logo from "../assets/constants/images/header-logo.svg";
import "./nav.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [nav, setNav] = useState("nav-links");

  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY > 365);
    };

    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const clickNav = () => {
    setNav((prev) =>
      prev === "nav-links" ? "nav-links nav-active" : "nav-links"
    );
  };

  const closeNav = () => {
    setNav("nav-links");
  };

  return (
    <header className={fix ? "sticky header  " : "header"}>
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={nav}>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <Link to="/product" onClick={closeNav}>
          Products
        </Link>
      </nav>
      <div onClick={clickNav} className="toggler">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Navbar;

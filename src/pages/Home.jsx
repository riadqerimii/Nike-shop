import Footer from "./Footer";
import Customers from "./Customers";
import Hero from "./Hero";
import Offers from "./Offers";
import PopularProduction from "./PopularProduction";
import Services from "./Services";
import Subscribe from "./Subscribe";
import SuperQuality from "./SuperQuality";

function Home() {
  return (
    <section>
      <Hero />
      <section className="padding max-container2">
        <PopularProduction />
      </section>
      <article className="padding  max-container">
        <SuperQuality />
      </article>
      <section className="padding  max-container">
        <Services />
      </section>
      <section className="padding max-container">
        <Offers />
      </section>
      <section className="bg">
        <Customers />
      </section>
      <section className="max-container">
        <Subscribe />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
    </section>
  );
}

export default Home;

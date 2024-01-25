import { products } from "../../constants";
import "./tabs.css";

function TabTwo() {
  return (
    <div className="gap">
      {products.map((item) => (
        <div key={item.id}>
          <div className="center">
            <img className="img_product" src={item.imgURL} />
            <h1 className="price-pr">{item.price}</h1>
            <h2 className="price-name">{item.name}</h2>
          </div>
          <div key={item.id} className="center">
            <img className="img_product" src={item.imgURL} />
            <h1 className="price-pr">{item.price}</h1>
            <h2 className="price-name">{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TabTwo;

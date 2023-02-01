import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fbt.css";

export default function Fbt() {
  return (
    <div className="fbt">
      <div className="fbtContainer">
        <h1>Frequently Bought Together</h1>
        <div className="fbtProducts">
          <div className="fbtProduct">
            <img className="fbtImages" src="https://i.imgur.com/OP15uZ0.jpg" />
            <div className="fbtImageInfo">
              <span className="fbtPrice">$199</span>
              <span className="fbtProductTitle">Moon Lamp</span>
            </div>
            <button className="fbtButton">Add to cart</button>
          </div>
          <FontAwesomeIcon className="fbtIcon" icon={faPlus} />
          <div className="fbtProduct">
            <img className="fbtImages" src="https://i.imgur.com/04kNFTK.jpg" />
            <div className="fbtImageInfo">
              <span className="fbtPrice">$199</span>
              <span className="fbtProductTitle">Enchanted Vines</span>
            </div>
            <button className="fbtButton">Add to cart</button>
          </div>
          <FontAwesomeIcon className="fbtIcon" icon={faPlus} />
          <div className="fbtProduct">
            <img className="fbtImages" src="https://i.imgur.com/ON3uJ4O.jpg" />
            <div className="fbtImageInfo">
              <span className="fbtPrice">$199</span>
              <span className="fbtProductTitle">Light Tree</span>
            </div>
            <button className="fbtButton">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./qualities.css";
import {
  faShippingFast,
  faBoxHeart,
  faBox,
  faMoneyBill1Wave,
  faMoneyBill,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function Qualities() {
  return (
    <div className="qualities">
      <div className="qualitiesContainer">
        <div className="quality">
          <FontAwesomeIcon className="qualitiesIcon" icon={faShippingFast} />
          <h2>Free Delivery</h2>
          <p>
            Our gift to you - enjoy free shipping to continental USA, Canada &
            30+ countries on orders over $999.
          </p>
        </div>
        <div className="quality">
          <FontAwesomeIcon className="qualitiesIcon" icon={faBox} />
          <h2>Fast Shipping</h2>
          <p>
            We can’t wait, and neither should you - typically receive your
            shipment within 3-10 business days.
          </p>
        </div>
        <div className="quality">
          <FontAwesomeIcon className="qualitiesIcon" icon={faMoneyBill} />
          <h2>0% Interest</h2>
          <p>
            Don’t put your dreams on hold - order today and pay over time with
            Affirm™️ interest-free.
          </p>
        </div>
        <div className="quality">
          <FontAwesomeIcon className="qualitiesIcon" icon={faLeaf} />
          <h2>Eco-friendly Furniture</h2>
          <p>
            Rest easy knowing that each Transformer Table is made sustainably
            with FSC-certified solid wood.
          </p>
        </div>
      </div>
    </div>
  );
}

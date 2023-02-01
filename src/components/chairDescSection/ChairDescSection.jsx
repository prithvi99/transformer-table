import "./chairDescSection.css";
import { useState } from "react";
import data from "../../chairsData.json";
import { useDispatch, useSelector } from "react-redux";
import { selectType } from "../../features/selectProduct/selectProductSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faThunderstorm,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { addToCart, changeQuantity } from "../../features/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChairDescSection() {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.updateImage.value);
  // const quantity = useSelector((state) => state.userCart.qantity);
  const cartItemQuantity = useDispatch(
    (state) => state.userCart.cartItems.quantity
  );

  const [productType, setProductType] = useState(data[0]);
  const [prodQuantity, setQuantity] = useState(2);

  function changeType(i) {
    setProductType(data[i]);
  }
  function handleUpdate(ind) {
    // e.preventDefault();
    dispatch(selectType(ind));
  }

  function handleAddToCart() {
    dispatch(
      addToCart({
        singleProduct: [
          { productInfo: data[currentProduct] },
          { quantity: prodQuantity },
        ],
      })
    );

    // dispatch(addtoCart(data[currentProduct]))
    // dispatch(changeQuantity(quantity));
  }
  const notify = () => {
    toast.success("Added to Cart!", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };
  function handleSelectChange(event) {
    // const amount = event.target.value;

    setQuantity(event.target.value);
  }
  console.log(prodQuantity);
  return (
    <div className="chairDescription">
      <h2>Transformer Chairs</h2>
      <p>
        Stackable Transformer Chair designed with lumbar support &
        comfortability. Chairs are sold and shipped in pairs. Price is shown per
        chair.
      </p>
      <h3>$245 CAD</h3>
      <select
        value={prodQuantity}
        onChange={(e) => handleSelectChange(e)}
        className="selector"
        name="quantity"
        id="quantity"
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </select>
      <span>{productType.value}</span>
      <div className="selectChairType">
        {data.map((val, index) => {
          return (
            <div key={val.id}>
              <button
                className="chairType"
                style={{
                  backgroundColor: `${val.color}`,
                  border: `${
                    productType.id === index ? `3px solid #cf4545` : "none"
                  }`,
                }}
                onClick={() => {
                  changeType(index);
                  handleUpdate(index);
                  // handleAddToCart(val);
                }}
              >
                {/* {val.value} */}
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          handleAddToCart();
          notify();
        }}
        className="atcButton"
      >
        Add to cart
      </button>
      <ToastContainer />
      <div className="shipping">
        <span>
          <FontAwesomeIcon className="shippingIcon" icon={faTruckFast} />
          Free shipping to Toronto
        </span>
        <span>
          <FontAwesomeIcon className="shippingIcon" icon={faBolt} />
          Fast shipping
        </span>
      </div>
    </div>
  );
}

// import "./chairDescSection.css";
// import { useState } from "react";
// import data from "../../chairsData.json";
// import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

// export default function ChairDescSection() {
//   const allowedState = [
//     { id: 0, value: "American Mahogany", color: "#774319" },
//     {
//       id: 1,
//       value: "Siberian Birch",
//       color: "#727675",
//     },
//     {
//       id: 2,
//       value: "Canadian Dark Oak",
//       color: "#2A2B2F",
//     },
//     {
//       id: 3,
//       value: "Australian Acacia",
//       color: "#FCD699",
//     },
//     {
//       id: 4,
//       value: "Farmhouse White",
//       color: "#D4D0CD",
//     },
//   ];

//   const [productType, setProductType] = useState(allowedState[0]);

//   function changeType(id) {
//     setProductType(allowedState[id]);
//   }
//   return (
//     <div className="chairDescription">
//       <h2>Transformer Chairs</h2>
//       <p>
//         Stackable Transformer Chair designed with lumbar support &
//         comfortability. Chairs are sold and shipped in pairs. Price is shown per
//         chair.
//       </p>
//       <h3>$245 CAD</h3>
//       <select className="selector" name="quantity" id="quantity">
//         <option value="2">2</option>
//         <option value="4">4</option>
//         <option value="6">6</option>
//         <option value="8">8</option>
//         <option value="10">10</option>
//       </select>
//       <span>{productType.value}</span>
//       <div className="selectChairType">
//         {allowedState.map((val, i) => {
//           return (
//             <div key={val.id}>
//               <button
//                 className="chairType"
//                 style={{ backgroundColor: `${val.color}` }}
//                 onClick={() => {
//                   changeType(i);
//                 }}
//               >
//                 {/* {val.value} */}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

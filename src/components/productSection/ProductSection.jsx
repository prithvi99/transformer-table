import {
  faClock,
  faShippingFast,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productSection.css";
import data from "../../homePageShowcaseData.json";
import { useNavigate } from "react-router-dom";

export default function ProductSection(props) {
  const navigate = useNavigate();
  return (
    <div className="section">
      <div className="sectionContainer">
        <div
          className="topProductSection"
          style={{
            backgroundColor: `${props.product.bgColor}`,
            color: `${props.product.fontColor}`,
          }}
        >
          <div className="leftProductSection">
            <div
              className="h2ProductSection"
              style={{ color: `${props.product.fontColor}` }}
            >
              {" "}
              <span className="diffColor">
                New
                <br />
              </span>{" "}
              {data[props.product.productIndex].topProducts.productName}
            </div>
            <p style={{ color: `${props.product.fontColor}` }}>
              {data[props.product.productIndex].topProducts.productDescription}
            </p>
            <h2>{data[props.product.productIndex].topProducts.productPrice}</h2>
            <div className="iconsProductSection">
              <div className="iconProductSectionDesc">
                <FontAwesomeIcon
                  className="iconProductSection"
                  icon={faTruck}
                />
                <p>
                  Free <br />
                  Shipping
                </p>
              </div>
              <div className="iconProductSectionDesc">
                <FontAwesomeIcon
                  className="iconProductSection"
                  icon={faClock}
                />
                <p>
                  Limited <br />
                  Stock
                </p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => navigate("/transformer-table/product")}>
                Learn more
              </button>
              <p>Order now +</p>
            </div>
          </div>
          <div className="rightProductSection">
            <div className="rightImgText">
              <p>Shop the sale</p>
              <span className="redBg">
                {" "}
                <strong> New Year Sale</strong>
              </span>
            </div>
            <img
              className="chairsBanner"
              src={data[props.product.productIndex].topProducts.productBanner}
            />
          </div>
        </div>
        <div className="bottomProductSection">
          {data[props.product.productIndex].bottomProducts.map(
            (item, index) => {
              return (
                <div className="bottomImages">
                  <div className="imgContainer">
                    <img className="bottomImg" src={item.src} />
                  </div>
                  <div className="description">
                    <h2>{item.productH2}</h2>
                    <p style={{ fontSize: "16px" }}>{item.productDesc}</p>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#cf4545",
                      }}
                    >
                      Learn more +
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

// import {
//   faClock,
//   faShippingFast,
//   faTruck,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./productSection.css";
// import { useNavigate } from "react-router-dom";

// export default function ProductSection() {
//   return (
//     <div className="section">
//       <div className="sectionContainer">
//         <div className="topProductSection">
//           <div className="leftProductSection">
//             <div className="h2ProductSection">
//               {" "}
//               <span className="diffColor">
//                 New
//                 <br />
//               </span>{" "}
//               Transformer Chairs
//             </div>
//             <p>
//               Our long-awaited stackable chairs are here! Designed to perfectly
//               match our Transformer Table, these are ideal to complete your set.
//             </p>
//             <h2>$245 CAD</h2>
//             <div className="iconsProductSection">
//               <div className="iconProductSectionDesc">
//                 <FontAwesomeIcon
//                   className="iconProductSection"
//                   icon={faTruck}
//                 />
//                 <p>
//                   Free <br />
//                   Shipping
//                 </p>
//               </div>
//               <div className="iconProductSectionDesc">
//                 <FontAwesomeIcon
//                   className="iconProductSection"
//                   icon={faClock}
//                 />
//                 <p>
//                   Limited <br />
//                   Stock
//                 </p>
//               </div>
//             </div>
//             <div className="buttons">
//               <button>Learn more</button>
//               <p>Order now +</p>
//             </div>
//           </div>
//           <div className="rightProductSection">
//             <div className="rightImgText">
//               <p>Shop the sale</p>
//               <span className="redBg">
//                 {" "}
//                 <strong> New Year Sale</strong>
//               </span>
//             </div>
//             <img className="chairsBanner" src="../../assets/chairsBanner.png" />
//           </div>
//         </div>

//         <div className="bottomProductSection">
//           <div className="bottomImages">
//             <div className="imgContainer">
//               <img className="bottomImg" src="../../assets/chairs1.jpeg" />
//             </div>
//             <div className="description">
//               <h2>Stackability</h2>
//               <p style={{ fontSize: "16px" }}>Store them away effortlessly.</p>
//               <p
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#cf4545",
//                 }}
//               >
//                 Learn more +
//               </p>
//             </div>
//           </div>

//           <div className="bottomImages">
//             <div className="imgContainer">
//               <img className="bottomImg" src="../../assets/chairs2.jpeg" />
//             </div>
//             <div className="description">
//               <h2>Stackability</h2>
//               <p style={{ fontSize: "16px" }}>Store them away effortlessly.</p>
//               <p
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#cf4545",
//                 }}
//               >
//                 Learn more +
//               </p>
//             </div>
//           </div>

//           <div className="bottomImages">
//             <div className="imgContainer">
//               <img className="bottomImg" src="../../assets/chairs3.jpeg" />
//             </div>
//             <div className="description">
//               <h2>Stackability</h2>
//               <p style={{ fontSize: "16px" }}>Store them away effortlessly.</p>
//               <p
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#cf4545",
//                 }}
//               >
//                 Learn more +
//               </p>
//             </div>
//           </div>

//           <div className="bottomImages">
//             <div className="imgContainer">
//               <img className="bottomImg" src="../../assets/chairs4.jpeg" />
//             </div>
//             <div className="description">
//               <h2>Stackability</h2>
//               <p style={{ fontSize: "16px" }}>Store them away effortlessly.</p>
//               <p
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#cf4545",
//                 }}
//               >
//                 Learn more +
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

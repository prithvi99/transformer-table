import "./chairImgSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import data from "../../chairsData.json";
import { useSelector } from "react-redux";

export default function ChairImgSection() {
  const currentProductImages = useSelector((state) => state.updateImage.value);

  const whiteChair = [
    { src: "../../assets/chairs1.jpeg" },
    { src: "../../assets/chairs2.jpeg" },
    { src: "../../assets/chairs3.jpeg" },
  ];

  const [counter, setCounter] = useState(0);

  function changeImage(direction) {
    let count;
    if (direction === "left") {
      count =
        counter === 0
          ? data[currentProductImages].images.length - 1
          : counter - 1;
    } else if (direction === "right") {
      count =
        counter === data[currentProductImages].images.length - 1
          ? 0
          : counter + 1;
    }

    setCounter(count);
  }

  return (
    <div className="chairImgSection">
      <div className="activeImage">
        <img
          className="displayImg"
          src={data[currentProductImages].images[counter].src}
        />
      </div>
      <div className="allImages">
        <FontAwesomeIcon
          className="imgArrows"
          icon={faAngleLeft}
          onClick={() => {
            changeImage("left");
          }}
        />
        {data[currentProductImages].images.map((img, ind) => {
          return (
            <div className="allImagesContainer">
              <img
                className="allBottomImages"
                style={{
                  border: `${ind === counter ? `4px solid #cf4545` : "none"}`,
                }}
                src={img.src}
                // onClick={(counter = ind)}
              />
            </div>
          );
        })}
        <FontAwesomeIcon
          className="imgArrows"
          icon={faAngleRight}
          onClick={() => {
            changeImage("right");
          }}
        />
      </div>
    </div>
  );
}

// import "./chairImgSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import data from "../../chairsData.json";

// export default function ChairImgSection() {
//   const whiteChair = [
//     { src: "../../assets/chairs1.jpeg" },
//     { src: "../../assets/chairs2.jpeg" },
//     { src: "../../assets/chairs3.jpeg" },
//   ];

//   const [counter, setCounter] = useState(0);

//   function changeImage(direction) {
//     let count;
//     if (direction === "left") {
//       count = counter === 0 ? whiteChair.length - 1 : counter - 1;
//     } else if (direction === "right") {
//       count = counter === whiteChair.length - 1 ? 0 : counter + 1;
//     }

//     setCounter(count);
//   }

//   return (
//     <div className="chairImgSection">
//       <div className="activeImage">
//         <img src={whiteChair[counter].src} />
//       </div>
//       <div className="allImages">
//         <FontAwesomeIcon
//           className="imgArrows"
//           icon={faAngleLeft}
//           onClick={() => {
//             changeImage("left");
//           }}
//         />
//         {whiteChair.map((img, ind) => {
//           return (
//             <div className="allImagesContainer">
//               <img
//                 className="allBottomImages"
//                 style={{
//                   border: `${ind === counter ? `4px solid #cf4545` : "none"}`,
//                 }}
//                 src={img.src}
//                 // onClick={(counter = ind)}
//               />
//             </div>
//           );
//         })}
//         <FontAwesomeIcon
//           className="imgArrows"
//           icon={faAngleRight}
//           onClick={() => {
//             changeImage("right");
//           }}
//         />
//       </div>
//     </div>
//   );
// }

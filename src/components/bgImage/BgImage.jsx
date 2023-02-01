import "./bgImage.css";
import Navbar from "../navbar/Navbar";

export default function BgImage() {
  return (
    <div className="bgImage">
      {/* <Navbar /> */}
      <div className="bgImageContainer">
        <img
          style={{ backgroundSize: "cover", width: "100%", height: "100%" }}
          className="image"
          src="https://i.imgur.com/uPXtNc3.png"
        />
        <div className="imgText">
          <h2>82 Sets left</h2>
          <h1>
            Up to <br></br> $1170 OFF
          </h1>
          <h3>Only available for the first 2023 customers of the year!</h3>
          <button>Shop the sale</button>
        </div>
      </div>
    </div>
  );
}

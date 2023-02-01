import "./imgShowcase.css";
import data from "./imgShowcaseData.json";

export default function ImgShowcase() {
  return (
    <div className="imgShowcase">
      <div className="imgShowcaseContainer">
        {data.map((value, index) => {
          return (
            <div
              className="imgShowcaseSection"
              style={{ flexDirection: `${value.row_alignment}` }}
            >
              <img src={value.src} />
              <div className="imgShowcaseSectionDesc">
                <h2>{value.h2}</h2>
                <p>{value.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

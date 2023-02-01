import "./chairProductDesc.css";
import { useEffect, useState } from "react";
import ChairImgSection from "../chairImgSection/ChairImgSection";
import ChairDescSection from "../chairDescSection/ChairDescSection";

export default function ChairProductDesc() {
  return (
    <div className="chairProductDesc">
      <div className="chairProductDescContainer">
        <ChairImgSection />
        <ChairDescSection />
      </div>
    </div>
  );
}

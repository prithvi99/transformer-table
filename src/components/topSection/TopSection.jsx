import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BgImage from "./../../components/bgImage/BgImage";

export default function TopSection() {
  return (
    <div className="topSection">
      <Navbar navbar="navbar" />
      <BgImage />
    </div>
  );
}

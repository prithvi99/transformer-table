import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import BgImage from "./../../components/bgImage/BgImage";
import ProductSection from "../../components/productSection/ProductSection";
import TopSection from "../../components/topSection/TopSection";
import Qualities from "../../components/qualities/Qualities";
import Footer from "../../components/footer/Footer";

function Home() {
  // const homePageProduct = {
  //   product1: { productIndex: 0, bgColor: "#1b1b1b" },
  //   product2: { productIndex: 1, bgColor: "#E7E7E7" },
  // };
  return (
    <div className="home">
      {/* <div className="topSection">
        <Navbar />
        <BgImage />
      </div> */}
      <TopSection />
      <div className="heading">
        <h1>Modular furniture - Revolutionized</h1>
      </div>
      <ProductSection product={{ productIndex: 0, bgColor: "#1b1b1b" }} />
      <Qualities />
      <ProductSection
        product={{ productIndex: 1, bgColor: "#f3f3f3", fontColor: "#1b1b1b" }}
      />
      <Footer />
    </div>
  );
}

export default Home;

import Navbar from "../../components/navbar/Navbar";
import "./product.css";
import ChairProductDesc from "../../components/chairProductDesc/ChairProductDesc";
import Qualities from "../../components/qualities/Qualities";
import ImgShowcase from "../../components/imgShowcase/ImgShowcase";
import Footer from "../../components/footer/Footer";
import Fbt from "../../components/frequientlyBoughtTogether/Fbt";

function Product() {
  return (
    <div className="product">
      <Navbar navbar="navbarWhite" />
      <ChairProductDesc />
      <Qualities />
      <ImgShowcase />
      <Fbt />
      <Footer />
    </div>
  );
}

export default Product;

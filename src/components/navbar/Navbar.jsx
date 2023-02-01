import "./navbar.css";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BgImage from "../bgImage/BgImage";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../cart/Cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openCloseCart } from "../../features/cart/cartSlice";
import Badge from "../badge/Badge";
import { useNavigate } from "react-router-dom";

export default function Navbar(prop) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.userCart.isCartOpen);
  console.log(isOpen);

  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "navbar active" : `${prop.navbar}`}>
      <div className="navbarContainer">
        <div className="left" onClick={() => navigate("/transformer-table")}>
          <div className="top">Transformer</div>
          <div className="botton">Table</div>
        </div>
        <div className="center">
          <span>Shop</span>
          <span>Reviews</span>
          <span>Learn More</span>
          <span>FAQ</span>
        </div>
        <div className="right">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <div className="cartWithBadge">
            <FontAwesomeIcon
              className="icon cartIconCount"
              onClick={() => {
                dispatch(openCloseCart());
              }}
              icon={faCartShopping}
            />
            <Badge />
          </div>
        </div>
      </div>
      {isOpen && <Cart />}
    </div>
  );
}

// dispatch(openCloseCart(setOpenCart(!openCart)));

import {
  faCross,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { openCloseCart, removeFromCart } from "../../features/cart/cartSlice";
import { useState } from "react";

export default function Cart() {
  //   const productImage = useSelector((state) => {
  //     state.cart.cartItems.src[0];
  //   });
  //   const typeOfProduct = useSelector((state) => {
  //     state.cart.cartItems.value;
  //   });
  const carts = useSelector((state) => state.userCart.cartItems);
  const isOpen = useSelector((state) => state.userCart.isCartOpen);

  var productTotal = 0;
  var cartTotal = 0;

  const dispatch = useDispatch();
  console.log(carts);

  const [quantity, setQuantity] = useState(2);

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleRemoveFromCart(index) {
    dispatch(removeFromCart(index));
  }

  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartContainerSection">
          <div className="topCartSection">
            <span className="cartHeading">Your Cart</span>
            <FontAwesomeIcon
              onClick={() => dispatch(openCloseCart())}
              className="cartIcon"
              icon={faXmark}
            />
          </div>
          <div className="middleCartSection">
            <div className="middleCartTitles">
              <span>Product</span>
              <span>Total</span>
            </div>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.25,
                width: "90%",
                borderColor: "grey",
              }}
            />
            {/* <div className="cartProductSection"> */}
            {carts.map((val, ind) => {
              productTotal =
                parseInt(val.singleProduct[1].quantity) *
                val.singleProduct[0].productInfo.price;
              cartTotal += productTotal;
              // parseInt(val.singleProduct[1].quantity) *
              //   val.singleProduct[0].productInfo.price;

              return (
                <div className="productInCart">
                  <img
                    className="picImage"
                    src={val.singleProduct[0].productInfo.images[0].src}
                  />
                  <div className="productDescription">
                    <span className="productHeading">Transformer Chair</span>
                    <span className="productPriceDesc">
                      ${val.singleProduct[0].productInfo.price}
                    </span>
                    <span className="productTypeDesc">
                      {val.singleProduct[0].productInfo.value}
                    </span>
                    <div className="quantityDelete">
                      <select
                        value={val.singleProduct[1].quantity}
                        onChange={(e) => handleQuantityChange(e)}
                        className="selectorCart"
                        name="quantity"
                        id="quantity"
                        style={{
                          height: "40px",
                          width: "40px",
                          fontSize: "14px",
                        }}
                      >
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                      </select>
                      <FontAwesomeIcon
                        onClick={() =>
                          handleRemoveFromCart(
                            val.singleProduct[0].productInfo.id
                          )
                        }
                        className="quantityDeleteIcon"
                        icon={faTrashCan}
                      />
                    </div>
                  </div>

                  <span className="producTotaltPrice">${productTotal}</span>
                  <div className="productPrice"></div>
                </div>
              );
            })}
          </div>
        </div>
        <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 0.25,
            width: "90%",
            borderColor: "grey",
          }}
        />
        <div className="bottomCartSection">
          <div className="subtotal">
            <div className="subtotalHeading">
              <span className="subtotalHeadingh2">Subtotal</span>
              <span className="taxes">
                Taxes and shipping calculated at checkout
              </span>
            </div>
            <div className="subtotalPrice">${cartTotal}</div>
          </div>
          <div className="checkoutBottom">
            <button className="cartButton">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

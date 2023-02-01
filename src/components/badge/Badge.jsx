import "./badge.css";
import { useSelector } from "react-redux";

export default function Badge() {
  const carts = useSelector((state) => state.userCart.cartItems);
  const count = carts.length;
  return (
    <div className="circle">
      <span className="count">{count}</span>
    </div>
  );
}

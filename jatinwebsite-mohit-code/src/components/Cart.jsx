import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
//import { useSelector } from "react-redux";
//import { removeItem, resetCart } from '../redux/cartReducer';
//import { useDispatch } from "react-redux";


const Cart = () => {
  //const products = useSelector((state) => state.cart.products);
  const products = ["shoes" , "chappal" , "belt"];
  //const dispatch = useDispatch();
  const id = 1;

//   const totalPrice = () => {
//     let total = 0;
//     products.forEach((item) => {
//       total += item.quantity * item.price;
//     });
//     return total.toFixed(2);
//   };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={id}>
          <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
          <div className="details">
            <h1>{item}</h1>
            <p>description</p>
            <div className="price">
              Total price
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Sub total</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      {/* <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span> */}
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
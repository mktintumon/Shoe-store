import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
//import useFetch from "../../hooks/useFetch";
//import { useParams } from "react-router-dom";
//import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
  //const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("https://images.pexels.com/photos/12628402/pexels-photo-12628402.jpeg?auto=compress&cs=tinysrgb&w=600 ");
  const [quantity, setQuantity] = useState(1);

  //const dispatch = useDispatch();
  //const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      <>
        <div className="left">
          <div className="images">
            <img
              src="https://images.pexels.com/photos/12628402/pexels-photo-12628402.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              onClick={(e) => setSelectedImg("https://images.pexels.com/photos/12628402/pexels-photo-12628402.jpeg?auto=compress&cs=tinysrgb&w=600")}
            />
            <img
              src="https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              onClick={(e) => setSelectedImg("https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=600")}
            />
          </div>
          <div className="mainImg">
            <img
              src={selectedImg}
              alt=""
            />
          </div>
        </div>
        

        <div className="right">
          <h1>Nike shoes</h1>
          <span className="price">Rs 2000</span>
          <p>Very nice shoe...kharid lo ab</p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <b style={{fontSize:"3rem"}}>{quantity}</b>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
            //   onClick={() =>
            //     dispatch(
            //       addToCart({
            //         id: data.id,
            //         title: data.attributes.title,
            //         desc: data.attributes.desc,
            //         price: data.attributes.price,
            //         img: data.attributes.img.data.attributes.url,
            //         quantity,
            //       })
            //     )
            //   }
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Nike</span>
            <span>Product Type: Shoe</span>
            <span>Tag: Adidas , Bata</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;

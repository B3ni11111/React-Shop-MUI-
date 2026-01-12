import Button from "./Button";
import Fav from "./Fav";
import { useState } from "react";

export default function Item({ i, onItemClick, addToCart }) {
  const [fav, setFav] = useState(false);
  const toggleFav = (e) => {
    e.stopPropagation();
    setFav((prev) => !prev);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(i);
  };

  const handleItemClick = () => {
    onItemClick(i);
  };

  return (
    <>
      <div onClick={handleItemClick}>
        <img
          src={i.img}
          alt={i.product}
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
            width: "100%",
            height: "auto",
          }}
        />
        <h4>{i.product}</h4>
        <p>${i.price}</p>
        <Fav onClick={toggleFav} fav={fav} />
        <div onClick={(e) => e.stopPropagation()}>
          <Button text="🛒" color="orange" onClick={handleAddToCart} />
          <Button text="Buy Now" color="darkblue" />
        </div>
      </div>
    </>
  );
}

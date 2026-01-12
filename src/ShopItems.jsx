import Item from "./Item";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BetterItem from "./BetterItem";

export default function ShopItems({ data, addToCart }) {
  return (
    <div>
      {data.map((i) => (
        <BetterItem key={i.id} i={i} addToCart={addToCart} />
      ))}
    </div>
  );
}

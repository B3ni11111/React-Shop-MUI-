import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fav from "./Fav";
import myButton from "./Button";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BetterItem({ i, addToCart }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [fav, setFav] = React.useState(false);
  const toggleFav = (e) => {
    e.stopPropagation();
    setFav((prev) => !prev);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(i);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <div>
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
          <p>₪{i.price}</p>
          <Fav onClick={toggleFav} fav={fav} />
          <div onClick={(e) => e.stopPropagation()}></div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {i.product}
          </Typography>
          <Box>
            <div>
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
              <h4>{i.info}</h4>
              <p>₪{i.price}</p>
              <Fav onClick={toggleFav} fav={fav} />
              <div onClick={(e) => e.stopPropagation()}>
                <Button color="success" variant="contained">
                  Buy Now!
                </Button>
                <Button onClick={handleAddToCart} variant="outlined">
                  Add to cart
                </Button>
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

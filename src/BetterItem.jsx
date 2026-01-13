import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fav from "./Fav";
import theme from "./Theme";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.secondary.main}`,
  boxShadow: 24,
  p: 4,
  color: theme.palette.text.primary,
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
    <>
      <Card
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            boxShadow: 6,
          },
        }}
        onClick={handleOpen}
      >
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 2 }}
        >
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              bgcolor: "background.default",
              borderRadius: 1,
            }}
          >
            <img
              src={i.img}
              alt={i.product}
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              mt: 1,
              minHeight: "3em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {i.product}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 1, mb: 1 }}
          >
            ₪{i.price}
          </Typography>
          <Box onClick={(e) => e.stopPropagation()} sx={{ mt: "auto" }}>
            <Fav onClick={toggleFav} fav={fav} />
          </Box>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "text.primary", mb: 2 }}
          >
            {i.product}
          </Typography>
          <Box sx={{ my: 6 }}>
            <Box>
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
              <Typography
                variant="body1"
                sx={{ color: "text.primary", mt: 2, mb: 2 }}
              >
                {i.info}
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", mb: 2 }}>
                ₪{i.price}
              </Typography>
              <Fav onClick={toggleFav} fav={fav} />
              <Box
                onClick={(e) => e.stopPropagation()}
                sx={{ mt: 2, display: "flex", gap: 2 }}
              >
                <Button color="success" variant="contained">
                  Buy Now!
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outlined"
                  sx={{ color: "text.primary", borderColor: "primary.main" }}
                >
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Fav from "./Fav";
import theme from "./Theme";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.secondary.main}`,
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
  color: theme.palette.text.primary,
};

export default function BetterItem({ i, addToCart }) {
  const [open, setOpen] = React.useState(false);
  const [expandTitle, setExpandTitle] = React.useState(false);
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
          borderRadius: "20px",
          cursor: "pointer",
          width: "100%",
          maxWidth: 280,
          height: 360,
          mx: "auto",
          "&:hover": { boxShadow: 6 },
        }}
        onClick={handleOpen}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
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
              mt: 1,
              minHeight: "3em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordWrap: "break-word",
            }}
          >
            {i.product}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
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
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              variant="h6"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: expandTitle ? "unset" : 2,
                transition: "0.3s",
                flexGrow: 1,
              }}
            >
              {i.product}
            </Typography>

            <IconButton
              size="small"
              onClick={() => setExpandTitle((prev) => !prev)}
              sx={{ color: "text.secondary", mt: "2px" }}
            >
              {expandTitle ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </Box>

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
              <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
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
                  sx={{ borderColor: "primary.main" }}
                  endIcon={<AddShoppingCartIcon />}
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

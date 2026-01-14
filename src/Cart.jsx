import Button from "./Button";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const getTotalPrice = () => {
    return cart.reduce((total, i) => total + i.price * i.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ bgcolor: "background.paper", p: 3, borderRadius: 2 }}>
        <Typography variant="h4">Your Cart is Empty</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 2 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Shopping Cart
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {cart.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              p: 2,
              gap: 2,
            }}
          >
            <img
              src={item.img}
              alt={item.product}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {item.product}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                ₪{item.price}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  sx={{ bgcolor: "background.default" }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  sx={{ bgcolor: "background.default" }}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => removeFromCart(item.id)}
                  sx={{ color: "error.main", ml: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Typography variant="h6">
                ₪{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
      <Card sx={{ mt: 3, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            Total: ₪{getTotalPrice().toFixed(2)}
          </Typography>
          <Button text="Checkout" color="green" />
        </Box>
      </Card>
    </Box>
  );
}

import { useState } from "react";
import ShopItems from "./ShopItems";
import Header from "./Header";
import Cart from "./Cart";
import ItemPage from "./ItemPage";
import { Box } from "@mui/material";

export default function ShopPage({ item, img, data }) {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [currentView, setCurrentView] = useState("shop");
  const [selectedItem, setSelectedItem] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((cartItem) => cartItem.id === item.id);
      if (isExist) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    console.log(cart);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    console.log(cart);
  };

  const updateQuantity = (id, newQ) => {
    if (newQ <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQ } : item
      )
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentView("item");
  };

  const navigateToCart = () => {
    setCurrentView("cart");
  };

  const navigateToShop = () => {
    setCurrentView("shop");
    setSelectedItem(null);
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Header
        cartCount={getTotalItems()}
        navigateToCart={navigateToCart}
        navigateToShop={navigateToShop}
        img={img}
        data={data}
      />
      {currentView === "shop" && (
        <ShopItems
          data={item}
          onItemClick={handleItemClick}
          addToCart={addToCart}
        />
      )}
      {currentView === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </Box>
  );
}

import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ShopItems from "./ShopItems";
import Header from "./Header";
import Cart from "./Cart";
import About from "./About";
import Profile from "./Profile";
import { Box } from "@mui/material";

export default function ShopPage({ item, img, data, themeMode, toggleTheme }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
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

  const handleItemClick = () => {
    // Could navigate to item detail page if needed
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToShop = () => {
    navigate("/");
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToProfile = () => {
    navigate("/profile");
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
        navigateToAbout={navigateToAbout}
        navigateToProfile={navigateToProfile}
        img={img}
        data={data}
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ShopItems
              data={item}
              onItemClick={handleItemClick}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile data={data} />} />
      </Routes>
    </Box>
  );
}

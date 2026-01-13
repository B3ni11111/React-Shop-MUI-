import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import EnterData from "./EnterData";
import SandBox from "./SandBox";
import Header from "./Header";
import ShopPage from "./ShopPage";
import { Box } from "@mui/material";

import theme from "./Theme";

export default function HomePage({ itemsData }) {
  const [cart, setCart] = useState([]);
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
  const [data, setData] = useState({
    id: uuid(),
    userName: "",
    password: "",
    img: null,
  });

  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if (!signed) return;

    console.log(data);
  }, [signed]);

  const nav = { navigateToCart, navigateToShop, cartCount: getTotalItems() };
  const props = {
    handleItemClick,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    selectedItem,
    currentView,
    cart,
  };
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 2 }}>
      {!signed ? (
        <EnterData data={data} setData={setData} setSigned={setSigned} />
      ) : (
        <>
          {/* <Header data={data} {...nav} /> */}
          <ShopPage data={data} item={itemsData} img={data.img} />
          <SandBox data={data} />
        </>
      )}
    </Box>
  );
}

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import EnterData from "./EnterData";
import SandBox from "./SandBox";
import Header from "./Header";
import ShopPage from "./ShopPage";
import laptopImg from "./assets/laptop.jpeg";
import headphonesImg from "./assets/headphones.jpeg";
import smartphoneImg from "./assets/smartphone.jpeg";

export default function HomePage() {
  const itemsData = [
    {
      id: 1,
      product: "מחשב נייד HP Laptop 15-FD0090NJ / C8BX7EA - צבע Natural silver",
      price: 999,
      img: laptopImg,
      info: "מחשב נייד מבית HP בגודל ''15.6 ברזולוציית FHD (1920x1080), מעבד Intel® Core™ i3-1315U, זיכרון פנימי בנפח 8GB, כונן SSD בנפח 512GB וכולל מערכת הפעלה.",
    },
    {
      id: 2,
      product:
        "אוזניות סוני בלוטוס אלחוטיות - מבטלות רעשים כולל חיבור 3.5 mm - צבע שחור - Sony WH1000XM5B",
      price: 199,
      img: headphonesImg,
      info: "אוזניות קשת אלחוטיות Accentum מבית Sennheiser הן הדור הבא באוזניות האלחוטיות המספקות את חתימת הסאונד של Sennheiser באיכות סאונד מעולה וכוללות מצב ביטול רעשים אקטיבי.",
    },
    {
      id: 3,
      product:
        "אייפון Apple iPhone 17 Pro Max 256GB צבע Deep Blue - שנה אחריות יבואן רשמי - ללא מטען וללא אוזניות",
      price: 799,
      img: smartphoneImg,
      info: "iPhone 17 Pro Max העוצמתי מבית Apple, בעל מסך 6.9 אינץ' Super Retina XDR, עם חיישן זיהוי פנים, מעבד ראשי A19 Pro עוצמתי, שלוש מצלמות אחוריות 48 מגה פיקסל, מצלמת סלפי 18 מגה פיקסל, אפשרות טעינה אלחוטית ותמיכה ברשת הדור החמישי 5G.",
    },
  ];
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
    <div>
      {!signed ? (
        <EnterData
          data={data}
          img={data.img}
          setData={setData}
          setSigned={setSigned}
        />
      ) : (
        <>
          {/* <Header data={data} {...nav} /> */}
          <ShopPage item={itemsData} />
          <SandBox data={data} />
        </>
      )}
    </div>
  );
}

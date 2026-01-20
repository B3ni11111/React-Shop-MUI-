import { useMemo } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import HomePage from "./HomePage";
import laptopImg from "./assets/laptop.jpeg";
import smartphoneImg from "./assets/smartphone.jpeg";
import headphonesImg from "./assets/headphones.jpeg";
import iphoneImg from "./assets/b_1.jpg";
import hoodieImg from "./assets/b_2.jpg";
import hoodie2Img from "./assets/b_3.jpg";
import hoodie3Img from "./assets/b_4.jpg";
import macbookImg from "./assets/b_5.jpg";
import coffieImg from "./assets/b_6.jpg";
import pspImg from "./assets/b_7.jpg";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./Theme";
import useThemePreference from "./hooks/useThemePreference";

function App() {
  const itemsData = [
    {
      id: uuid(),
      product: "מחשב נייד HP Laptop 15-FD0090NJ / C8BX7EA - צבע Natural silver",
      price: 999,
      img: laptopImg,
      info: "מחשב נייד מבית HP בגודל ''15.6 ברזולוציית FHD (1920x1080), מעבד Intel® Core™ i3-1315U, זיכרון פנימי בנפח 8GB, כונן SSD בנפח 512GB וכולל מערכת הפעלה.",
    },
    {
      id: uuid(),
      product:
        "אוזניות סוני בלוטוס אלחוטיות - מבטלות רעשים כולל חיבור 3.5 mm - צבע שחור - Sony WH1000XM5B",
      price: 199,
      img: headphonesImg,
      info: "אוזניות קשת אלחוטיות Accentum מבית Sennheiser הן הדור הבא באוזניות האלחוטיות המספקות את חתימת הסאונד של Sennheiser באיכות סאונד מעולה וכוללות מצב ביטול רעשים אקטיבי.",
    },
    {
      id: uuid(),
      product:
        "אייפון Apple iPhone 17 Pro Max 256GB צבע Deep Blue - שנה אחריות יבואן רשמי - ללא מטען וללא אוזניות",
      price: 799,
      img: smartphoneImg,
      info: "iPhone 17 Pro Max העוצמתי מבית Apple, בעל מסך 6.9 אינץ' Super Retina XDR, עם חיישן זיהוי פנים, מעבד ראשי A19 Pro עוצמתי, שלוש מצלמות אחוריות 48 מגה פיקסל, מצלמת סלפי 18 מגה פיקסל, אפשרות טעינה אלחוטית ותמיכה ברשת הדור החמישי 5G.",
    },
    {
      id: uuid(),
      product:
        "אייפון Apple אייפון Apple iPhone 17 Pro 256GB - צבע Silver - שנה אחריות יבואן רשמי - ללא מטען וללא אוזניות 17 Pro Max 256GB צבע Deep Blue - שנה אחריות יבואן רשמי - ללא מטען וללא אוזניות",
      price: 4948,
      img: iphoneImg,
      info: "iPhone 17 Pro העוצמתי מבית Apple, בעל מסך 6.3 אינץ' Super Retina XDR, עם חיישן זיהוי פנים, מעבד ראשי A19 Pro עוצמתי, שלוש מצלמות אחוריות 48 מגה פיקסל, מצלמת סלפי 18 מגה פיקסל, אפשרות טעינה אלחוטית ותמיכה ברשת הדור החמישי 5G.",
    },
    {
      id: uuid(),
      product: "קפוצון לנשים עם רוכסן Marvel Spider Gwen - מידה M",
      price: 131,
      img: hoodieImg,
      info: "קפוצ' Marvel Loki הביעו את אהבתכם לדמויות האהובות עליכם עם קפוצון נוח ומעוצב. פריט אופנה פופולרי בקרב ילדים ומבוגרים כאחד ומהווה דרך נהדרת להביע אהדה למותגים האהובים.",
    },
    {
      id: uuid(),
      product: "קפוצון לנשים עם רוכסן Marvel Spider Gwen - מידה M",
      price: 131,
      img: hoodie2Img,
      info: "קפוון Marvel Spider Gwen הביעו את אהבתכם לדמויות האהובות עליכם עם קפוצון נוח ומעוצב. פריט אופנה פופולרי בקרב ילדים ומבוגרים כאחד ומהווה דרך נהדרת להביע אהדה למותגים האהובים.",
    },
    {
      id: uuid(),
      product: "קפוצ'ון לגברים Marvel Avengers - מידה XL",
      price: 131,
      img: hoodie3Img,
      info: "קפוצון Marvel Avengers הביעו את אהבתכם לדמויות האהובות עליכם עם קפוצון נוח ומעוצב. פריט אופנה פופולרי בקרב ילדים ומבוגרים כאחד ומהווה דרך נהדרת להביע אהדה למותגים האהובים.",
    },
    {
      id: uuid(),
      product:
        "מחשב Apple MacBook Air 13 M4 Chip 10-Core CPU, 10-Core GPU, 512GB SSD Storage, 16GB Unified Memory - צבע Midnight - מקלדת עברית / אנגלית - דגם MW133HB/A",
      price: 4948,
      img: macbookImg,
      info: "הכירו את ה-MacBook Air החדש מבית Apple  דק יותר, מהיר מתמיד ועוצמתי להפליא, הודות לשבב החדש והמתקדם מבית Apple. עם ביצועים פורצי דרך, חיי סוללה חסרי תקדים ועיצוב אלגנטי וקל במיוחד, הוא מושלם לעבודה, לימודים ויצירה ללא גבולות. כל מה שאתם אוהבים ב-Mac, עכשיו במהירות וביעילות שלא הכרתם.",
    },
    {
      id: uuid(),
      product:
        "מכונת קפה Nespresso Inissia D40 - צבע שחור - שנה אחריות יבואן רשמי",
      price: 437,
      img: coffieImg,
      info: "חובבי קפה המחפשים מכונת קפה קומפקטית ואופנתית מבלי להתפשר על הטעם?. Inissia, מכונת קפה מבוססת קפסולות, מתאימה לכל חלל בביתכם בזכות גודלה הקומפקטי. היא גם מסוגלת להכין שני גדלי כוסות מתכווננים: אספרסו ולונגו, שניהם עם טעם יוצא דופן.",
    },
    {
      id: uuid(),
      product:
        "מחשב גיימינג נייד Lenovo Legion Go Gen 2 8ASP2 83N0001DIV - בנפח 512GB - צבע Eclipse Black - כולל נרתיק נשיאה בתוך האריזה - שלוש שנות אחריות",
      price: 4989,
      img: pspImg,
      info: "הכירו את Legion Go Gen 2 - הדור הבא של מחשב הגיימינג הנייד עטור הפרסים מבית Lenovo. עם בקרים ניתנים להסרה, מסך OLED עוצר נשימה בגודל 8.8 אינץ’ ובקצב רענון 144Hz, וסוללה עוצמתית ליותר זמן משחק - זהו הכוח והגמישות במיטבם, לכל מקום שתרצו לשחק בו.",
    },
  ];

  const { mode, toggleTheme } = useThemePreference();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <SandBox /> */}
        <HomePage itemsData={itemsData} themeMode={mode} toggleTheme={toggleTheme} />
        {/* <BetterItem/> */}
      </ThemeProvider>
    </>
  );
}

export default App;

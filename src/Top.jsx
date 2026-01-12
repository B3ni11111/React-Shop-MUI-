import Button from "./Button";
import logo from "./assets/IMG_7223.jpg";

export default function Top({ cartCount, onCartClick, onHomeClick }) {
  return (
    <header>
      <img
        src={logo}
        alt=""
        onClick={onHomeClick}
        style={{
          cursor: "pointer",
          maxWidth: "100px",
          maxHeight: "100px",
          width: "auto",
          height: "auto",
        }}
      />
      <div>
        <button onClick={onCartClick}>
          🛒 {cartCount > 0 && <span>{cartCount}</span>}
        </button>
        <Button text="Home" color="red" onClick={onHomeClick} />
      </div>
    </header>
  );
}

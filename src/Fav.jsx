export default function Fav({ fav, onClick }) {
  return (
    <span style={{ cursor: "pointer" }} onClick={onClick}>
      {fav ? "❤️" : "🖤"}
    </span>
  );
}

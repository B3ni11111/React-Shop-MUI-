export default function Button({ text, color = "red", onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

import Item from "./Item";

export default function ShopItems({ data, onItemClick, addToCart }) {
  return (
    <div>
      {data.map((i) => (
        <Item
          key={i.id}
          i={i}
          onItemClick={onItemClick}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

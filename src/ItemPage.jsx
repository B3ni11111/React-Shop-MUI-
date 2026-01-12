import Button from "./Button";

export default function ItemPage({ item, addToCart }) {
  const handleAddToCart = () => {
    addToCart(item);
    console.log(item);
    alert(`${item.product} added to cart!`);
  };

  return (
    <div>
      <div>
        <img
          src={item.img}
          alt={item.product}
          style={{
            maxWidth: "400px",
            maxHeight: "400px",
            width: "100%",
            height: "auto",
          }}
        />
        <div>
          <h2>{item.product}</h2>
          <p>${item.price}</p>
          <p>{item.info}</p>
          <div>
            <Button
              text="🛒 Add to Cart"
              color="orange"
              onClick={handleAddToCart}
            />
            <Button text="Buy Now" color="darkblue" />
          </div>
        </div>
      </div>
    </div>
  );
}

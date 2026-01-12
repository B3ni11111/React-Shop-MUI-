import Button from "./Button";

export default function Cart({ cart, removeFromCart, updateQuantity }) {
  const getTotalPrice = () => {
    return cart.reduce((total, i) => total + i.price * i.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.product}
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                width: "auto",
                height: "auto",
              }}
            />
            <div>
              <h4>{item.product}</h4>
              <p>${item.price}</p>
            </div>
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div>
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <Button text="Checkout" color="green" />
      </div>
    </div>
  );
}

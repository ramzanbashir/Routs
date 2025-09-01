import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="pastel-title mb-3">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center pastel-card"
            >
              {item.name} × {item.quantity}
              <div>
                <span className="fw-bold me-3">${item.price * item.quantity}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ${total}</h4>
      <button className="btn btn-success mt-3">Checkout</button>
    </div>
  );
}

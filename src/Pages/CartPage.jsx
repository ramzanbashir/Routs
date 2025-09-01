import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (id) => {
    Swal.fire({
      title: "Remove Item?",
      text: "Are you sure you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) removeFromCart(id);
    });
  };

  return (
    <div>
      <h2 className="fw-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={item.image} alt={item.name} width="50" className="me-3" />
                <span>{item.name}</span>
              </div>
              <div>
                <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                {item.quantity}
                <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button className="btn btn-sm btn-danger ms-3" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

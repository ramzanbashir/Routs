import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm px-4" style={{ backgroundColor: "#f8f9fa" }}>
      <Link className="navbar-brand d-flex align-items-center fw-bold fs-4" to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="logo"
          width="40"
          className="me-2"
        />
        E-Shop
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

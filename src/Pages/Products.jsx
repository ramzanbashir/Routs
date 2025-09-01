import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Smartphone", price: 500, image: "https://cdn-icons-png.flaticon.com/512/401/401061.png" },
  { id: 2, name: "Laptop", price: 1200, image: "https://cdn-icons-png.flaticon.com/512/ devices /devices.png" },
  { id: 3, name: "Headphones", price: 150, image: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png" },
  { id: 4, name: "Watch", price: 200, image: "https://cdn-icons-png.flaticon.com/512/2948/2948037.png" }
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card shadow-sm h-100 text-center p-3">
            <img src={product.image} alt={product.name} className="card-img-top mx-auto" style={{ maxWidth: "100px" }} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

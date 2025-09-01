export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">About Us</h2>
      <p className="lead text-center">
        Welcome to <strong>E-Shop</strong>, your trusted destination for quality products.
        We aim to provide our customers with a seamless online shopping experience with
        the best deals and fast delivery.
      </p>

      <div className="text-center mt-5">
        <h5 className="fw-bold">Made by Muhammad Ramzan</h5>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="mailto:yourmail@gmail.com" className="text-decoration-none">📧 Email</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-decoration-none">💻 GitHub</a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-decoration-none">📱 WhatsApp</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-decoration-none">🔗 LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

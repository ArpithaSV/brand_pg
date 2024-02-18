const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About us</li>
        <li href="#">Contact us</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;

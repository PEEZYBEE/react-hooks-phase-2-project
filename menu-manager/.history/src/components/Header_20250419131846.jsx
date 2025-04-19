import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>🍽️ Menu Manager</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Dish</Link>
      </nav>
    </header>
  );
}

export default Header;

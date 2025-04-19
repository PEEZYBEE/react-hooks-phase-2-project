// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>🍽️ Menu Manager</h1>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        {" | "}
        <Link to="/add" style={linkStyle}>Add Dish</Link>
      </nav>
    </header>
  );
}

export default Header;

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  borderBottom: "1px solid #ccc",
};

const titleStyle = {
  margin: 0,
  fontSize: "2.5rem",
};

const linkStyle = {
  color: "dodgerblue",
  textDecoration: "none",
  marginLeft: "12px",
};

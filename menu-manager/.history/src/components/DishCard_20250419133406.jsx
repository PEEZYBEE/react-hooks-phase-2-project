// src/components/DishCard.jsx
function DishCard({ dish, onDelete, onToggleAvailability }) {
  const { id, name, image, price, available } = dish;

  return (
    <div className="dish-card" style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>
        Status:{" "}
        <strong style={{ color: available ? "green" : "red" }}>
          {available ? "Available" : "Unavailable"}
        </strong>
      </p>
      <button onClick={() => onToggleAvailability(id)} style={btnStyle}>
        Toggle Availability
      </button>
      <button onClick={() => onDelete(id)} style={deleteStyle}>
        Delete
      </button>
    </div>
  );
}

export default DishCard;

// 🧼 Basic Inline Styles (optional - use Tailwind or CSS file if preferred)
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  borderRadius: "6px",
  backgroundColor: "#f0ad4e",
  color: "#fff",
  border: "none",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteStyle = {
  ...btnStyle,
  backgroundColor: "#d9534f",
};

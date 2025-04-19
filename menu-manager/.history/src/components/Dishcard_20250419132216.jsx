import { Link } from "react-router-dom";

function DishCard({ dish, onDelete, onToggleAvailability }) {
  const { id, name, image, price, available } = dish;

  return (
    <div className="dish-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <p>Status: {available ? "Available" : "Unavailable"}</p>
      
      <button onClick={() => onToggleAvailability(id)}>
        {available ? "Mark Unavailable" : "Mark Available"}
      </button>
      
      <button onClick={() => onDelete(id)}>Delete</button>
      
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default DishCard;

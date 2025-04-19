function DishCard({ dish, onDelete, onToggleAvailability }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>Price: ${dish.price}</p>
      <p>
        Status:{" "}
        <span style={{ color: dish.available ? "green" : "red" }}>
          {dish.available ? "Available" : "Unavailable"}
        </span>
      </p>
      <button onClick={() => onToggleAvailability(dish.id)}>
        Toggle Availability
      </button>
      <button onClick={() => onDelete(dish.id)}>Delete</button>
    </div>
  );
}

export default DishCard;

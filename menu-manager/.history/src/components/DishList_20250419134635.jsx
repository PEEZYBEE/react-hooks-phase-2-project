// src/components/DishList.jsx
import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          onDelete={onDelete}
          onToggleAvailability={onToggleAvailability}
        />
      ))}
    </div>
  );
}

export default DishList;

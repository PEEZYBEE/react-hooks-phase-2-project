// src/components/DishList.jsx
import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div style={listStyle}>
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

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "center",
  marginTop: "24px",
};

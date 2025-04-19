import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
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

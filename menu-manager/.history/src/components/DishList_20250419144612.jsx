import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-center">Browse Dishes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            onDelete={onDelete}
            onToggleAvailability={onToggleAvailability}
          />
        ))}
      </div>
    </div>
  );
}

export default DishList;

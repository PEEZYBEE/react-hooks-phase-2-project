import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

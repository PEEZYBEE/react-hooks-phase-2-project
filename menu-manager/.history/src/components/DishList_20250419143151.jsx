import DishCard from "./DishCard";

function DishList({ dishes, onDelete, onToggleAvailability }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Browse Dishes</h3>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search dishes..."
          className="w-full max-w-md mb-6 p-2 rounded bg-black text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

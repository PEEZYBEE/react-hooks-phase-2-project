function DishCard({ dish, onDelete, onToggleAvailability }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {/* Dish Image */}
      {dish.image ? (
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-3 text-gray-500">
          No Image
        </div>
      )}

      {/* Dish Info */}
      <h3 className="text-lg font-bold">{dish.name}</h3>
      <p className="text-sm text-gray-600">${dish.price}</p>
      <p className={`text-sm font-semibold ${dish.available ? "text-green-600" : "text-red-600"}`}>
        {dish.available ? "Available" : "Unavailable"}
      </p>

      {/* Buttons */}
      <div className="mt-3 flex gap-2">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded"
          onClick={() => onToggleAvailability(dish.id)}
        >
          Toggle
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          onClick={() => onDelete(dish.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

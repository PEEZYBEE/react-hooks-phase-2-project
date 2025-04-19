function DishCard({ dish, onDelete, onToggleAvailability }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
      <p className="text-gray-600">${dish.price}</p>
      <p
        className={`mt-2 font-medium ${
          dish.available ? "text-green-600" : "text-red-500"
        }`}
      >
        {dish.available ? "Available" : "Unavailable"}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onToggleAvailability(dish.id)}
          className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(dish.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DishCard;

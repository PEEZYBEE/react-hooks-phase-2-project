function DishCard({ dish, onDelete, onToggleAvailability }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 transition-transform duration-300 transform hover:scale-105 animate-fade-in">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{dish.name}</h3>
      <p className="text-gray-600">{dish.description}</p>
      <p className="font-semibold mt-2">${dish.price}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          onClick={() => onDelete(dish.id)}
        >
          Delete
        </button>
        <button
          className={`px-3 py-1 rounded ${
            dish.available
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 hover:bg-gray-500"
          } text-white`}
          onClick={() => onToggleAvailability(dish.id)}
        >
          {dish.available ? "Available" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default DishCard;

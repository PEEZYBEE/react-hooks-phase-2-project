function DishCard({ dish, onDelete, onToggleAvailability, index }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
        <span className="text-orange-600 font-bold">${dish.price}</span>
      </div>

      {/* Availability Badge */}
      <p
        className={`text-sm mb-3 font-medium px-2 py-1 rounded-full inline-block ${
          dish.available
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {dish.available ? "Available" : "Unavailable"}
      </p>

      <div className="flex justify-between">
        <button
          onClick={() => onDelete(dish.id)}
          className="text-xs px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          Remove
        </button>
        <button
          onClick={() => onToggleAvailability(dish.id)}
          className="text-xs px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white rounded transition"
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default DishCard;

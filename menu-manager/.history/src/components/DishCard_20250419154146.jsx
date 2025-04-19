function DishCard({ dish, onDelete, onToggleAvailability, index }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 transform transition-transform duration-300 hover:scale-105 animate-fade-in hover:animate-wobble"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
    >
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{dish.name}</h3>
      <p className="text-gray-600">{dish.description}</p>
      <p className="font-semibold mt-2">${dish.price}</p>

      <div className="mt-4 flex justify-between items-center gap-2">
        {/* Smaller Remove Button */}
        <button
          className="text-xs px-2.5 py-1 bg-rose-100 text-rose-700 hover:bg-rose-200 rounded shadow-sm 
                     transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          onClick={() => onDelete(dish.id)}
        >
          Remove
        </button>

        {/* Smaller Availability Button */}
        <button
          className={`text-xs px-2.5 py-1 rounded shadow-sm transition-all duration-300 ease-in-out 
                      transform hover:scale-105 hover:shadow-md ${
                        dish.available
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
          onClick={() => onToggleAvailability(dish.id)}
        >
          {dish.available ? "Available" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default DishCard;

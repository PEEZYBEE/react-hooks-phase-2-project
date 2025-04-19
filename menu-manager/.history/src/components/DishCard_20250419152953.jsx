function DishCard({ dish, onDelete, onToggleAvailability, index }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 transform transition-transform duration-300 hover:scale-105 animate-fade-in hover:animate-wobble"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
    >
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-56 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-lg font-bold">{dish.name}</h3>
      <p className="text-gray-600">{dish.description}</p>
      <p className="font-semibold mt-2">${dish.price}</p>

      <div className="mt-4 flex justify-between items-center gap-2">
        {/* Fancier Remove Button */}
        <button
          className="bg-rose-100 text-rose-700 hover:bg-rose-200 px-4 py-2 rounded-md shadow-sm 
                     transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:shadow-md"
          onClick={() => onDelete(dish.id)}
        >
          Remove
        </button>

        {/* Fancier Availability Button */}
        <button
          className={`px-4 py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out 
                      transform hover:scale-105 active:scale-95 hover:shadow-md ${
                        dish.available
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 hover:ring hover:ring-emerald-300/50"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300 hover:ring hover:ring-slate-400/40"
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

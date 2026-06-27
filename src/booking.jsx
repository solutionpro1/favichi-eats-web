// Find where your booking option prices are rendered and apply this structure:
const originalPrice = service.price; // or whatever variable holds the cost
const promotionalPrice = originalPrice * 0.95;

return (
  <div className="flex items-baseline gap-2">
    <span className="text-xs line-through text-slate-400">
      ₦{originalPrice.toLocaleString()}
    </span>
    <span className="text-lg font-black text-green-600">
      ₦{promotionalPrice.toLocaleString()}
    </span>
    <span className="text-[9px] font-extrabold bg-green-100 text-green-700 px-1.5 py-0.5 rounded uppercase tracking-wide">
      5% Launch Discount
    </span>
  </div>
);
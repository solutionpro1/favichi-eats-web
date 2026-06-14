import React, { useState } from "react";
import { Utensils, ShoppingBag, Plus, Minus, Check, Trash2 } from "lucide-react";

const categorizedMenu = {
  "Native Soups": {
    title: "Authentic Native Soups",
    desc: "Rich, highly seasoned traditional Nigerian soups prepared with choice proteins and absolute care.",
    image: "/banner-soups.jpg",
    fallbackBg: "from-emerald-900 to-teal-950",
    items: [
      { id: "s1", name: "Edikakong Soup", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "s2", name: "Vegetable Sauce", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s3", name: "Afang Soup", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s4", name: "Eforiro", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 60000, "5L": 80000 } },
      { id: "s5", name: "Ogbono Soup", type: "variable", sizes: { "1.4L": 30000, "2.4L": 45000, "3.5L": 60000, "5L": 80000 } },
      { id: "s6", name: "Banga Soup", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s7", name: "Egusi Soup", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s8", name: "Okro Soup", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "s9", name: "Pepper Soup Egusi", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s10", name: "Seafood Okro", type: "variable", sizes: { "1.4L": 50000, "2.4L": 65000, "3.5L": 85000, "5L": 100000 } },
      { id: "s11", name: "Fisherman Soup", type: "variable", sizes: { "1.4L": 50000, "2.4L": 65000, "3.5L": 85000, "5L": 100000 } },
      { id: "s12", name: "Ofada Sauce", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s13", name: "Oha Soup", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s14", name: "Ofe Nsala", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s15", name: "Ofe Onugbu", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s16", name: "Ofe Akwu", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s17", name: "Igbo Egusi", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "s18", name: "Ofe Owerri", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "s19", name: "Nkwobi", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "s20", name: "Isi Ewu", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "s21", name: "Ewedu, Gbagiri & Omiobe Trio", type: "variable", note: "Comes with luxury proteins", sizes: { "1.4L": 50000, "2.4L": 65000, "3.5L": 85000, "5L": 100000 } }
    ]
  },
  "Stews & Sauces": {
    title: "Rich Stews & Savory Sauces",
    desc: "Thick, flavor-bursting deep red stews and slow-simmered native pepper sauces to complete your custom pairings.",
    image: "/banner-stews.jpg",
    fallbackBg: "from-red-900 to-rose-950",
    items: [
      { id: "st1", name: "Chicken Stew", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "st2", name: "Turkey Stew", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "st3", name: "Beef Stew", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "st4", name: "Hake / Titus Fish Stew", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "st5", name: "Fried Catfish Stew", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } },
      { id: "st6", name: "Bukka Stew", type: "variable", sizes: { "1.4L": 30000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "st7", name: "Goat Meat Stew", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 65000, "5L": 85000 } },
      { id: "st8", name: "Cow Leg Sauce", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 90000 } },
      { id: "st9", name: "Snail Sauce", type: "variable", sizes: { "1.4L": 30000, "2.4L": 45000, "3.5L": 65000, "5L": 90000 } },
      { id: "st10", name: "Ayamashe Sauce", type: "variable", sizes: { "1.4L": 35000, "2.4L": 45000, "3.5L": 60000, "5L": 100000 } },
      { id: "st11", name: "Mackerel Fish Sauce", type: "variable", sizes: { "1.4L": 30000, "2.4L": 40000, "3.5L": 60000, "5L": 80000 } }
    ]
  },
  "Pepper Soups": {
    title: "Fiery Hot Pepper Soups",
    desc: "Intensely steaming, aromatic clear spicy broths cooked with native scent leaves and premium proteins.",
    image: "/banner-pepper.jpg",
    fallbackBg: "from-amber-950 to-stone-900",
    items: [
      { id: "ps1", name: "Goat Meat Pepper Soup", type: "variable", sizes: { "1.4L": 25000, "2.4L": 35000, "3.5L": 55000 } },
      { id: "ps2", name: "Catfish Pepper Soup", type: "variable", sizes: { "1.4L": 25000, "2.4L": 35000, "3.5L": 55000 } },
      { id: "ps3", name: "Chicken Pepper Soup", type: "variable", sizes: { "1.4L": 25000, "2.4L": 35000, "3.5L": 55000 } },
      { id: "ps4", name: "Turkey Pepper Soup", type: "variable", sizes: { "1.4L": 25000, "2.4L": 35000, "3.5L": 55000 } },
      { id: "ps5", name: "Cow Tail Pepper Soup", type: "variable", sizes: { "1.4L": 25000, "2.4L": 35000, "3.5L": 55000 } }
    ]
  },
  "Rice Dishes": {
    title: "Signature Grains & Rice Dishes",
    desc: "From iconic deep-smokey wood-fired party Jollof rice to premium loaded stir-fry Basmati and coconut grains.",
    image: "/banner-rice.jpg",
    fallbackBg: "from-orange-800 to-amber-950",
    items: [
      { id: "r1", name: "Smokey Jollof Rice", type: "variable", sizes: { "2.4L": 25000, "3.5L": 35000, "5L": 45000 } },
      { id: "r2", name: "Nigerian Fried Rice", type: "variable", sizes: { "2.4L": 25000, "3.5L": 35000, "5L": 45000 } },
      { id: "r3", name: "Basmati Fried Rice", type: "variable", sizes: { "2.4L": 30000, "3.5L": 35000, "5L": 50000 } },
      { id: "r4", name: "Seafood Basmati Fried Rice", type: "variable", sizes: { "2.4L": 30000, "3.4L": 40000, "5L": 60000 } },
      { id: "r5", name: "Asun Jollof", type: "variable", sizes: { "2.4L": 40000, "3.5L": 50000, "5L": 60000 } },
      { id: "r6", name: "Coconut Rice", type: "variable", sizes: { "2.4L": 30000, "3.5L": 40000, "5L": 50000 } },
      { id: "r7", name: "Basmati Coconut Rice", type: "variable", sizes: { "2.4L": 30000, "3.5L": 40000, "5L": 50000 } },
      { id: "r8", name: "Native Rice", type: "variable", sizes: { "2.4L": 35000, "3.5L": 35000, "5L": 55000 } },
      { id: "r9", name: "Basmati Native Rice", type: "variable", sizes: { "2.4L": 40000, "3.5L": 40000, "5L": 60000 } },
      { id: "r10", name: "Meaty Jollof Rice", type: "variable", sizes: { "2.4L": 35000, "3.5L": 35000, "5L": 75000 } },
      { id: "r11", name: "Jollof Spaghetti", type: "variable", sizes: { "2.4L": 25000, "3.5L": 35000, "5L": 45000 } },
      { id: "r12", name: "Stir Fry Spaghetti", type: "variable", sizes: { "2.4L": 30000, "3.5L": 35000, "5L": 55000 } },
      { id: "r13", name: "Plain Rice", type: "variable", sizes: { "1.4L": 15000, "2.4L": 20000, "3.5L": 35000 } },
      { id: "r14", name: "Plain Basmati Rice", type: "variable", sizes: { "1.4L": 18000, "2.4L": 20000, "3.5L": 35000 } },
      { id: "r15", name: "Ofada Rice", type: "variable", sizes: { "1.4L": 18000, "2.4L": 20000, "3.5L": 80000 } }
    ]
  },
  "Swallow": {
    title: "Fresh Swallow Options",
    desc: "Soft, freshly prepared traditional swallow bundles to pair seamlessly with your native soup bowls.",
    image: "/banner-swallow.jpg",
    fallbackBg: "from-amber-800 to-yellow-950",
    items: [
      { id: "sw1", name: "Eba", type: "flat", price: 500, unit: "" },
      { id: "sw2", name: "Amala", type: "flat", price: 1500, unit: "" },
      { id: "sw3", name: "Fufu", type: "flat", price: 500, unit: "" },
      { id: "sw4", name: "Pounded Yam", type: "flat", price: 1500, unit: "" },
      { id: "sw5", name: "Starch", type: "flat", price: 1500, unit: "" },
      { id: "sw6", name: "Semolina", type: "flat", price: 700, unit: "" }
    ]
  },
  "Proteins & Extras": {
    title: "À La Carte Sides & Proteins",
    desc: "Layer your custom combinations with deeply spiced, freshly fried or wrapped choice meat and fish options.",
    image: "/banner-proteins.jpg",
    fallbackBg: "from-yellow-800 to-amber-950",
    items: [
      { id: "pr1", name: "Chicken Cut", type: "flat", price: 3000, unit: "piece" },
      { id: "pr2", name: "Chicken Lap", type: "flat", price: 5000, unit: "piece" },
      { id: "pr3", name: "Turkey (Small)", type: "flat", price: 3500, unit: "piece" },
      { id: "pr4", name: "Turkey (Big)", type: "flat", price: 6500, unit: "piece" },
      { id: "pr5", name: "Premium Beef", type: "flat", price: 1500, unit: "piece" },
      { id: "pr6", name: "Goat Meat", type: "flat", price: 2000, unit: "piece" },
      { id: "pr7", name: "Hake Fish", type: "flat", price: 2000, unit: "piece" },
      { id: "pr8", name: "Croaker Fish", type: "flat", price: 3000, unit: "piece" },
      { id: "pr9", name: "Titus Fish", type: "flat", price: 2000, unit: "piece" },
      { id: "pr10", name: "Smoked Panla Fish", type: "flat", price: 2000, unit: "piece" },
      { id: "pr11", name: "Kanda / Pomo", type: "flat", price: 1000, unit: "piece" },
      { id: "pr12", name: "Snail (Small)", type: "flat", price: 4000, unit: "piece" },
      { id: "pr13", name: "Snail (Big)", type: "flat", price: 7000, unit: "piece" },
      { id: "pr14", name: "Jumbo Prawns", type: "flat", price: 4000, unit: "piece (Min 5 wraps)" },
      { id: "mm1", name: "Moi Moi (Fish & Eggs)", type: "flat", price: 3000, unit: "wrap (Min 5 wraps)" },
      { id: "mm2", name: "Moi Moi (Full Egg)", type: "flat", price: 2500, unit: "wrap (Min 5 wraps)" }
    ]
  },
  "Grills & Others": {
    title: "Signature Grills & Specialties",
    desc: "Premium wood smoke BBQ packages and heavy native luxury pottages designed for true entertainment layout.",
    image: "/banner-grills.jpg",
    fallbackBg: "from-stone-800 to-red-950",
    items: [
      { id: "gr1", name: "BBQ Turkey (Small Pack)", type: "flat", price: 40000, unit: "10 pieces" },
      { id: "gr2", name: "BBQ Turkey (Big Pack)", type: "flat", price: 70000, unit: "10 pieces" },
      { id: "gr3", name: "BBQ Chicken Pack", type: "flat", price: 50000, unit: "10 pieces" },
      { id: "od1", name: "Gizdodo", type: "variable", sizes: { "1.4L": 25000, "2.4L": 45000, "3.5L": 55000, "5L": 75000 } },
      { id: "od2", name: "Beans Porridge", type: "variable", sizes: { "2.4L": 30000, "3.5L": 40000, "5L": 60000 } },
      { id: "od3", name: "Yam Pottage", type: "variable", sizes: { "2.4L": 25000, "3.5L": 35000, "5L": 65000 } },
      { id: "od4", name: "Fried Beans", type: "variable", sizes: { "1.4L": 15000, "2.4L": 20000, "3.5L": 75000 } },
      { id: "od5", name: "Plain Beans", type: "variable", sizes: { "1.4L": 15000, "2.4L": 20000, "3.5L": 35000 } },
      { id: "od6", name: "Ugba Sauce for Yam", type: "variable", sizes: { "1.4L": 25000, "2.4L": 55000, "3.5L": 75000, "5L": 75000 } },
      { id: "od7", name: "Abacha Luxury (Fish & Pomo)", type: "variable", sizes: { "1.4L": 35000, "2.4L": 55000, "3.5L": 65000, "5L": 85000 } }
    ]
  },
  "Party Combos": {
    title: "Large Event Buffet Combos",
    desc: "Complete guest count systems handling full main provisions and side layout variables for your massive events.",
    image: "/banner-combos.jpg",
    fallbackBg: "from-orange-950 to-rose-950",
    items: [
      { 
        id: "cb1", 
        name: "Party Meals - 20 Guests", 
        type: "flat", 
        price: 280000, 
        unit: "Combo",
        includes: [
          "5L Smokey Jollof Rice",
          "5L Basmati Fried rice",
          "5L Basmati Coconut Rice",
          "10 Pcs of Chicken",
          "10 Pcs of Hake fish",
          "10 Pcs of Beef",
          "10 wraps of moi moi",
          "2.4L Egusi soup/Goat meat",
          "10 wraps of pounded yam"
        ]
      },
      { 
        id: "cb2", 
        name: "Standard Combo - 50 Guests", 
        type: "flat", 
        price: 550000, 
        unit: "Combo",
        includes: [
          "10L cooler Smokey Jollof Rice",
          "10L cooler Basmati fried rice",
          "5L Basmati Coconut rice",
          "20 Pcs of Chicken",
          "20 Pcs of Hake fish",
          "20 Pcs of beef",
          "5L Egusi soup/Goat meat",
          "2.5L Semolina",
          "2.5L Pounded yam"
        ]
      },
      { 
        id: "cb3", 
        name: "Premium Meal Combo - 50 Guests", 
        type: "flat", 
        price: 750000, 
        unit: "Combo",
        includes: [
          "10L cooler Smokey Jollof Rice",
          "10L cooler Basmati fried rice",
          "10L cooler Asun Jollof",
          "20 Pcs of Chicken",
          "20 Pcs of Hake fish",
          "20 Pcs of beef",
          "10 wraps of moi moi",
          "5L Egusi soup/Goat meat",
          "5L Eforiro/Assorted meat"
        ]
      },
      { 
        id: "cb4", 
        name: "Superior Combo - 100/200 Guests", 
        type: "flat", 
        price: 1750000, 
        unit: "Combo",
        includes: [
          "30L cooler Smokey Jollof Rice",
          "30L cooler Basmati fried rice",
          "10L cooler Asun Jollof",
          "80 Pcs of Chicken",
          "80 Pcs of Hake fish",
          "80 Pcs of beef",
          "10L Egusi soup/Goat meat",
          "10L Eforiro/Assorted meat",
          "40 Pounded yam",
          "40 Semolina"
        ]
      }
    ]
  }
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Native Soups");
  const [selectedItems, setSelectedItems] = useState({});
  const whatsappNumber = "2348154064345";

  const handleSizeChange = (itemId, itemName, size, price) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (!size) {
        delete updated[itemId];
      } else {
        updated[itemId] = { id: itemId, name: itemName, mode: "variable", size, price, qty: 1 };
      }
      return updated;
    });
  };

  const handleQtyChange = (itemId, itemName, price, unit, change) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      const current = updated[itemId] || { id: itemId, name: itemName, mode: "flat", price, unit, qty: 0 };
      const newQty = current.qty + change;

      if (newQty <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = { ...current, qty: newQty };
      }
      return updated;
    });
  };

  const clearSelection = () => {
    setSelectedItems({});
  };

  const calculateTotal = () => {
    return Object.values(selectedItems).reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const fireWhatsAppOrder = () => {
    const itemsArray = Object.values(selectedItems);
    if (itemsArray.length === 0) return;

    let textPayload = "Hello Everyday Favichi_eats, I want to place a custom food order from your website portal:\n\n";
    itemsArray.forEach((item) => {
      if (item.mode === "variable") {
        textPayload += "• " + item.name + " (" + item.size + ") — ₦" + item.price.toLocaleString() + "\n";
      } else {
        textPayload += "• " + item.name + " x" + item.qty + " — ₦" + (item.price * item.qty).toLocaleString() + "\n";
      }
    });

    textPayload += "\nEstimated Menu Subtotal: ₦" + calculateTotal().toLocaleString() + "\n\nPlease verify confirmation timelines. Thank you!";
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(textPayload), "_blank");
  };

  const currentCategory = categorizedMenu[activeTab];

  return (
    <section className="py-12 bg-white/40 px-4 md:px-6 border-y border-orange-100 relative">
      <div className="max-w-6xl mx-auto pb-28">
        
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Build Your Custom Feast</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Choose your native soup sizes, build custom stews, layer your proteins, or pick a party pack block.
          </p>
        </div>

        <div className="flex gap-2 mb-6 border-b border-orange-100/60 pb-3 overflow-x-auto no-scrollbar justify-start md:justify-center relative z-20">
          {Object.keys(categorizedMenu).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={"px-4 py-2.5 rounded-full text-xs font-black tracking-tight transition whitespace-nowrap shrink-0 " + (activeTab === tab ? "bg-orange-600 text-white shadow-sm" : "bg-orange-50 text-orange-800 hover:bg-orange-100/80")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div 
          key={activeTab}
          className={"w-full rounded-3xl mb-8 min-h-[180px] md:min-h-[240px] shadow-sm relative overflow-hidden bg-gradient-to-br flex flex-col justify-end p-6 md:p-10 transition-all duration-500 bg-cover bg-center " + currentCategory.fallbackBg}
          style={{ backgroundImage: "url(" + currentCategory.image + ")" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-0"></div>
          
          <div className="relative z-10 max-w-2xl text-white">
            <h4 className="text-xl md:text-3xl font-black tracking-tight drop-shadow-sm">{currentCategory.title}</h4>
            <p className="text-xs md:text-sm text-orange-100/90 mt-2 font-medium leading-relaxed drop-shadow-sm">{currentCategory.desc}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {currentCategory.items.map((item) => {
            const currentSelection = selectedItems[item.id];

            return (
              <div 
                key={item.id} 
                className={"border rounded-2xl p-5 transition flex flex-col justify-between " + (currentSelection ? "border-orange-500 bg-orange-50/40 ring-2 ring-orange-500/10 shadow-sm" : "border-slate-100 bg-white/90 hover:border-orange-200")}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-slate-900 text-base leading-tight">{item.name}</h4>
                    {currentSelection && (
                      <span className="bg-orange-600 text-white rounded-full p-0.5 shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  {item.note && <p className="text-[10px] text-orange-600 font-bold mt-1 uppercase">{item.note}</p>}
                  
                  {item.includes && (
                    <ul className="mt-3 space-y-1 bg-slate-50 border border-slate-100/70 p-3 rounded-xl text-left">
                      {item.includes.map((inc, index) => (
                        <li key={index} className="text-[11px] text-slate-600 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {item.type === "variable" ? (
                  <div className="mt-5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Select Size Variant</label>
                    <select
                      value={currentSelection?.size || ""}
                      onChange={(e) => {
                        const size = e.target.value;
                        handleSizeChange(item.id, item.name, size || null, size ? item.sizes[size] : 0);
                      }}
                      className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold p-2.5 rounded-xl text-slate-700 focus:outline-none focus:border-orange-500 focus:bg-white"
                    >
                      <option value="">-- Choose Liters / Price --</option>
                      {Object.entries(item.sizes).map(([size, price]) => (
                        <option key={size} value={size}>
                          {size} Bowl — ₦{price.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-50">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {item.unit ? "Price per " + item.unit : "Price"}
                      </span>
                      <span className="text-orange-600 font-black text-sm">₦{item.price.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 p-1 rounded-xl">
                      <button
                        onClick={() => handleQtyChange(item.id, item.name, item.price, item.unit, -1)}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 active:scale-95 transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-slate-800">
                        {currentSelection?.qty || 0}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, item.name, item.price, item.unit, 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 active:scale-95 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {calculateTotal() > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl rounded-2xl p-4 z-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-2.5 rounded-xl text-white">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Estimated Summary</h5>
                <p className="text-lg font-black text-orange-400 mt-0.5">
                  ₦{calculateTotal().toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={clearSelection}
              className="flex items-center gap-1.5 text-xs font-black text-red-400 hover:text-red-300 transition bg-red-500/10 hover:bg-red-500/20 px-3 py-2 rounded-xl border border-red-500/20"
              title="Reset Order Selection"
            >
              <Trash2 size={13} />
              <span>Reset</span>
            </button>
          </div>

          <button
            onClick={fireWhatsAppOrder}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-black text-xs px-6 py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2"
          >
            Forward Combo to WhatsApp ({Object.values(selectedItems).reduce((a, b) => a + b.qty, 0)} items)
          </button>
        </div>
      )}
    </section>
  );
}
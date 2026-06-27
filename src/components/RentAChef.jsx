import React from "react";
import { UserCheck, Calendar, Star, ShieldCheck, Sparkles } from "lucide-react";

const chefPackages = [
  {
    tier: "Junior Chef",
    desc: "Perfect for family daily meal preps, casual home logistics, and simple local menu selections.",
    dailyRate: 30000,
    monthlyOptions: [
      { frequency: "2 times a week", rate: 150000 },
      { frequency: "3 times a week", rate: 210000 },
      { frequency: "4 times a week", rate: 250000 }
    ],
    accent: "border-slate-100 bg-white"
  },
  {
    tier: "Sous Chef",
    desc: "Experienced culinary professionals capable of handling large multi-course menus and advanced family dining layers.",
    dailyRate: 50000,
    monthlyOptions: [
      { frequency: "2 times a week", rate: 230000 },
      { frequency: "4 times a week", rate: 380000 }
    ],
    accent: "border-orange-200 bg-orange-50/20 ring-1 ring-orange-500/5"
  },
  {
    tier: "Pro Chef",
    desc: "Elite master culinary artists for heavy luxury provisions, custom private fine-dining affairs, and corporate catering executions.",
    dailyRate: 80000,
    monthlyOptions: [
      { frequency: "2 times a week", rate: 380000 },
      { frequency: "3 times a week", rate: 450000 }
    ],
    accent: "border-slate-900 bg-slate-950 text-white"
  }
];

export default function RentAChef() {
  const whatsappNumber = "2348154064345";

  const bookChefService = (tier, type, originalRate, promoRate, detailString) => {
    let textPayload = "Hello Everyday Favichi eats & catering, I want to inquire about booking a [" + tier + "] via your Rent a Chef service module:\n\n";
    textPayload += "• Service Mode: " + type + "\n";
    textPayload += "• Timing Layout: " + detailString + "\n";
    textPayload += "• Original Rate: ₦" + originalRate.toLocaleString() + "\n";
    textPayload += "🎉 Website Launch Promo Applied (5% OFF): ₦" + promoRate.toLocaleString() + "\n\n";
    textPayload += "Please forward availability windows. Thank you!";
    
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(textPayload), '_blank');
  };

  return (
    <section className="py-16 bg-slate-50/50 px-4 md:px-6 border-t border-slate-100 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-[10px] bg-orange-600 text-white font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">Premium Service Bundle</span>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">Rent a Chef</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            Everyday Favichi eats & catering provides elite culinary placement. Book expert dedicated personal chefs for individual days or recurring monthly assignments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chefPackages.map((chef, i) => {
            const isDark = chef.tier === "Pro Chef";
            const discountedDaily = chef.dailyRate * 0.95;
            
            return (
              <div key={i} className={"border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition hover:shadow-md " + chef.accent}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <UserCheck className={isDark ? "text-orange-400" : "text-orange-600"} size={20} />
                    <h4 className="text-xl font-black tracking-tight">{chef.tier}</h4>
                  </div>
                  <p className={"text-xs font-medium leading-relaxed mb-6 " + (isDark ? "text-slate-400" : "text-slate-500")}>
                    {chef.desc}
                  </p>

                  {/* Daily Pricing Card Node Container */}
                  <div className={"p-4 rounded-2xl mb-6 " + (isDark ? "bg-slate-900 border border-slate-800" : "bg-slate-50 border border-slate-100")}>
                    <span className={"text-[10px] font-bold uppercase tracking-wider block " + (isDark ? "text-slate-500" : "text-slate-400")}>Daily Rate</span>
                    
                    <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 mt-1">
                      <span className="text-xs line-through text-slate-400 font-bold">
                        ₦{chef.dailyRate.toLocaleString()}
                      </span>
                      <span className="text-2xl font-black text-green-500">
                        ₦{discountedDaily.toLocaleString()}
                      </span>
                      <span className={"text-[9px] font-bold " + (isDark ? "text-slate-400" : "text-slate-500")}>/ day</span>
                    </div>
                    
                    <button 
                      onClick={() => bookChefService(chef.tier, "Daily Assignment", chef.dailyRate, discountedDaily, "1 Day Slot")}
                      className="w-full mt-3 bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-black py-2 rounded-xl transition shadow-sm"
                    >
                      Book Daily Slot (5% Off)
                    </button>
                  </div>

                  {/* Monthly Retainer Stack Node Layout */}
                  <div className="space-y-3">
                    <span className={"text-[10px] font-bold uppercase tracking-wider block " + (isDark ? "text-slate-500" : "text-slate-400")}>
                      Monthly Retainer Plans (5% Promo Rate)
                    </span>
                    {chef.monthlyOptions.map((opt, idx) => {
                      const discountedMonthly = opt.rate * 0.95;
                      return (
                        <div 
                          key={idx} 
                          onClick={() => bookChefService(chef.tier, "Monthly Retainer", opt.rate, discountedMonthly, opt.frequency)}
                          className={"border p-3 rounded-xl flex items-center justify-between cursor-pointer transition hover:scale-[1.01] active:scale-95 " + (isDark ? "border-slate-800 bg-slate-900/40 hover:border-orange-500/40 hover:bg-slate-900" : "border-slate-100 bg-white hover:border-orange-500/30 hover:bg-orange-50/10")}
                        >
                          <div>
                            <p className="text-[11px] font-black tracking-tight">{opt.frequency}</p>
                            <p className={"text-[9px] font-bold " + (isDark ? "text-slate-500" : "text-slate-400")}>1 Month Duration</p>
                          </div>
                          <div className="text-right">
                            <span className="block text-[10px] line-through text-slate-400 font-bold leading-none">
                              ₦{opt.rate.toLocaleString()}
                            </span>
                            <span className="block text-xs font-black text-green-500 mt-1">
                              ₦{discountedMonthly.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={"mt-8 pt-4 border-t flex items-center gap-2 text-[10px] font-bold " + (isDark ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-400")}>
                  <ShieldCheck size={14} className="text-green-500" />
                  <span>Includes logistics vetting & coverage guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
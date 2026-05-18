"use client"

import { useState } from "react"

// 1. الـ Data الكاملة متع المنيو مع الـ Recipes والـ Ingredients
const menuData = {
  STARTERS: [
    {
      name: "Brik à l'Œuf",
      price: "12€",
      description: "Crispy malsouka pastry, runny egg, tuna, capers, parsley",
      isSignature: true,
      recipe: "Malsouka sheets folded with fresh tuna, a whole raw egg, capers, and chopped parsley, then deep-fried until golden and crispy."
    },
    {
      name: "Salade Mechouia",
      price: "10€",
      description: "Smoky grilled peppers, tomatoes, garlic, olive oil, tuna",
      isSignature: false,
      recipe: "Finely chopped grilled bell peppers, tomatoes, and garlic, generously dressed with premium Tunisian olive oil and topped with tuna flakes."
    },
    {
      name: "Chorba Frik",
      price: "9€",
      description: "Slow-simmered lamb and green wheat soup, coriander",
      isSignature: false,
      recipe: "Traditional lamb broth thickened with cracked green wheat (frik), spiced with tabil, tomato paste, and finished with fresh coriander."
    },
    {
      name: "Harissa & Olives",
      price: "7€",
      description: "House harissa, cured olives, warm khobz tabouna",
      isSignature: false,
      recipe: "Handcrafted sundried chili paste mixed with olive oil, served alongside locally cured green and black olives with warm clay-oven bread."
    }
  ],
  "MAIN COURSES": [
    {
      name: "Couscous Royal au Lamb",
      price: "24€",
      description: "Hand-rolled couscous, slow-cooked lamb shoulder, seasonal vegetables",
      isSignature: true,
      recipe: "Steamed semolina served with tender lamb shoulder, a rich tomato-based broth spiced with tabil, chickpeas, pumpkin, and zucchini."
    },
    {
      name: "Tajine El Bey",
      price: "18€",
      description: "Three-layered baked dish with minced meat, spinach, and ricotta",
      isSignature: false,
      recipe: "Elegant layered baked dish featuring a spiced minced beef base, a vibrant green spinach center, and a smooth ricotta cheese layer on top."
    }
  ],
  DESSERTS: [
    {
      name: "Assida Zgougou",
      price: "11€",
      description: "Aleppo pine pudding, rich pastry cream, toasted nuts",
      isSignature: true,
      recipe: "Traditional cream made from wild Aleppo pine seeds, layered with smooth vanilla custard and topped with walnuts, almonds, and pistachios."
    },
    {
      name: "Bambalouni",
      price: "6€",
      description: "Sidi Bou Saïd style sweet dounuts, orange blossom sugar",
      isSignature: false,
      recipe: "Light and airy fried dough rings, dusted immediately with granulated sugar infused with fresh Tunisian orange blossom water."
    }
  ],
  DRINKS: [
    {
      name: "Tunisian Mint Tea",
      price: "5€",
      description: "Brewed green tea, fresh mint leaves, toasted pine nuts",
      isSignature: false,
      recipe: "Strong green tea slow-brewed on hot coals, infused with a large handful of fresh mint, and served with a generous spoonful of crunchy pine nuts."
    }
  ]
}

type CategoryType = "STARTERS" | "MAIN COURSES" | "DESSERTS" | "DRINKS"

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("STARTERS")
  const [selectedDish, setSelectedDish] = useState<any | null>(null)

   return (
    <section data-aos="fade-up" id="menu" className="bg-[#fbf4ea] min-h-screen py-24 px-6 md:px-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-amber-700 uppercase mb-3">
          Our Menu
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1c1917] tracking-wide text-center">
          Tastes of the Maghreb
        </h2>

        <div className="flex items-center justify-center space-x-3 mt-4 mb-12">
          <div className="w-12 h-[1px] bg-amber-700/30"></div>
          <span className="text-amber-700 text-xs">✦</span>
          <div className="w-12 h-[1px] bg-amber-700/30"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {(Object.keys(menuData) as CategoryType[]).map((category) => (
            <button key={category}
              onClick={() => { setActiveCategory(category); setSelectedDish(null) }}
              className={`px-4 sm:px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-800 text-white shadow-md"
                  : "bg-white/60 hover:bg-white text-zinc-800 border border-zinc-200/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* grid-cols-1 على mobile، grid-cols-2 على md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full">
          {menuData[activeCategory].map((dish: any, index: number) => (
            <div key={index}
              className="group flex flex-col cursor-pointer pb-2 border-b border-zinc-300/40 hover:border-amber-700/40 transition-colors duration-300"
              onClick={() => setSelectedDish(selectedDish?.name === dish.name ? null : dish)}
            >
              <div className="flex items-baseline justify-between w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif text-lg sm:text-xl text-[#1c1917] group-hover:text-red-800 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  {dish.isSignature && (
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-amber-700 bg-amber-100 border border-amber-600/20 px-1.5 py-0.5 rounded-sm">
                      Signature
                    </span>
                  )}
                </div>
                <div className="flex-1 border-b border-dotted border-zinc-400 mx-4 relative top-[-4px]"></div>
                <span className="font-serif text-lg font-bold text-red-800 shrink-0">{dish.price}</span>
              </div>
              <p className="text-zinc-600 text-sm font-light mt-2 italic leading-relaxed">{dish.description}</p>
              <span className="text-[11px] text-amber-700 font-medium tracking-wide mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {selectedDish?.name === dish.name ? "✕ Close details" : "→ View traditional recipe"}
              </span>
              {selectedDish?.name === dish.name && (
                <div className="mt-4 p-4 bg-amber-50/60 border border-amber-600/10 rounded-sm shadow-inner">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">Traditional Preparation:</h4>
                  <p className="text-xs text-zinc-700 leading-relaxed font-light">{dish.recipe}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
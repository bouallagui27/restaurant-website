import Image from "next/image"

// 1. الداتا متع الـ 7 تصاور مع الأبعاد متع كل كارت في الـ Grid
const galleryItems = [
  {
    id: 1,
    src: "/1.jpg", // بدّل بالمسارات الحقيقية للتصاور اللي في الـ public
    alt: "Couscous Tunisian Dish",
    className: "md:col-span-1 md:row-span-2 h-[600px] md:h-full hover:shadow-black shadow-2xl", 
  },
  {
    id: 2,
    src: "/6.jpg",
    alt: "Brik à l'œuf",
    className: "md:col-span-1 md:row-span-1  h-[280px]",
  },
  {
    id: 3,
    src: "/3.jpg",
    alt: "Tunisian Mint Tea",
    className: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    id: 4,
    src: "/4.jpg",
    alt: "Traditional sweets",
    className: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    id: 5,
    src: "/5.jpg",
    alt: "Salade Mechouia",
    className: "md:col-span-1 md:row-span-1 h-[280px]",
  },
  {
    id: 6,
    src: "/8.jpg",
    alt: "Interior luxury dining",
    // التصويرة السادسة تاخذ زوز بلاصت بالعرض (col-span-2) باش نوزنوا الـ Grid لوطا
    className: "md:col-span-2 md:row-span-1 h-[300px]",
  },
  {
    id: 7,
    src: "/0.jpg",
    alt: "Freshly baked Tabouna",
    className: "md:col-span-1 md:row-span-1 h-[300px]",
  },
]

export default function BentoGallery() {
  return (
    <section data-aos="fade-up" id="bento" className="bg-[#fbf4ea] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* الـ Header كيمـا العادة */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] text-amber-700 uppercase block mb-3">
            Visual Journey
          </span>
          <h2 className="font-serif text-5xl text-[#1c1917] tracking-wide">
            A feast for the eyes
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-12 h-[1px] bg-amber-700/30"></div>
            <span className="text-amber-700 text-xs">✦</span>
            <div className="w-12 h-[1px] bg-amber-700/30"></div>
          </div>
        </div>

        {/* 2. الـ Bento Grid الرئيسي */}
        {/* في الـ Mobile يجيو تحت بعضهم، وفي الـ Desktop يولي 3 أعمدة (grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 bg-zinc-100 ${item.className}`}
            >
              {/* التصويرة باستعمال next/image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-w-7xl) 33vw"
              />

              {/* الـ Dark Overlay يظهر بنعومة كي تعمل hover بالـ souris */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" />
              
              {/* النص اللي يظهر فوق التصويرة في الـ Hover */}
              <span className="absolute bottom-6 left-6 text-white font-serif text-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                {item.alt}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
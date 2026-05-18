import Image from "next/image"

const galleryItems = [ /**/ ]

export default function BentoGallery() {
  return (
    <section data-aos="fade-up" id="bento" className="bg-[#fbf4ea] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] text-amber-700 uppercase block mb-3">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] tracking-wide">
            A feast for the eyes
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-4">
            <div className="w-12 h-[1px] bg-amber-700/30"></div>
            <span className="text-amber-700 text-xs">✦</span>
            <div className="w-12 h-[1px] bg-amber-700/30"></div>
          </div>
        </div>

        {/* Mobile: عمود واحد — Tablet: 2 أعمدة — Desktop: 3 أعمدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {galleryItems.map((item) => (
            <div key={item.id}
              className={`relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 bg-zinc-100 ${item.className}`}
            >
              <Image src={item.src} alt={item.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6" />
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
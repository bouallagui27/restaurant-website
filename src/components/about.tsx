import Image from "next/image"

const About = () => {
  return (
    <div data-aos="fade-up" id="about" className='bg-[#fbf4ea] w-full flex justify-center items-center min-h-screen py-24 px-6'>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-12 md:gap-16 w-full">

        <div className="relative w-full md:w-[450px] h-[350px] md:h-[550px] shrink-0 rounded-xl overflow-hidden shadow-2xl">
          <Image src="/2.png" alt="La Table Restaurant" fill className="object-cover" priority />
        </div>

        <div className="flex flex-col border-b-2 border-b-red-700 pb-7 space-y-6 max-w-xl w-full">
          <span className="text-amber-700 uppercase tracking-[0.2em] text-xs font-semibold">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-900 leading-tight">
            Where heritage meets <span className="text-amber-600 italic font-light">hospitality</span>
          </h2>
          <p className="text-zinc-700 text-sm leading-relaxed font-light">
            Founded by Chef Slim Bouazizi, La Table is a love letter to his grandmother's kitchen in Sidi Bou Saïd. Every dish carries the rhythm of the medina — toasted spices, slow fire, and the unhurried joy of sharing a meal.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
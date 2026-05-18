import Image from 'next/image';
import Link from 'next/link';
import heroBg from '../../public/ee.jpg'; 
export default function HeroSection() {
  return (
    <section  className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-950">
      
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Tunisian luxury dining table"
          fill 
          className="object-cover transition-opacity duration-300" 
          priority 
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm" />

      <div data-aos="fade-up" className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
             <p className='text-[#a97320] -tracking-tighter uppercase'>Authentic Tunisian Cuisine</p>
       <h1  className="text-5xl md:text-7xl font-serif text-zinc-100 tracking-wide leading-tight max-w-2xl mx-auto text-wrap">
  A taste of <span className="text-amber-500 italic font-light ml-2">Tunisia</span>, served with soul.
</h1>

        <p className="font-navFont text-[11px] md:text-xs font-bold tracking-[0.3em] text-amber-600 uppercase mt-6">
          Authentic Tunisian Cuisine
        </p>

        <div className="flex items-center justify-center space-x-6 mt-10">
          <Link href="#res">
          <button className="bg-[#d79628] text-zinc-950 font-semibold px-10 py-3.5 hover:-translate-y-1  hover:shadow-amber-300 hover:shadow-2xl rounded-md transition-all transition duration-700 font-googleSans text-sm">
            Reserve a Table
          </button>
          </Link>
          <Link href="#menu">
          <button className="text-white border border-white/20 px-8 py-3 hover:opacity-80 rounded-md hover:border-white/50 transition-all font-googleSans text-sm">
            Discover Menu
          </button>
          </Link>
        </div>

      </div>

    </section>
  );
}
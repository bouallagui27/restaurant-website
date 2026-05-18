"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#bento", label: "Gallery" },
    { href: "#res", label: "Reserve" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full ull z-50 bg-transparent backdrop-blur-md border-b border-white/5 transition-all duration-300 z-50 bg-[#EDE0D4] border-b border-black/5 ${raleway.className}`}>
      <div className="max-w-7xl mx-auto px-10 mt-3 py-4 flex items-center justify-between">
        
       <div className="font-serif text-3xl tracking-wide select-none">
  <span className="text-[#1c1917] font-bold">L</span>
  
  <span className="text-[#1c1917] font-medium italic -ml-0.5">a</span>
  
  <span className="text-[#d97706] font-bold ml-1.5">Table</span>
</div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  text-xs tracking-widest uppercase font-semibold pb-1 transition-all duration-300
                  ${isActive
                    ? "text-red-800 border-b-2 border-red-800"
                    : "text-amber-950 border-b-2 border-transparent hover:text-red-800 hover:border-red-800"
                  }
                `}
              >
                {label}
              </Link>
            )
          })}

          {/* CTA Button */}
          <Link
            href="#res"
            className="bg-red-800 text-white text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-md hover:bg-red-900 transition-all duration-300"
          >
            Reserve
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
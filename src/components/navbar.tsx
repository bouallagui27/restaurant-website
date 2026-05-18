"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Raleway } from "next/font/google"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] })

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#bento", label: "Gallery" },
    { href: "#res", label: "Reserve" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-[#EDE0D4] border-b border-black/5 transition-all duration-300 ${raleway.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="font-serif text-3xl tracking-wide select-none">
          <span className="text-[#1c1917] font-bold">L</span>
          <span className="text-[#1c1917] font-medium italic -ml-0.5">a</span>
          <span className="text-[#d97706] font-bold ml-1.5">Table</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link key={href} href={href}
                className={`text-xs tracking-widest uppercase font-semibold pb-1 transition-all duration-300
                  ${isActive
                    ? "text-red-800 border-b-2 border-red-800"
                    : "text-amber-950 border-b-2 border-transparent hover:text-red-800 hover:border-red-800"
                  }`}
              >
                {label}
              </Link>
            )
          })}
          <Link href="#res"
            className="bg-red-800 text-white text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-md hover:bg-red-900 transition-all duration-300"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-amber-950" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#EDE0D4] border-t border-black/5 px-6 pb-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              onClick={() => setIsOpen(false)}
              className="text-xs tracking-widest uppercase font-semibold text-amber-950 hover:text-red-800 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link href="#res" onClick={() => setIsOpen(false)}
            className="bg-red-800 text-white text-xs tracking-widest uppercase font-semibold px-5 py-2.5 rounded-md text-center hover:bg-red-900 transition-all duration-300"
          >
            Reserve
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
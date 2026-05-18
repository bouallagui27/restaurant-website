import { Share2, MessageCircle, Send } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-[#141211] text-zinc-400 pt-20 pb-8 px-6 md:px-12 border-t border-zinc-800/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/40">
        
        <div className="md:col-span-5 space-y-6">
          <h2 className="font-serif text-2xl text-amber-500 tracking-wide">
            La<span className="text-white">Table</span>
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
            A modern home for the timeless flavors of Tunisia. Family-run, fire-cooked, and served with heart.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2.5 rounded border border-zinc-800 hover:border-amber-500 hover:text-white transition-all">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded border border-zinc-800 hover:border-amber-500 hover:text-white transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">Explore</h4>
          <ul className="space-y-2.5 text-sm font-light">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Reserve</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">Newsletter</h4>
          <p className="text-zinc-400 text-sm font-light">Recipes and event invites, once a month.</p>
          
          <div className="flex w-full max-w-sm">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-zinc-900/60 border border-zinc-800 rounded-l px-4 py-2.5 text-sm w-full focus:outline-none focus:border-amber-500 text-white placeholder-zinc-600"
            />
            <button className="bg-[#d49a3b] hover:bg-[#c3892c] text-zinc-950 px-4 rounded-r transition-colors flex items-center justify-center">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-zinc-500 space-y-4 md:space-y-0">
        <span>© 2026 La Table. Made with love in Tunis.</span>
        <div className="flex items-center space-x-1 text-amber-600/80">
          <span>★</span>
          <span className="text-zinc-400">Rated 4.9 on TripAdvisor</span>
        </div>
      </div>
    </footer>
  )
}
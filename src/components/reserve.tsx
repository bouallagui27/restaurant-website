"use client"
import { useState } from "react"
import { toast } from "sonner"
import { saveReservationToDB } from "@/app/action" 

export default function ReserveSection() {
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("2 guests")
  const [specialRequests, setSpecialRequests] = useState("")
  const [isPending, setIsPending] = useState(false)

  const handleReserveSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName || !phone || !date || !time || !guests) {
      toast.warning("Please fill in all required fields to continue.")
      return
    }

    setIsPending(true)

    const result = await saveReservationToDB({
      fullName,
      phone,
      date,
      time,
      guests,
      specialRequests,
    })

    setIsPending(false)

    if (result.success) {
      toast.success("Table booked successfully! We look forward to hosting you")
      setFullName("")
      setPhone("")
      setDate("")
      setTime("")
      setGuests("2 guests")
      setSpecialRequests("")
    } else {
toast.error("Failed to book table. Please try again or call us directly")    }
  }
return(
    <section id="res" className="relative bg-[#8b1e1e] py-24 px-6 md:px-12 text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[0.3em] text-amber-400 uppercase block mb-3">Reservations</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-wide mb-4">Book your table</h2>
          <p className="text-sm text-zinc-300 font-light tracking-wide">Reserve in seconds — we'll confirm within the hour.</p>
        </div>

        <div className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleReserveSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Full Name</label>
                <input type="text" placeholder="Your name" value={fullName} onChange={(e) => setFullName(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Phone</label>
                <input type="text" placeholder="+216 ..." value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Time</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Guests</label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer">
                  <option value="1 guest" className="bg-zinc-900">1 guest</option>
                  <option value="2 guests" className="bg-zinc-900">2 guests</option>
                  <option value="3 guests" className="bg-zinc-900">3 guests</option>
                  <option value="4 guests" className="bg-zinc-900">4 guests</option>
                  <option value="5+ guests" className="bg-zinc-900">5+ guests</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Special Requests (Optional)</label>
              <textarea rows={3} placeholder="Allergies, celebrations, seating..." value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="bg-black/20 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-zinc-500 resize-none focus:outline-none focus:border-amber-500 transition-colors" />
            </div>

            <div className="flex justify-center sm:justify-end pt-2">
              <button type="submit" disabled={isPending}
                className="w-full sm:w-auto bg-[#dca43a] hover:bg-[#c5912e] disabled:bg-zinc-500 text-neutral-900 font-sans text-xs font-bold tracking-[0.2em] uppercase py-3.5 px-8 rounded transition-colors shadow-lg">
                {isPending ? "Processing..." : "Confirm Reservation"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
)
}
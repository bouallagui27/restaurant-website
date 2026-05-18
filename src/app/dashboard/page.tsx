import { connectDB } from "@/lib/db"
import { Reservation } from "@/models/reservation"

export const revalidate = 0

async function getBookings() {
  try {
    await connectDB()
    const data = await Reservation.findAll({
      order: [['createdAt', 'DESC']],
      raw: true
    })
    return data
  } catch (error) {
    console.error("Failed to fetch bookings:", error)
    return []
  }
}

export default async function AdminDashboard() {
  const bookings = await getBookings()

  return (
    <div className="min-h-screen bg-[#11100f] text-[#fbf4ea] p-8 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="border-b border-white/10 pb-6">
          <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase block mb-2">
            Management Panel
          </span>
          <h1 className="font-serif text-4xl text-white tracking-wide">
            Reservations Dashboard
          </h1>
        </div>

        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-[11px] font-bold uppercase tracking-wider text-amber-500">
                  <th className="py-4 px-6">Full Name</th>
                  <th className="py-4 px-6">Phone Number</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Time</th>
                  <th className="py-4 px-6 text-center">Guests</th>
                  <th className="py-4 px-6">Special Requests</th>
                  <th className="py-4 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-zinc-500 font-light">
                      No reservations found in the database.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking: any) => (
                    <tr key={booking.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-4 px-6 font-medium text-white">{booking.fullName}</td>
                      <td className="py-4 px-6 text-zinc-400 font-mono">{booking.phone}</td>
                      <td className="py-4 px-6 text-zinc-300">{booking.date}</td>
                      <td className="py-4 px-6 text-zinc-300 font-mono">{booking.time}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full font-medium">
                          {booking.guests}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-zinc-400 font-light max-w-xs truncate" title={booking.specialRequests}>
                        {booking.specialRequests || "—"}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ● Confirmed
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
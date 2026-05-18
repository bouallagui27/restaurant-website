"use client"

import { useState } from "react"
import { toast } from "sonner" 
import emailjs from "@emailjs/browser" 

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all the required fields.")
      return
    }

    setIsPending(true)

    const serviceId = "service_etwgfxw"
    const templateId = "template_9v8fohv"
    const publicKey = "c76vG-eGptariS7xX"

   const templateParams = {
  name: name,       
  email: email,     
  subject: subject, 
  message: message, 
}

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast.success("Thank you! Your message has been sent to our email.")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast.error("Failed to send email. Please try again later.")
    } finally {
      setIsPending(false)
    }
  }

   return (
    <section className="bg-[#fbf4ea] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] text-amber-700 uppercase block mb-3">Visit Us</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] tracking-wide">Come say hello</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-sm bg-zinc-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.9744883461413!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIzLjQiTiAxMMKwMTAnNTMuNCJF!5e0!3m2!1sen!2stn!4v1640000000000!5m2!1sen!2stn"
                className="w-full h-full border-0 grayscale" loading="lazy" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f7eedc] p-5 rounded-lg">
                <span className="text-[10px] font-bold uppercase text-amber-800 block">Address</span>
                <p className="text-xs text-zinc-800">14 Rue de Carthage, Tunis</p>
              </div>
              <div className="bg-[#f7eedc] p-5 rounded-lg">
                <span className="text-[10px] font-bold uppercase text-amber-800 block">Phone</span>
                <p className="text-xs text-zinc-800">+216 71 234 567</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#f7eedc] p-6 sm:p-8 md:p-10 rounded-xl border border-amber-900/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-zinc-600">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    className="bg-white/60 border rounded px-4 py-2.5 text-sm" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-zinc-600">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/60 border rounded px-4 py-2.5 text-sm" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-zinc-600">Subject</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                  className="bg-white/60 border rounded px-4 py-2.5 text-sm" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-zinc-600">Message</label>
                <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/60 border rounded px-4 py-2.5 text-sm resize-none" />
              </div>
              <button type="submit" disabled={isPending}
                className="w-full bg-red-800 hover:bg-red-900 text-white font-sans text-xs font-bold py-3.5 rounded transition-colors disabled:bg-zinc-400">
                {isPending ? "Sending Email..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
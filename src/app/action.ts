// src/app/actions.ts
"use server" // <--- الفايل كامل توة يخدم سيرفر بأمان 100%

import { connectDB } from "@/lib/db"
import { Contact } from "@/models/contact"
import {Reservation} from "@/models/reservation"

export async function saveContactToDB(formData: { name: string; email: string; subject: string; message: string }) {
  try {
    await connectDB() // نثبتوا من الـ Connection
    
    await Contact.create({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    })

    return { success: true }
  } catch (error) {
    console.error("Database Error:", error)
    return { success: false, error: "فشل في تسجيل البيانات" }
  }
}





export async function saveReservationToDB(reservationData: {
  fullName: string
  phone: string
  date: string
  time: string
  guests: string
  specialRequests?: string
}) {
  try {
    await connectDB() // نثبتوا من الـ Connection مع الـ MySQL/PostgreSQL

    await Reservation.create({
      fullName: reservationData.fullName,
      phone: reservationData.phone,
      date: reservationData.date,
      time: reservationData.time,
      guests: reservationData.guests,
      specialRequests: reservationData.specialRequests || null,
    })

    return { success: true }
  } catch (error) {
    console.error("Reservation Database Error:", error)
    return { success: false, error: "فشل في تسجيل الحجز في قاعدة البيانات" }
  }
}
"use client"

import { useEffect } from "react"

export function useScrollPosition() {
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollY")
    if (saved) {
      window.scrollTo(0, parseInt(saved))
      sessionStorage.removeItem("scrollY")
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollY", window.scrollY.toString())
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])
}
"use client"
import Navbar from "../components/navbar";
import HeroSection from "@/components/her";
import About from "@/components/about";
import {useScrollPosition} from "@/components/ScrollToTopOnRefresh"
import MenuSection  from "@/components/menu";
import BentoGallery from "@/components/gallery"
import ContactSection from "@/components/contact"
import ReservationSection from "@/components/reserve"
import Footer from "@/components/footer"
export default function Home() {
  useScrollPosition()
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <MenuSection />
      <BentoGallery />
      <ReservationSection />
      <ContactSection />
      <Footer />

    </div>
  );
}

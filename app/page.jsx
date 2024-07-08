import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Info from "@/Components/Info";
import About from "@/Components/About";
import BookAppointment from "@/Components/BookAppointment";
import Reviews from "@/Components/Reviews";
import Doctors from "@/Components/Doctors";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <div className="home-section">
        <Navbar />
        <Hero />
        <Info />
        <About />
        <BookAppointment />
        <Reviews />
        <Doctors />
        <Footer />
      </div>
    </main>
  );
}

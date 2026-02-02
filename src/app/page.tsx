import Navbar from "@/components/Navbar";
import PortalLoader from "@/components/PortalLoader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PortalLoader />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Journey />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

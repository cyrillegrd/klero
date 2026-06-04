import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BackgroundBlobs from "../components/BackgroundBlobs";
import Problems from "../components/Problems";
import Refuge from "../components/Refuge";
import Companions from "../components/Companions";
import FAQ from "../components/FAQ";
import Beta from "../components/Beta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 via-white to-blue-50 text-slate-900">
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <Problems />
      <Refuge />
      <Companions />
      <FAQ />
      <Beta />
      <Footer />
    </main>
  );
}
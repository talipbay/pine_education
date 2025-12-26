import Hero from "@/components/hero";
import About from "@/components/about";
import Partners from "@/components/partners";
import Posts from "@/components/posts";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Partners />
      <Posts />
      <Contact />
      <Footer />
    </main>
  );
}

import { Footer, Header } from "@/components/layout";
import { AboutSection, HeroSection } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Header />
      <AboutSection />
      <Footer />
    </main>
  );
}

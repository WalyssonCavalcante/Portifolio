import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StarBackground } from "./components/StarBackground";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

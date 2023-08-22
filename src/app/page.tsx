import Features from "@/components/landing/features";
import GettingStarted from "@/components/landing/getting-started";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Getting Started Section */}
      <GettingStarted />
    </div>
  );
}

"use client";
import Features from "@/components/features";
import GettingStarted from "@/components/getting-started";
import Hero from "@/components/hero";

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

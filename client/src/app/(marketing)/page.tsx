import { Metadata } from "next";
import { title, description } from "@/siteConfig";

import LandingHero from "@/components/landing/LandingHero";
import { LandingSectionInfo } from "@/components/landing/LandingSectionInfo";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingFaqs } from "@/components/landing/LandingFaqs";

export const metadata: Metadata = {
  title,
  description,
};

export default async function Page() {
  return (
    <main>
      <div className="mx-auto py-20">
        <section
          id="hero"
          className="min-h-screen bg-[radial-gradient(hsl(0, 72%, 65%, 40%), hsl(24, 62%, 73%, 40%), hsl(var(--background))_60%)] items-center justify-center text-center text-balance flex flex-col gap-8 px-4"
        >
          <LandingHero />
        </section>
        <section id="feature-section">
          <LandingSectionInfo
            title="AI-Powered Financial Insights"
            description="Leverage advanced AI algorithms to gain deep insights into your financial habits, investment performance, and spending patterns. Make informed decisions with personalized recommendations tailored to your unique financial situation."
            reverseOrder={false}
          />
        </section>
        <section id="features">
          <LandingFeatures />
        </section>
        <section id="faqs">
          <LandingFaqs />
        </section>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparkleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import HeroImage from "@/assets/images/hero-img.png";
import HeroImageDark from "@/assets/images/hero-img-reverse.png";

interface LandingHeroProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  imageSrc?: string;
  showSecondaryButton?: boolean;
}

export const LandingHero = ({
  title = "Analyze. Plan. Grow",
  description = "💰 No more guesswork 🚀,Now make better financial decisions with your intelligent companion for financial success. Analyze, plan and grow your wealth with AI-powered insights",
  primaryButtonText = "Get Started",
  primaryButtonHref = "/signup",
  secondaryButtonText = "Know More",
  secondaryButtonHref = "/about-us",
  imageSrc = "/hero-image.png",
  showSecondaryButton = true,
}: LandingHeroProps) => {
  const [currentImage, setCurrentImage] = useState(HeroImage.src);
  const { theme } = useTheme();

  useEffect(() => {
    let imageToSet = HeroImage.src;

    if (theme === "system") {
      const systemTheme =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

      imageToSet = systemTheme === "dark" ? HeroImageDark.src : HeroImage.src;

      //   if (systemTheme === "light") {
      //     setCurrentImage(HeroImage.src);
      //   } else {
      //     setCurrentImage(HeroImageDark.src);
      //   }
    }
    if (theme === "light") {
      //   setCurrentImage(HeroImage.src);
      imageToSet = HeroImage.src;
    }

    if (theme === "dark") {
      //   setCurrentImage(HeroImageDark.src);
      imageToSet = HeroImageDark.src;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentImage(imageToSet);
  }, [theme]);

  return (
    <div className="flex flex-col items-center text-center">
      <Badge variant="secondary" className="w-fit mb-2">
        <SparkleIcon size={40} className="px-2" />
        Grow your wealth with AI-powered Insights
      </Badge>

      <Image
        src={currentImage}
        width={500}
        height={300}
        alt={description}
        className="mt-8"
        priority
      />

      <div className="space-y-8 space-x-4">
        <h1 className="text-4xl font-bold tracking-tighter text-black dark:text-white sm:text-4xl md:text-8xl lg:text-8xl/none">
          {title}
        </h1>
        <p className="mx-auto max-w-[1200px] my-4 text-gray-600 md:text-2xl dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="space-x-4 flex my-8 relative">
        <Link href={primaryButtonHref}>
          <ShimmerButton className="bg-primary text-primary-foreground hover:bg-primary/90">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              {primaryButtonText}
            </span>
          </ShimmerButton>
        </Link>
        {/* {showSecondaryButton && (
          <Link href={secondaryButtonHref}>
            <Button size="lg" variant="outline" className="m-4">
              {secondaryButtonText}
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default LandingHero;

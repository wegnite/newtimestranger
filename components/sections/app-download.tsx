"use client";
import { Button } from "@/components/ui/button";
import { PlaySquare, Star, Apple, Gamepad2, Monitor } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AppDownload() {
  const dict = useDictionary();
  const params = useParams();
  const isRTL = params.locale === "ar" || params.locale === "fa";

  const downloadOptions = [
    {
      ...dict.appDownload.downloadOptions.steam,
      icon: <Monitor className="h-8 w-8" />,
      link: dict.appDownload.downloadOptions.steam.link,
    },
    {
      ...dict.appDownload.downloadOptions.playstation,
      icon: <Gamepad2 className="h-8 w-8" />,
      link: dict.appDownload.downloadOptions.playstation.link,
    },
    {
      ...dict.appDownload.downloadOptions.xbox,
      icon: <Gamepad2 className="h-8 w-8" />,
      link: dict.appDownload.downloadOptions.xbox.link,
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      id="app-download"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {dict.appDownload.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.appDownload.subtitle}
          </p>
        </div>

        {/* Main Content - Left Right Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Video */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Game Preview</h3>
              <AspectRatio
                ratio={16 / 9}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.youtube.com/embed/iog8eM9JBv8"
                  title="Digimon Story Time Stranger Gameplay Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
              <p className="text-sm text-muted-foreground text-center">
                Watch the first part of our complete walkthrough to see the game
                in action
              </p>
            </div>
          </div>

          {/* Right Side - Download Options */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-2xl font-bold">
                    {dict.appDownload.stats.rating}
                  </span>
                </div>
                <div className="text-lg text-muted-foreground">
                  {dict.appDownload.stats.downloads}
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center lg:text-left">
                  Download Now
                </h3>
                {downloadOptions.map((option, index) => (
                  <div key={index}>
                    <Button
                      className={clsx(
                        "w-full h-14 transition-colors",
                        option.platform === "Steam"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : option.platform === "PlayStation Store"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-green-600 hover:bg-green-700"
                      )}
                      asChild
                    >
                      <Link
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <div className="text-white">{option.icon}</div>
                        <div className="text-white font-medium">
                          {option.description}
                        </div>
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-primary">
                    {dict.appDownload.features.organize.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {dict.appDownload.features.organize.description}
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-primary">
                    {dict.appDownload.features.story.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {dict.appDownload.features.story.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

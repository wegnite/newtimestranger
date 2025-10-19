"use client";

import { motion } from "framer-motion";

interface HeroImageWaterfallProps {
  screenshotAltTemplate?: string;
}

export function HeroImageWaterfall({
  screenshotAltTemplate,
}: HeroImageWaterfallProps) {
  const altTemplate =
    screenshotAltTemplate || "Digimon Story Time Stranger screenshot {num}";

  return (
    <motion.div
      animate={{
        y: [0, -400], // Adjust scroll distance if needed
      }}
      transition={{
        y: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      }}
      className="space-y-4"
    >
      {[2, 3, 4, 5, 6].map((num) => (
        <div
          key={num}
          className="relative aspect-[9/16] transform hover:scale-105 transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.5rem] p-2 shadow-xl">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full" />
            <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden bg-black">
              <img
                src={`/images/screenshot/unnamed${num}.jpg`}
                alt={altTemplate.replace("{num}", num.toString())}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
      {/* 复制第一张图片 */}
      <div className="relative aspect-[9/16] transform hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.5rem] p-2 shadow-xl">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-full" />
          <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden bg-black">
            <img
              src="/images/screenshot/unnamed2.jpg"
              alt={altTemplate.replace("{num}", "2")}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

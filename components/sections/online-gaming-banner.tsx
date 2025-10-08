"use client";

import React from "react";
import Link from "next/link";
import { type Locale } from "@/i18n";
import { ArrowRight, Play, Gamepad2 } from "lucide-react";

// u5b9au4e49u901au7528u5b57u5178u63a5u53e3
interface CommonDictionary {
  onlineGames: {
    bannerTitle: string;
    bannerDescription: string;
    playNowButton: string;
    featured?: string;
    viewAllGames?: string;
    levelCompletionText?: string;
  };
}

interface OnlineGamingBannerProps {
  lang: Locale;
  commonDict: CommonDictionary;
  className?: string;
}

export function OnlineGamingBanner({
  lang,
  commonDict,
  className = "",
}: OnlineGamingBannerProps) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className="max-w-5xl mx-auto bg-card shadow-sm rounded-xl overflow-hidden border border-border/60">
        <div className="relative flex flex-col sm:flex-row items-center justify-between px-6 py-5 sm:py-7 sm:px-8">
          {/* 左侧图标和内容区域 - 在移动端居中排列，桌面端左对齐 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 text-center sm:text-left mb-6 sm:mb-0">
            {/* 游戏图标 */}
            <div className="mb-4 sm:mb-0">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* 文本内容区域 */}
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {commonDict.onlineGames.bannerTitle}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {commonDict.onlineGames.bannerDescription}
              </p>
            </div>
          </div>

          {/* 右侧按钮区域 - 在移动端居中 */}
          <div className="flex-shrink-0">
            <Link
              href={`/${lang}/game`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full transition-colors duration-200 shadow-sm"
            >
              <Play className="w-4 h-4" />
              <span>{commonDict.onlineGames.playNowButton}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* 装饰点 */}
          <div className="absolute bottom-2 right-3 flex space-x-1 opacity-70">
            <div className="w-1 h-1 rounded-full bg-primary/40"></div>
            <div className="w-1 h-1 rounded-full bg-primary/60"></div>
            <div className="w-1 h-1 rounded-full bg-primary/80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

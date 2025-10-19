"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Download,
  Users,
  Clock,
  Play,
  Gamepad2,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface HeroProps {
  lang: string;
  heroDict: {
    badge: string;
    title: string;
    description: string;
    stats: {
      guides: string;
      videoTutorials: string;
      quickSearch: string;
    };
    search: {
      placeholder: string;
      button: string;
      error: {
        invalid: string;
        notFound: string;
      };
    };
    buttons: {
      browseAll: string;
      downloadGame: string;
    };
    downloadCard: {
      title: string;
      description: string;
    };
    mainScreenshotAlt?: string;
    videoSection: {
      title: string;
      description: string;
    };
    screenshotAltTemplate?: string;
    onlineGames?: {
      bannerTitle: string;
      bannerDescription: string;
      playNowButton: string;
    };
    imageModal?: {
      clickToEnlarge: string;
      closeImage: string;
      enlargedImageAlt: string;
    };
    gameFeatures?: {
      digimonCount: string;
      digimonLabel: string;
      chapterCount: string;
      chapterLabel: string;
      dualWorld: string;
      dualWorldLabel: string;
      timeTravel: string;
      timeTravelLabel: string;
    };
  };
  commonDict?: {
    onlineGames?: {
      bannerTitle: string;
      bannerDescription: string;
      playNowButton: string;
      featured?: string;
      viewAllGames?: string;
      levelCompletionText?: string;
    };
    [key: string]: any;
  };
}

export function Hero({ lang, heroDict, commonDict }: HeroProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onlineGamesText = commonDict?.onlineGames ||
    heroDict.onlineGames || {
      bannerTitle: "准备开始你的冒险？",
      bannerDescription: "在Steam上获取完整游戏，跟随我们的完整攻略",
      playNowButton: "立即购买",
    };

  const imageModalText = heroDict.imageModal || {
    clickToEnlarge: "点击放大",
    closeImage: "关闭图片",
    enlargedImageAlt: "放大查看的游戏截图",
  };

  const gameFeaturesText = heroDict.gameFeatures || {
    digimonCount: "450+",
    digimonLabel: "数码兽收集",
    chapterCount: "26+",
    chapterLabel: "章节攻略",
    dualWorld: "双世界",
    dualWorldLabel: "探索冒险",
    timeTravel: "时间穿越",
    timeTravelLabel: "史诗故事",
  };

  const screenshots = [
    {
      src: "/images/screenshot/unnamed1.jpg",
      alt: "Digimon Story Time Stranger screenshot 1",
    },
    {
      src: "/images/screenshot/unnamed2.jpg",
      alt: "Digimon Story Time Stranger screenshot 2",
    },
    {
      src: "/images/screenshot/unnamed3.jpg",
      alt: "Digimon Story Time Stranger screenshot 3",
    },
    {
      src: "/images/screenshot/unnamed4.jpg",
      alt: "Digimon Story Time Stranger screenshot 4",
    },
    {
      src: "/images/screenshot/unnamed5.jpg",
      alt: "Digimon Story Time Stranger screenshot 5",
    },
    {
      src: "/images/screenshot/unnamed6.jpg",
      alt: "Digimon Story Time Stranger screenshot 6",
    },
  ];

  return (
    <section className="relative pt-32 mb-12 bg-background">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* 游戏标题 */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {heroDict.title}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {heroDict.description}
            </p>
          </div>

          {/* 游戏特色 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">
                  {gameFeaturesText.digimonCount}
                </div>
                <div className="text-sm text-muted-foreground">
                  {gameFeaturesText.digimonLabel}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">
                  {gameFeaturesText.chapterCount}
                </div>
                <div className="text-sm text-muted-foreground">
                  {gameFeaturesText.chapterLabel}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">
                  {gameFeaturesText.dualWorld}
                </div>
                <div className="text-sm text-muted-foreground">
                  {gameFeaturesText.dualWorldLabel}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">
                  {gameFeaturesText.timeTravel}
                </div>
                <div className="text-sm text-muted-foreground">
                  {gameFeaturesText.timeTravelLabel}
                </div>
              </div>
            </div>
          </div>

          {/* 主要按钮 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`/${lang}/walkthrough`}>
                <BookOpen className="mr-2 h-5 w-5" />
                查看完整攻略
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`/${lang}/download`}>
                <Download className="mr-2 h-5 w-5" />
                游戏下载
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`/${lang}/digimon-list`}>
                <Users className="mr-2 h-5 w-5" />
                数码兽图鉴
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`/${lang}/videos`}>
                <Play className="mr-2 h-5 w-5" />
                完整视频
              </Link>
            </Button>
          </div>

          {/* 游戏截图展示 */}
          <div className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(screenshot.src)}
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    {/* 点击提示 */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {imageModalText.clickToEnlarge}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 图片放大模态框 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              aria-label={imageModalText.closeImage}
              title={imageModalText.closeImage}
            >
              <X className="h-6 w-6" />
            </button>

            {/* 放大图片 */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={imageModalText.enlargedImageAlt}
                width={1200}
                height={675}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Download,
  Users,
  Clock,
  Play,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  const onlineGamesText = commonDict?.onlineGames ||
    heroDict.onlineGames || {
      bannerTitle: "准备开始你的冒险？",
      bannerDescription: "在Steam上获取完整游戏，跟随我们的完整攻略",
      playNowButton: "立即购买",
    };

  return (
    <section className="relative py-12 bg-background">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* 游戏标签 */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-sm">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">
                {heroDict.badge}
              </span>
            </div>
          </div>

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
                <div className="font-bold text-foreground text-lg">450+</div>
                <div className="text-sm text-muted-foreground">数码兽收集</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">26+</div>
                <div className="text-sm text-muted-foreground">章节攻略</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">双世界</div>
                <div className="text-sm text-muted-foreground">探索冒险</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground text-lg">
                  时间穿越
                </div>
                <div className="text-sm text-muted-foreground">史诗故事</div>
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
              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed1.jpg"
                    alt="Digimon Story Time Stranger screenshot 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed2.jpg"
                    alt="Digimon Story Time Stranger screenshot 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed3.jpg"
                    alt="Digimon Story Time Stranger screenshot 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed4.jpg"
                    alt="Digimon Story Time Stranger screenshot 4"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed5.jpg"
                    alt="Digimon Story Time Stranger screenshot 5"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              <div className="relative group">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                  <Image
                    src="/images/screenshot/unnamed6.jpg"
                    alt="Digimon Story Time Stranger screenshot 6"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

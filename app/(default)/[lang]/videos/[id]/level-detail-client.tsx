import { ChevronLeft, ChevronRight, Home, Gamepad2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import levels, { LevelData } from "@/data/levels";
import { type Locale } from "@/i18n";
import { cn, getYouTubeVideoId } from "@/lib/utils";
import ShareButtons from "@/components/common/share-buttons";

interface LevelDetailProps {
  level: LevelData;
  dict: any;
  lang: Locale;
  pageUrl: string;
  nearbyLevelIds: number[];
}

export default function LevelDetailContent({
                                             level,
                                             dict,
                                             lang,
                                             pageUrl,
                                             nearbyLevelIds,
                                           }: LevelDetailProps) {
  const videoId = level.videoUrl.match(
      /(?:youtu\.be\/|watch\?v=|\/embed\/)([^&\s]+)/
  )?.[1];

  // Get previous and next level data
  const currentIndex = levels.findIndex(l => l.id === level.id);
  const previousLevel = currentIndex > 0 ? levels[currentIndex - 1] : null;
  const nextLevel = currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;

  // Prepare props for ShareButtons
  const shareTitle = `${dict.levelDetail.levelNumber || "Level"} ${
      level.id
  } - ${level.videoTitle}`;
  const shareLabel = dict.levelDetail.shareLabel || "Share this guide";
  const linkCopiedText = dict.levelDetail.linkCopiedText || "Link copied!";

  // Function to render previous/next level navigation items
  const renderNavigationItem = (levelData: LevelData, type: 'previous' | 'next') => {
    const thumbnailUrl = levelData.imgUrl ||
        `https://img.youtube.com/vi/${getYouTubeVideoId(levelData.videoUrl)}/maxresdefault.jpg`;

    const isPrevious = type === 'previous';
    const title = isPrevious ? "Previous Level" : "Next Level";

    return (
        <Link
            href={`/${lang}/videos/${levelData.id}`}
            className="block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="p-3 border-b border-border/60">
            <div className="flex items-center gap-2">
              {isPrevious ? (
                  <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-sm font-medium text-muted-foreground">
              {title}
            </span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-3">
              {thumbnailUrl && (
                  <div className="flex-shrink-0">
                    <img
                        src={thumbnailUrl}
                        alt={`${levelData.videoTitle} - Video thumbnail`}
                        className="w-16 h-12 object-cover rounded-md bg-muted"
                        loading="lazy"
                    />
                  </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate mb-1">
                  Level {levelData.id}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {levelData.videoTitle}
                </p>
              </div>
            </div>
          </div>
        </Link>
    );
  };

  return (
      <div className="bg-gradient-to-b from-background to-background/80 pb-16 mt-5">
        <div className="container mx-auto px-4 pt-12 md:pt-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <Link
                href={`/${lang}/videos`}
                className="hover:text-primary transition-colors inline-flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              {dict.levelDetail.breadcrumb.levelList}
            </Link>
            <span>/</span>
            <span className="text-foreground">
            {dict.levelDetail.levelNumber} {level.id}
          </span>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
            {/* Left Column (Main Content) */}
            <main className="lg:col-span-3 space-y-6">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold">
                Digimon Story Time Stranger {dict.levelDetail.levelNumber} {level.id}
              </h1>

              {/* Video Area */}
              <div className="relative aspect-[9/11] md:aspect-video rounded-xl overflow-hidden shadow-xl bg-black/90">
                {videoId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={level.videoTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                    />
                ) : (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800">
                      <p className="text-red-500">Invalid YouTube URL</p>
                    </div>
                )}
              </div>

              {/* Video Title Card */}
              <div className="bg-card rounded-xl p-4 md:p-6 shadow-md">
                <h2 className="text-xl font-bold mb-1">{level.videoTitle}</h2>
                {/* Optional: Add subtitle like in example if dict provides it */}
                <p className="text-sm text-muted-foreground">
                  {dict.levelDetail.solutionSubtitle || "Strategy Method"}
                </p>
              </div>

              {/* Share Buttons Integration */}
              <ShareButtons
                  pageTitle={shareTitle}
                  pageUrl={pageUrl}
                  shareLabel={shareLabel}
                  linkCopiedText={linkCopiedText}
              />
            </main>

            {/* Right Column (Sidebar) */}
            <aside className="lg:col-span-1 space-y-4 lg:pt-14">
              {" "}
              {/* Added padding-top for alignment */}

              {/* Previous/Next Level Navigation */}
              {(previousLevel || nextLevel) && (
                  <div className="space-y-3">
                    {previousLevel && renderNavigationItem(previousLevel, 'previous')}
                    {nextLevel && renderNavigationItem(nextLevel, 'next')}
                  </div>
              )}

              {/* Nearby Levels Section */}
              <div className="bg-card rounded-xl overflow-hidden shadow-md">
                <div className="p-3 border-b border-border/60 flex items-center justify-between">
                  <h3 className="font-medium text-base">
                    {dict.levelDetail.sidebar?.adjacentLevels ||
                        "Adjacent Levels"}
                  </h3>
                  <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-xs h-7 px-2"
                  >
                    <Link href={`/${lang}/videos`}>
                      {dict.levelDetail.sidebar?.allLevels || "All Levels"}
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-1.5 p-2">
                  {nearbyLevelIds.map((levelId) => (
                      <Link
                          key={levelId}
                          href={`/${lang}/videos/${levelId}`}
                          className={cn(
                              "flex items-center justify-center rounded-md border text-xs font-medium transition-colors px-1 p-5",
                              levelId === level.id
                                  ? "bg-primary/10 border-primary text-primary font-semibold"
                                  : "border-border/50 hover:bg-muted/60"
                          )}
                      >
                        {levelId}
                      </Link>
                  ))}
                </div>
              </div>
              {/* u5728u7ebfu6e38u620fu5165u53e3 */}
              <div className="bg-card rounded-xl overflow-hidden shadow-md mt-5">
                <div className="p-4 border-b border-border/60">
                  <h3 className="font-medium text-base">
                    {dict.levelDetail.sidebar?.playOnline ||
                        dict.common?.onlineGames?.bannerTitle ||
                        "u60f3u76f4u63a5u4f53u9a8cu6e38u620fuff1f"}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                      <Gamepad2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {dict.common?.onlineGames?.levelCompletionText ||
                          "在线游玩 Digimon Story Time Stranger！"}
                    </p>
                  </div>
                  <Button
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
                      asChild
                  >
                    <Link href={`/${lang}/game`}>
                      <Play className="h-4 w-4" />
                      <span>
                      {dict.common?.onlineGames?.playNowButton || "立即畅玩"}
                    </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
  );
}

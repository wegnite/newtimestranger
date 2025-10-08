"use client";

import { Card } from "@/components/ui/card";
import { Play, ExternalLink, Eye, Clock } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface DigimonVideo {
  id: string;
  title: string;
  titleEn?: string;
  channelName: string;
  views: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  category: "official" | "gameplay" | "tutorial" | "evolution" | "news";
  featured?: boolean;
}

const digimonVideos: DigimonVideo[] = [
  {
    id: "VIDEO_ID_1",
    title: "【新情報公開】「デジモンストーリー」の歴史を振り返ってみた",
    titleEn: "Digimon Story Series History Review",
    channelName: "デジモン公式チャンネル",
    views: "15万",
    duration: "19:38",
    publishedAt: "4个月前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_1/maxresdefault.jpg",
    category: "official",
    featured: true,
  },
  {
    id: "VIDEO_ID_2",
    title: "グレイモンと名の付くデジモン27種類まとめ",
    titleEn: "27 Types of Greymon Digimon Summary",
    channelName: "タイガのデジモンゆっくり解説",
    views: "39万",
    duration: "13:01",
    publishedAt: "3年前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_2/maxresdefault.jpg",
    category: "tutorial",
    featured: true,
  },
  {
    id: "VIDEO_ID_3",
    title: "【追加映像あり】新作ゲーム『デジモンストーリー タイムストレンジャー』PVを勝手に考察‼︎",
    titleEn: "New Game Preview Analysis - Time Stranger",
    channelName: "デジモン公式チャンネル",
    views: "6.7万",
    duration: "21:03",
    publishedAt: "7个月前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_3/maxresdefault.jpg",
    category: "news",
    featured: true,
  },
  {
    id: "VIDEO_ID_4",
    title: "Jellymon | All Evolution and Attacks",
    titleEn: "Jellymon Complete Evolution & Attacks",
    channelName: "MarkStar",
    views: "17万",
    duration: "3:46",
    publishedAt: "2年前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_4/maxresdefault.jpg",
    category: "evolution",
    featured: false,
  },
  {
    id: "VIDEO_ID_5",
    title: "【俺たち！デジモン宣伝部】最新作の制作現場に潜入！",
    titleEn: "Behind the Scenes - Latest Production",
    channelName: "デジモン公式チャンネル",
    views: "3万",
    duration: "38:00",
    publishedAt: "10天前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_5/maxresdefault.jpg",
    category: "official",
    featured: false,
  },
  {
    id: "VIDEO_ID_6",
    title: "【デジモン】超究極体たちの誕生と戦いの歴史",
    titleEn: "Ultra Level Digimon Battle History",
    channelName: "kine(カイン)のデジモン分析チャンネル",
    views: "25万",
    duration: "21:53",
    publishedAt: "3年前",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_6/maxresdefault.jpg",
    category: "tutorial",
    featured: false,
  },
];

const categoryColors = {
  official: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  gameplay: "bg-green-500/10 text-green-600 dark:text-green-400",
  tutorial: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  evolution: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  news: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
};

const categoryLabels = {
  official: "官方",
  gameplay: "实况",
  tutorial: "教程",
  evolution: "进化",
  news: "资讯",
};

interface DigimonVideoShowcaseProps {
  lang?: string;
  title?: string;
  subtitle?: string;
  showFeaturedOnly?: boolean;
}

export function DigimonVideoShowcase({
  lang = "zh",
  title = "数码宝贝精选视频",
  subtitle = "探索数码宝贝世界的精彩内容",
  showFeaturedOnly = false,
}: DigimonVideoShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<DigimonVideo | null>(
    digimonVideos.find((v) => v.featured) || digimonVideos[0]
  );

  const displayVideos = showFeaturedOnly
    ? digimonVideos.filter((v) => v.featured)
    : digimonVideos;

  const isRTL = lang === "ar" || lang === "fa";

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-primary/5 to-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Video Player */}
        {selectedVideo && (
          <div className="mb-8">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={clsx(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          categoryColors[selectedVideo.category]
                        )}
                      >
                        {categoryLabels[selectedVideo.category]}
                      </span>
                      {selectedVideo.featured && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                          精选
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {selectedVideo.title}
                    </h3>
                    {selectedVideo.titleEn && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {selectedVideo.titleEn}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {selectedVideo.channelName}
                    </p>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    title="在 YouTube 上观看"
                  >
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{selectedVideo.views}次观看</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedVideo.duration}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedVideo.publishedAt}</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVideos.map((video) => (
            <Card
              key={video.id}
              className={clsx(
                "group cursor-pointer overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg",
                selectedVideo?.id === video.id && "ring-2 ring-primary"
              )}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 group-hover:bg-white transition-colors">
                    <Play className="h-6 w-6 text-black fill-black" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-xs font-medium">
                  {video.duration}
                </div>
                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                      categoryColors[video.category]
                    )}
                  >
                    {categoryLabels[video.category]}
                  </span>
                </div>
                {video.featured && (
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/90 text-white backdrop-blur-sm">
                      精选
                    </span>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {video.channelName}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{video.views}</span>
                  </div>
                  <span>•</span>
                  <span>{video.publishedAt}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        {showFeaturedOnly && (
          <div className="text-center mt-8">
            <a
              href={`/${lang}/videos`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              查看更多视频
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

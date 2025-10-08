import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import levels from "@/data/levels";
import LevelDetailClient from "@/app/(default)/[lang]/level/[id]/level-detail-client";
import { ensureTrailingSlash } from "@/lib/utils";
import { LevelShowcase } from "@/components/sections/level-showcase";
import {OnlineGamingBanner} from "@/components/sections/online-gaming-banner";

// 为所有关卡生成静态路径
export async function generateStaticParams() {
  return levels.map((level) => ({
    id: level.id.toString(),
  }));
}

// 生成动态元数据
export async function generateMetadata({
                                         params,
                                       }: {
  params: { id: string };
}): Promise<Metadata> {
  const lang = 'en';
  const dict = await getDictionary(lang);
  const levelId = parseInt(params.id);

  if (isNaN(levelId)) {
    return {
      title: dict.levelDetail.meta.invalidId.title,
      description: dict.levelDetail.meta.invalidId.description,
    };
  }

  const level = levels.find((l) => l.id === levelId);

  if (!level) {
    return {
      title: dict.levelDetail.meta.notFound.title,
      description: dict.levelDetail.meta.notFound.description,
    };
  }

  return {
    title: `${dict.levelDetail.meta.title.replaceAll(
        "{{level}}",
        level.id.toString()
    )}`,
    description: `${
        level.videoTitle
    } - ${dict.levelDetail.meta.description.replaceAll(
        "{{level}}",
        level.id.toString()
    )}`,
    alternates: {
      canonical: ensureTrailingSlash(`/level/${level.id}`),
    },
  };
}

export default async function LevelDetailPage({
                                                params,
                                              }: {
  params: { id: string };
}) {
  const lang = 'en';
  const dict = await getDictionary(lang);
  const levelId = parseInt(params.id);

  if (isNaN(levelId)) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {dict.levelDetail.meta.invalidId.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            {dict.levelDetail.meta.invalidId.description}
          </p>
        </div>
    );
  }

  const level = levels.find((l) => l.id === levelId);

  if (!level) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {dict.levelDetail.meta.notFound.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            {dict.levelDetail.meta.notFound.description}
          </p>
        </div>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = siteUrl ? `${siteUrl}/level/${level.id}` : `/level/${level.id}`;

  // Calculate nearby level IDs
  const allLevelIds = levels.map((l) => l.id).sort((a, b) => a - b);
  const generateNearbyLevels = (currentLevelId: number, allLevelIds: number[], count: number = 15): number[] => {
    const currentIndex = allLevelIds.indexOf(currentLevelId);
    if (currentIndex === -1) return allLevelIds.slice(0, count);

    const totalLevelsCount = allLevelIds.length;
    const halfCount = Math.floor(count / 2);

    let startIndex = Math.max(0, currentIndex - halfCount);
    let endIndex = Math.min(totalLevelsCount, currentIndex + halfCount + 1);

    let currentCount = endIndex - startIndex;
    if (currentCount < count) {
      if (startIndex === 0) {
        endIndex = Math.min(totalLevelsCount, startIndex + count);
      } else if (endIndex === totalLevelsCount) {
        startIndex = Math.max(0, endIndex - count);
      }
    }

    return allLevelIds.slice(startIndex, endIndex);
  };

  const nearbyLevelIds = generateNearbyLevels(level.id, allLevelIds);

  // Extract YouTube video ID
  const youtubeVideoId = level.videoUrl.match(
      /(?:youtu\.be\/|watch\?v=|\/embed\/|v\/|\/v\/|\/e\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed(?:\/|%2F|%3Fv%3D)|videos(?:\/|%2F|%3Fv%3D)|user(?:\/|%2F))([^#&?\/"<\s]+)/
  )?.[1];

  const embedUrl = youtubeVideoId
      ? `https://www.youtube.com/embed/${youtubeVideoId}`
      : undefined;

  const getEasternTime = (date: Date): string => {
    const offset = -4 * 60;
    return new Date(date.getTime() + offset * 60000)
        .toISOString()
        .replace("Z", "-04:00");
  };

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.levelDetail.meta.siteName || "Drop Away Game Guide",
        logo: `${siteUrl}/logo.png`,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/level?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: dict.levelDetail.meta.siteName || "Drop Away Game Guide",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/logo.png`,
          url: `${siteUrl}/logo.png`,
        },
        description:
            dict.companyInfo?.sections?.about?.content ||
            dict.companyInfo?.subtitle ||
            "Your reliable source for Drop Away game guides and walkthroughs.",
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `${dict.levelDetail.meta.title.replaceAll(
            "{{level}}",
            level.id.toString()
        )}`,
        description: `${
            level.videoTitle
        } - ${dict.levelDetail.meta.description.replaceAll(
            "{{level}}",
            level.id.toString()
        )}`,
        inLanguage: lang,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        primaryImageOfPage: level.imgUrl
            ? {
              "@type": "ImageObject",
              "@id": `${siteUrl}${level.imgUrl}`,
              url: `${siteUrl}${level.imgUrl}`,
            }
            : undefined,
        video: {
          "@id": `${pageUrl}/#video`,
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${pageUrl}/#video`,
        name: level.videoTitle,
        description: level.videoTitle,
        thumbnailUrl: level.imgUrl
            ? [`${siteUrl}${level.imgUrl}`]
            : youtubeVideoId
                ? [`https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`]
                : [],
        contentUrl: level.videoUrl,
        embedUrl: embedUrl,
        uploadDate: level.uploadDate || getEasternTime(new Date()),
        isPartOf: {
          "@id": `${pageUrl}/#webpage`,
        },
      },
    ],
  };

  return (
      <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LevelDetailClient
            level={level}
            dict={dict}
            lang={lang}
            pageUrl={pageUrl}
            nearbyLevelIds={nearbyLevelIds}
        />
        <LevelShowcase
            lang={lang}
            levelShowcaseDict={dict.levelShowcase}
            commonDict={dict.common}
            levelId={level.id}
        />
        <OnlineGamingBanner
            lang={lang}
            commonDict={dict.common}
            className="py-8"
        />
      </>
  );
}

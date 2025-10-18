import { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import levels from "@/data/levels";
import LevelDetailClient from "./level-detail-client";
import { i18n, type Locale } from "@/i18n";
import { ensureTrailingSlash } from "@/lib/utils";
import { LevelShowcase } from "@/components/sections/level-showcase";
import {OnlineGamingBanner} from "@/components/sections/online-gaming-banner";

// 为所有语言和关卡组合生成静态路径
export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];

  // 为每种语言生成路径
  for (const lang of i18n.locales) {
    // 遍历所有关卡
    for (const level of levels) {
      paths.push({
        lang,
        id: level.id.toString(),
      });
    }
  }

  return paths;
}

// Helper function to generate nearby levels based on actual available level IDs
const generateNearbyLevels = (
    currentLevelId: number,
    allLevelIds: number[], // Accept sorted list of all available level IDs
    count: number = 15 // Default count for nearby levels
): number[] => {
  const currentIndex = allLevelIds.indexOf(currentLevelId);

  // Handle cases where currentLevelId might not be in the list (should not happen with valid data)
  if (currentIndex === -1) {
    console.warn(
        `Current level ID ${currentLevelId} not found in available levels.`
    );
    // Fallback: Try to find *some* levels around the target ID, even if not perfectly centered
    const fallbackLevels: number[] = [];
    const halfCountFallback = Math.floor(count / 2);
    let potentialStart = Math.max(1, currentLevelId - halfCountFallback);
    let addedCount = 0;
    // Search forwards from potential start
    let searchIndex = allLevelIds.findIndex((id) => id >= potentialStart);
    if (searchIndex === -1) searchIndex = allLevelIds.length - count; // If not found, start from end

    while (
        addedCount < count &&
        searchIndex < allLevelIds.length &&
        searchIndex >= 0
        ) {
      fallbackLevels.push(allLevelIds[searchIndex]);
      addedCount++;
      searchIndex++;
    }
    // If still not enough, try adding from before the potential start
    searchIndex = allLevelIds.findIndex((id) => id >= potentialStart) - 1; // index before potential start
    while (addedCount < count && searchIndex >= 0) {
      fallbackLevels.unshift(allLevelIds[searchIndex]); // Add to beginning
      addedCount++;
      searchIndex--;
    }

    return fallbackLevels.sort((a, b) => a - b).slice(0, count); // Sort and limit
  }

  const totalLevelsCount = allLevelIds.length;
  const halfCount = Math.floor(count / 2);

  // Calculate initial start and end indices
  let startIndex = Math.max(0, currentIndex - halfCount);
  let endIndex = Math.min(totalLevelsCount, currentIndex + halfCount + 1); // +1 because slice end index is exclusive

  // Adjust range if it's smaller than count due to hitting boundaries
  let currentCount = endIndex - startIndex;
  if (currentCount < count) {
    if (startIndex === 0) {
      // Hit the beginning, try to extend towards the end
      endIndex = Math.min(totalLevelsCount, startIndex + count);
    } else if (endIndex === totalLevelsCount) {
      // Hit the end, try to extend towards the beginning
      startIndex = Math.max(0, endIndex - count);
    }
    // Re-check and potentially adjust the *other* boundary if still too small
    currentCount = endIndex - startIndex; // update count after first adjustment
    if (currentCount < count) {
      if (startIndex > 0 && endIndex === totalLevelsCount) {
        // Can we extend start further left?
        startIndex = Math.max(0, endIndex - count);
      } else if (endIndex < totalLevelsCount && startIndex === 0) {
        // Can we extend end further right?
        endIndex = Math.min(totalLevelsCount, startIndex + count);
      }
    }
  }

  return allLevelIds.slice(startIndex, endIndex);
};

// 生成动态元数据
export async function generateMetadata({
                                         params,
                                       }: {
  params: { id: string; lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const levelId = parseInt(params.id);

  // 确保 levelId 是有效的数字
  if (isNaN(levelId)) {
    return {
      title: dict.levelDetail.meta.invalidId.title,
      description: dict.levelDetail.meta.invalidId.description,
    };
  }

  const level = levels.find((l) => l.id === levelId);

  if (!level) {
    console.error(`Level not found for ID: ${levelId}`);
    return {
      title: dict.levelDetail.meta.notFound.title,
      description: dict.levelDetail.meta.notFound.description,
    };
  }

  const metadata: Metadata = {
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
      canonical: ensureTrailingSlash(`/${params.lang}/videos/${level.id}`),
      languages: Object.fromEntries(
          i18n.locales.map((locale) => [
            locale,
            ensureTrailingSlash(`/${locale}/videos/${level.id}`),
          ])
      ),
    },
  };
  return metadata;
}

export default async function LevelDetailPage({
                                                params,
                                              }: {
  params: { id: string; lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  const levelId = parseInt(params.id);

  // 确保 levelId 是有效的数字
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
    console.error(`Level not found for ID: ${levelId}`);
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

  if (!dict.levelDetail) {
    console.error(`Dictionary not found for language: ${params.lang}`);
    return (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {dict.levelDetail.meta.langNotFound.title}
          </h1>
          <p className="text-muted-foreground mb-4">
            {dict.levelDetail.meta.langNotFound.description}
          </p>
        </div>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const pageUrl = siteUrl
      ? `${siteUrl}/${params.lang}/videos/${level.id}`
      : `/${params.lang}/videos/${level.id}`;

  // Calculate nearby level IDs using the actual list of IDs
  const allLevelIds = levels.map((l) => l.id).sort((a, b) => a - b); // Extract and sort IDs
  const nearbyLevelIds = generateNearbyLevels(level.id, allLevelIds); // Pass sorted IDs

  // Extract YouTube video ID
  const youtubeVideoId = level.videoUrl.match(
      /(?:youtu\.be\/|watch\?v=|\/embed\/|v\/|\/v\/|\/e\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed(?:\/|%2F|%3Fv%3D)|videos(?:\/|%2F|%3Fv%3D)|user(?:\/|%2F))([^#&?\/"<\s]+)/
  )?.[1];

  const embedUrl = youtubeVideoId
      ? `https://www.youtube.com/embed/${youtubeVideoId}`
      : undefined;

  // Prepare ItemList for nearby levels
  const nearbyLevelsItemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}/#nearby-levels`, // Unique ID for this specific list
    name: dict.levelDetail.breadcrumb?.levelList || "Nearby Levels", // Using breadcrumb.levelList or English fallback
    // Consider adding a description if relevant/available in dict
    numberOfItems: nearbyLevelIds.length,
    itemListElement: nearbyLevelIds.map((nearbyId, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${dict.levelDetail.levelNumber || "Level"} ${nearbyId}`,
      url: ensureTrailingSlash(`/${params.lang}/videos/${nearbyId}`),
    })),
  };

  const getEasternTime = (date: Date): string => {
    const offset = -4 * 60; // Eastern Daylight Time (EDT) is UTC-4
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
        name: dict.levelDetail.meta.siteName || "Digimon Story Time Stranger Game Guide",
        logo: `${siteUrl}/images/logo.webp`,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/${params.lang}/level?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: dict.levelDetail.meta.siteName || "Digimon Story Time Stranger Game Guide",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/images/logo.webp`,
          url: `${siteUrl}/images/logo.webp`,
        },
        description:
            dict.companyInfo?.sections?.about?.content ||
            dict.companyInfo?.subtitle ||
            "Your reliable source for Digimon Story Time Stranger game guides and walkthroughs.",
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
        inLanguage: params.lang,
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
          "@id": `${pageUrl}/#video`, // Reference to the VideoObject
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${pageUrl}/#video`,
        name: level.videoTitle,
        description: level.videoTitle, // Use video title for description
        // Updated thumbnailUrl logic with fallback to YouTube default thumbnail
        thumbnailUrl: level.imgUrl
            ? [`${siteUrl}${level.imgUrl}`] // Use local absolute URL if available
            : youtubeVideoId // Check if we have a video ID
                ? [`https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg`] // Use YouTube default thumbnail (hqdefault)
                : [], // Fallback to empty array only if no imgUrl AND no videoId
        contentUrl: level.videoUrl,
        embedUrl: embedUrl, // Use generated embed URL
        // Use level.uploadDate if available, otherwise fallback to current date (render time)
        uploadDate: level.uploadDate || getEasternTime(new Date()),
        isPartOf: {
          "@id": `${pageUrl}/#webpage`, // Link back to the WebPage
        },
      },
      // Add the nearby levels ItemList to the graph
      nearbyLevelsItemList,
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
            lang={params.lang}
            pageUrl={pageUrl}
            nearbyLevelIds={nearbyLevelIds}
        />
        <LevelShowcase
            lang={params.lang}
            levelShowcaseDict={dict.levelShowcase}
            commonDict={dict.common}
            levelId={level.id}
        />
        <OnlineGamingBanner
            lang={params.lang}
            commonDict={dict.common}
            className="py-8"
        />
      </>
  );
}

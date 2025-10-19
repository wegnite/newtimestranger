"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import levelsData from "@/data/levels";
import { type Locale } from "@/i18n";
import { cn, getYouTubeVideoId } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { levelRangeDefinitions } from "@/lib/levelRanges"; // Import shared definition
import styles from "./level-showcase.module.css"; // 导入CSS模块
import { ArrowRight, Gamepad2 } from "lucide-react"; // 导入图标

// 定义字典部分的预期结构
export interface LevelShowcaseDictionary {
  title: string;
  nav: {
    featured: string;
    rangePrefix: string; // 例如: "Level " 或 "第 "
    rangeSuffix: string; // 例如: "" 或 " 关"
  };
  card: {
    titlePrefix: string; // 例如: "Hole People Level "
  };
  showMoreButton: string;
  noLevelsFound: string;
  searchPlaceholder: string; // 搜索占位符
  searchNoResultsFound: string; // 搜索无结果时的消息 (例如: "未找到匹配 "{query}" 的关卡。")
}

// 定义通用字典接口
interface CommonDictionary {
  onlineGames: {
    bannerTitle: string;
    bannerDescription: string;
    playNowButton: string;
    featured: string;
    viewAllGames: string;
    levelCompletionText: string;
  };
}

// 定义组件的 props
interface LevelShowcaseProps {
  lang: Locale;
  levelShowcaseDict: LevelShowcaseDictionary; // 添加字典 prop
  commonDict: CommonDictionary; // 添加通用字典
  levelId?: number; // 可选的关卡ID参数，用于自动选择对应范围
}

export function LevelShowcase({
                                lang,
                                levelShowcaseDict,
                                commonDict,
                                levelId,
                              }: LevelShowcaseProps) {
  // Check for dictionary parts needed for
  if (!levelShowcaseDict?.nav?.rangePrefix) {
    console.error("LevelShowcase dictionary or rangePrefix text not provided!");
    return null;
  }

  // 生成范围数据，使用唯一的范围ID作为key
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const levelRangeData = useMemo(() => {
    return levelRangeDefinitions.map((range) => ({
      id: `${range.start}-${range.end}`, // 唯一标识符
      rangeValue: `${range.start}-${range.end}${levelShowcaseDict.nav.rangeSuffix}`,
      fullLabel: `${levelShowcaseDict.nav.rangePrefix}${range.start}-${range.end}${levelShowcaseDict.nav.rangeSuffix}`,
      start: range.start,
      end: range.end,
    }));
  }, [levelShowcaseDict.nav.rangePrefix, levelShowcaseDict.nav.rangeSuffix]);

  // 根据 levelId 自动找到对应的范围
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initialSelectedRangeId = useMemo(() => {
    if (levelId) {
      const targetRange = levelRangeData.find(
          (range) => levelId >= range.start && levelId <= range.end
      );
      return targetRange?.id || levelRangeData[0]?.id || "";
    }
    return levelRangeData[0]?.id || "";
  }, [levelId, levelRangeData]);

  // 使用范围ID作为状态值，而不是完整标签
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedRangeId, setSelectedRangeId] = useState(initialSelectedRangeId);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchQuery, setSearchQuery] = useState("");

  // 当 initialSelectedRangeId 变化时更新状态
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setSelectedRangeId(initialSelectedRangeId);
  }, [initialSelectedRangeId]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredLevels = useMemo(() => {
    let levels = levelsData;
    const trimmedSearchQuery = searchQuery.trim(); // Trim whitespace

    // 1. If there is a search query, filter *all* levels by search first.
    if (trimmedSearchQuery !== "") {
      // Use trimmed value
      const lowerCaseQuery = trimmedSearchQuery.toLowerCase(); // Use trimmed value
      levels = levelsData.filter(
          (level) =>
              level.id.toString().includes(lowerCaseQuery) ||
              level.videoTitle.toLowerCase().includes(lowerCaseQuery)
      );
    } else {
      // 2. If there is NO search query, filter by the selected range using ID
      const selectedRange = levelRangeData.find(
          (range) => range.id === selectedRangeId
      );

      if (selectedRange) {
        levels = levelsData.filter(
            (level) =>
                level.id >= selectedRange.start && level.id <= selectedRange.end
        );
      } else {
        // 如果未找到选中范围，显示警告并返回空数组
        console.warn(
            `Could not find range definition for ID: ${selectedRangeId}`
        );
        levels = [];
      }
    }

    return levels;
  }, [selectedRangeId, searchQuery, levelRangeData]);

  return (
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* 使用字典标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {levelShowcaseDict.title}
        </h2>

        {/* 搜索输入框 */}
        <div className="mb-8 max-w-md mx-auto">
          <Input
              type="text"
              placeholder={levelShowcaseDict.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        {/* Navigation Buttons - 使用CSS伪元素处理前缀 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {levelRangeData.map((rangeData) => (
              <button
                  key={rangeData.id}
                  onClick={() => {
                    setSelectedRangeId(rangeData.id);
                    setSearchQuery(""); // 清除搜索
                  }}
                  className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      styles.rangeButton, // 添加CSS模块类
                      selectedRangeId === rangeData.id
                          ? "bg-primary text-primary-foreground shadow"
                          : "bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border"
                  )}
                  data-prefix={levelShowcaseDict.nav.rangePrefix} // 使用data属性存储前缀
              >
                {rangeData.rangeValue}
              </button>
          ))}
        </div>

        {/* Level Grid - Remove conditional hiding logic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredLevels.map((level) => (
              <Link
                  key={level.id}
                  href={`/${lang}/videos/${level.id}`}
                  className={cn(
                      "group block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
                      styles.levelCard // 添加CSS模块类名
                  )}
              >
                <div className="relative aspect-[2/1.2]">
                  <img
                      src={
                          level.imgUrl ||
                          `https://img.youtube.com/vi/${getYouTubeVideoId(
                              level.videoUrl
                          )}/maxresdefault.jpg`
                      }
                      // alt={`${levelShowcaseDict.card.titlePrefix}${level.id} - ${level.videoTitle} `}
                      alt={`${level.videoTitle} - Video cover image`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                      className={cn(
                          "absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full shadow",
                          styles.levelBadge
                      )}
                      data-prefix="Level "
                  >
                    {level.id}
                  </div>
                </div>
                <div className="p-3">
                  <h3
                      className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary truncate"
                      data-prefix={levelShowcaseDict.card.titlePrefix} // 使用data属性存储前缀文本
                  >
                    {level.id}
                  </h3>
                </div>
              </Link>
          ))}
        </div>

        {/* No levels found message (logic remains similar) */}
        {filteredLevels.length === 0 && ( // 直接检查 filteredLevels 的长度
            <div className="text-center mt-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {
                  searchQuery // 如果搜索没有结果，显示不同的消息
                      ? levelShowcaseDict.searchNoResultsFound?.replace(
                      // Add optional chaining
                      "{query}",
                      searchQuery
                  ) || `No levels found matching "${searchQuery}".` // Provide fallback message
                      : levelShowcaseDict.noLevelsFound ||
                      "No levels found in this range." // Also add fallback here just in case
                }
              </p>

              {/* 添加在线游戏引导提示 */}
              <p className="text-primary mb-4">
                {commonDict.onlineGames.levelCompletionText}
              </p>
              <Link
                  href={`/${lang}/game`}
                  className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                {commonDict.onlineGames.playNowButton}
              </Link>
            </div>
        )}

        {/* Navigation Buttons - 使用CSS伪元素处理前缀 */}
        {/*<div className="flex flex-wrap justify-center gap-2 mb-10 mt-10">
          {levelRangeData.map((rangeData) => (
              <button
                  key={rangeData.id}
                  onClick={() => {
                    setSelectedRangeId(rangeData.id);
                    setSearchQuery(""); // 清除搜索
                  }}
                  className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      styles.rangeButton, // 添加CSS模块类
                      selectedRangeId === rangeData.id
                          ? "bg-primary text-primary-foreground shadow"
                          : "bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border"
                  )}
                  data-prefix={levelShowcaseDict.nav.rangePrefix} // 使用data属性存储前缀
              >
                {rangeData.rangeValue}
              </button>
          ))}
        </div>*/}
      </section>
  );
}

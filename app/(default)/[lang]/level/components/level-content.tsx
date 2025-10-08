"use client"; // Convert to Client Component

import React, { useState, useMemo, useEffect, Suspense } from "react"; // Import useState, useMemo, useEffect and Suspense
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import levels from "@/data/levels";
import { cn, getYouTubeVideoId } from "@/lib/utils";
import Link from "next/link";
import { type Locale } from "@/i18n"; // Need Locale type
import { levelRangeDefinitions } from "@/lib/levelRanges"; // Import shared definition
import styles from "./level-content.module.css"; // 导入CSS模块
import { useSearchParams } from "next/navigation";

// Define the structure of a single level if not already imported (assuming it might be needed)
interface LevelData {
  id: number;
  videoTitle: string;
  videoUrl: string;
  imgUrl: string;
}

// Define props passed from the parent page
interface LevelContentProps {
  lang: Locale;
  dict: any; // Use a more specific type if available
}

// Inner component that uses useSearchParams
function LevelContentInner({
                             lang,
                             dict,
                           }: LevelContentProps) {
  // Get search params from URL
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || undefined;
  const initialRangeParam = searchParams.get("range") || undefined;

  // Determine the initial active range string
  const initialSelectedRangeString = levelRangeDefinitions.find(
      (range) => `${range.start}-${range.end}` === initialRangeParam
  )
      ? initialRangeParam
      : "all"; // Default to "all" instead of first range

  // State for client-side interactions
  const [searchInput, setSearchInput] = useState(initialSearchTerm || "");
  const [selectedRange, setSelectedRange] = useState(
      initialSelectedRangeString
  );

  // Filter levels based on client-side state (searchInput, selectedRange)
  const filteredLevels = useMemo(() => {
    let currentLevels = levels;
    const trimmedSearchInput = searchInput.trim(); // Trim whitespace here

    // 1. Filter by search query if present (searches across all levels)
    if (trimmedSearchInput !== "") {
      // Use the trimmed value for check
      const lowerCaseQuery = trimmedSearchInput.toLowerCase(); // Use the trimmed value
      currentLevels = levels.filter(
          (level) =>
              level.id.toString().includes(lowerCaseQuery) || // Check ID
              level.videoTitle.toLowerCase().includes(lowerCaseQuery) // Check title
      );
    } else {
      // 2. Filter by selected range if search is empty
      if (selectedRange === "all") {
        // Show all levels when "all" is selected
        currentLevels = levels;
      } else {
        const selectedRangeDef = levelRangeDefinitions.find(
            (range) => `${range.start}-${range.end}` === selectedRange
        );
        if (selectedRangeDef) {
          currentLevels = levels.filter(
              (level) =>
                  level.id >= selectedRangeDef.start &&
                  level.id <= selectedRangeDef.end
          );
        } else {
          // Should not happen if selectedRange state is always valid
          console.warn(`Invalid selected range: ${selectedRange}`);
          currentLevels = [];
        }
      }
    }
    return currentLevels;
  }, [searchInput, selectedRange]); // Dependencies: client states

  return (
      <div className="container mx-auto px-4 mt-20">
        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{dict.level.title}</h1>
          <p className="text-muted-foreground">{dict.level.subtitle}</p>
        </div>

        {/* Search Input - Now controlled with real-time filtering */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
                type="text" // Changed to text for broader search
                placeholder={dict.level.searchPlaceholder}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} // Update state on change
                className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Range Navigation - Now Buttons updating state */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max p-2">
            {/* All Levels Button */}
            <Button
                key="all"
                variant={selectedRange === "all" && !searchInput ? "default" : "outline"}
                size="sm"
                className={cn(
                    "whitespace-nowrap transition-colors",
                    styles.rangeButton,
                    selectedRange !== "all" && "bg-background text-foreground hover:bg-muted"
                )}
                onClick={() => {
                  setSelectedRange("all");
                  setSearchInput(""); // Clear search when changing range
                }}
            >
              All
            </Button>

            {levelRangeDefinitions.map((range) => {
              const rangeString = `${range.start}-${range.end}`;
              const isActive = selectedRange === rangeString && !searchInput; // Active only if not searching
              return (
                  <Button // Changed from Link to Button
                      key={rangeString}
                      variant={isActive ? "default" : "outline"} // Use Button variants
                      size="sm" // Use Button size
                      className={cn(
                          "whitespace-nowrap transition-colors",
                          styles.rangeButton, // 添加CSS模块类
                          !isActive && "bg-background text-foreground hover:bg-muted"
                          // Removed border classes, rely on variant
                      )}
                      onClick={() => {
                        setSelectedRange(rangeString); // Update selected range state
                        setSearchInput(""); // Clear search when changing range
                      }}
                      data-prefix={dict.level.levelRange.start}
                      data-suffix={dict.level.levelRange.end}
                  >
                    {" "}
                    {range.start}-{range.end}{" "}
                  </Button>
              );
            })}
          </div>
        </div>

        {/* 关卡列表 - Updated grid columns for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredLevels.length > 0 ? (
              filteredLevels.map((level) => (
                  <Link href={`/${lang}/level/${level.id}`} key={level.id}>
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                      <div className="aspect-video relative">
                        <img
                            // Use level.imgUrl from data/levels.ts if available, otherwise fallback to YouTube thumbnail
                            src={
                                level.imgUrl ||
                                `https://img.youtube.com/vi/${getYouTubeVideoId(
                                    level.videoUrl
                                )}/maxresdefault.jpg`
                            }
                            alt={level.videoTitle} // Updated alt text
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="text-white flex items-center space-x-2">
                            <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div
                            className={cn(
                                "font-semibold text-lg mb-2",
                                styles.levelTitle
                            )}
                            data-prefix={dict.level.levelRange.start}
                            data-suffix={dict.level.levelRange.end}
                        >
                          {level.id}
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {level.videoTitle}
                        </p>
                      </div>
                    </div>
                  </Link>
              ))
          ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 md:col-span-2 lg:col-span-3">
                {/* Provide feedback based on search or range */}
                {searchInput
                    ? dict.level.searchNotFound ||
                    `Level matching "${searchInput}" not found.` // Updated fallback message
                    : dict.level.rangeNotFound || "No levels found in this range."}
              </p>
          )}
        </div>
      </div>
  );
}

// Export wrapped component with Suspense
export default function LevelContent(props: LevelContentProps) {
  return (
      <Suspense fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-40 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      }>
        <LevelContentInner {...props} />
      </Suspense>
  );
}

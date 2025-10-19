"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, BookOpen, Lock, ArrowRight, Search } from "lucide-react";
import mainStorylineData from "@/data/mainStoryline.json";
import { WalkthroughPost } from "@/lib/walkthrough";
import { type Locale } from "@/i18n";

interface WalkthroughProps {
  lang: Locale;
  walkthroughDict: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    viewAllButton: string;
    noResults: string;
    actions: {
      readWalkthrough: string;
      comingSoon: string;
    };
  };
  posts: WalkthroughPost[];
}

export function Walkthrough({
  lang,
  walkthroughDict,
  posts,
}: WalkthroughProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // 搜索所有章节，然后取前10个
  const filteredChapters = useMemo(() => {
    let chapters = mainStorylineData; // 搜索所有章节

    if (searchTerm.trim()) {
      chapters = chapters.filter((chapter) =>
        chapter.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return chapters.slice(0, 6); // 显示搜索结果的前10个
  }, [searchTerm]);

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "expert":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {walkthroughDict.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {walkthroughDict.subtitle}
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={walkthroughDict.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Chapters Grid */}
        {filteredChapters.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {filteredChapters.map((chapter) => {
              // 尝试从 posts 中找到对应的文章
              const correspondingPost = posts.find(
                (post) =>
                  post.slug.includes(
                    chapter.text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                  ) || post.title.includes(chapter.text)
              );

              const isAvailable = !!correspondingPost;
              const displayTitle = correspondingPost
                ? correspondingPost.title
                : chapter.text;
              const displayHref = isAvailable
                ? `/${lang}/walkthrough/${correspondingPost.slug}`
                : `/${lang}${chapter.href}`;

              return (
                <Card
                  key={chapter.number}
                  className={`transition-all duration-200 ${
                    isAvailable
                      ? "hover:shadow-lg"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-sm">
                        Chapter {chapter.number}
                      </Badge>
                      {!isAvailable && (
                        <Badge variant="secondary" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {displayTitle}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {isAvailable ? (
                      <Button asChild className="w-full">
                        <Link href={displayHref}>
                          <BookOpen className="h-4 w-4 mr-2" />
                          {walkthroughDict.actions.readWalkthrough}
                        </Link>
                      </Button>
                    ) : (
                      <div className="text-center py-4">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            Walkthrough in progress, stay tuned
                          </span>
                        </div>
                        <Button disabled className="w-full">
                          <Lock className="h-4 w-4 mr-2" />
                          {walkthroughDict.actions.comingSoon}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{walkthroughDict.noResults}</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={`/${lang}/walkthrough`}>
              <BookOpen className="mr-2 h-5 w-5" />
              {walkthroughDict.viewAllButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

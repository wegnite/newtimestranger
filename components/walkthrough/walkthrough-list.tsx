import Link from "next/link";
import { WalkthroughPost } from "@/lib/walkthrough";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, BookOpen, ArrowRight } from "lucide-react";

interface WalkthroughListProps {
  posts: WalkthroughPost[];
  lang: string;
}

export function WalkthroughList({ posts, lang }: WalkthroughListProps) {
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

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "main-storyline":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "side-quests":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No walkthrough guides found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Check back later for new guides!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {post.category && (
                <Badge className={getCategoryColor(post.category)}>
                  {post.category === "main-storyline"
                    ? "Main Storyline"
                    : "Side Quest"}
                </Badge>
              )}
              {post.chapter && (
                <Badge variant="outline">Chapter {post.chapter}</Badge>
              )}
              {post.difficulty && (
                <Badge className={getDifficultyColor(post.difficulty)}>
                  {post.difficulty.charAt(0).toUpperCase() +
                    post.difficulty.slice(1)}
                </Badge>
              )}
            </div>

            <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
          </CardHeader>

          <CardContent>
            {post.excerpt && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              {post.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString(
                      lang === "zh" ? "zh-CN" : "en-US"
                    )}
                  </span>
                </div>
              )}
              {post.estimatedTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.estimatedTime}</span>
                </div>
              )}
            </div>

            <Button asChild className="w-full">
              <Link href={`/${lang}/walkthrough/${post.slug}`}>
                Read Walkthrough
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

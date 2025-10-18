import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Lock } from "lucide-react";
import mainStorylineData from "@/data/mainStoryline.json";
import { WalkthroughPost } from "@/lib/walkthrough";

interface MainStorylineListProps {
  lang: string;
  posts: WalkthroughPost[];
}

export function MainStorylineList({ lang, posts }: MainStorylineListProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Digimon Story Time Stranger Walkthrough - Main Missions
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Complete walkthrough guide for all main story missions in Digimon
          Story Time Stranger
        </p>

        {/* Simplified SEO Content */}
        <div className="bg-card rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              Main Missions get added to your Digivice as you play through the
              game's story. Each mission provides objectives to help you
              navigate areas and progress the story.
            </p>
            <p>
              <strong>Estimated playtime:</strong> 40 hours for main missions,
              up to 50 hours including side quests and training.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mainStorylineData.map((chapter) => {
          // 尝试从 posts 中找到对应的文章
          const correspondingPost = posts.find(
            (post) =>
              post.slug.includes(
                chapter.text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
              ) || post.title.includes(chapter.text)
          );

          const isAvailable =
            correspondingPost || (chapter.href && chapter.href !== "");
          const displayTitle = correspondingPost
            ? correspondingPost.title
            : chapter.text;
          const displayHref = correspondingPost
            ? `/${lang}/walkthrough/${correspondingPost.slug}`
            : `/${lang}${chapter.href}`;

          return (
            <Card
              key={chapter.number}
              className={`transition-all duration-200 ${
                isAvailable
                  ? "hover:shadow-lg hover:scale-105"
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
                      Read Walkthrough
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
                      Coming Soon
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Progress Summary */}
      <div className="mt-8 bg-card rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-center text-foreground">
          Progress Summary
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {
                mainStorylineData.filter((chapter) => {
                  const correspondingPost = posts.find(
                    (post) =>
                      post.slug.includes(
                        chapter.text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                      ) || post.title.includes(chapter.text)
                  );
                  return (
                    correspondingPost || (chapter.href && chapter.href !== "")
                  );
                }).length
              }
            </div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {
                mainStorylineData.filter((chapter) => {
                  const correspondingPost = posts.find(
                    (post) =>
                      post.slug.includes(
                        chapter.text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
                      ) || post.title.includes(chapter.text)
                  );
                  return (
                    !correspondingPost && (!chapter.href || chapter.href === "")
                  );
                }).length
              }
            </div>
            <div className="text-sm text-muted-foreground">Coming Soon</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {mainStorylineData.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Chapters</div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Digimon Story Time Stranger Walkthrough - Main Missions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Complete walkthrough guide for all main story missions in Digimon
          Story Time Stranger
        </p>
      </div>

      {/* SEO Content Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            About Main Missions in Digimon Story Time Stranger
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Main Missions in <strong>Digimon Story Time Stranger</strong> get
              added to your Digivice as you play through the game&apos;s story. Each
              Main Mission provides a list of objectives to help you navigate
              through areas and progress the story.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How Long is the Story?
              </h4>
              <p>
                The Main Missions in{" "}
                <strong>Digimon Story Time Stranger</strong> are estimated to
                take around <strong>40 hours</strong> to complete. However, if
                you include time spent on doing Side Missions and training your
                Digimon to adequate levels, your playtime may reach up to{" "}
                <strong>50 hours</strong> long!
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Complete Walkthrough Guide
              </h4>
              <p>
                Our comprehensive{" "}
                <strong>Digimon Story Time Stranger walkthrough</strong> covers
                all 42 main story chapters, providing detailed step-by-step
                instructions, boss strategies, and tips to help you complete
                each mission efficiently. Whether you&apos;re a newcomer to the
                Digimon series or a veteran player, this guide will help you
                navigate through the time-traveling adventure.
              </p>
            </div>
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
                      <span className="text-sm">攻略制作中，敬请期待</span>
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
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Progress Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
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
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Available
            </div>
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
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Coming Soon
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {mainStorylineData.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Total Chapters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, BookOpen, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface WalkthroughLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  lang: string;
  subtitle?: string;
  date?: string;
  category?: "main-storyline" | "side-quests";
  difficulty?: "beginner" | "intermediate" | "advanced" | "expert";
  estimatedTime?: string;
  chapter?: number;
}

export function WalkthroughLayout({
  children,
  title,
  breadcrumbs = [],
  lang,
  subtitle,
  date,
  category,
  difficulty,
  estimatedTime,
  chapter,
}: WalkthroughLayoutProps) {
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

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <Link
                href={`/${lang}/walkthrough`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Walkthrough</span>
              </Link>
              {breadcrumbs.map((item, index) => (
                <div key={index} className="flex items-center gap-2 min-w-0">
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors min-w-0"
                    >
                      <span className="truncate block">{item.label}</span>
                    </Link>
                  ) : (
                    <span className="truncate block">{item.label}</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <Badge className={getCategoryColor(category)}>
                {category === "main-storyline"
                  ? "Main Storyline"
                  : "Side Quest"}
              </Badge>
            )}
            {chapter && <Badge variant="outline">Chapter {chapter}</Badge>}
            {difficulty && (
              <Badge className={getDifficultyColor(difficulty)}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>

          {subtitle && (
            <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(date).toLocaleDateString(
                    lang === "zh" ? "zh-CN" : "en-US"
                  )}
                </span>
              </div>
            )}
            {estimatedTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{estimatedTime}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>Walkthrough Guide</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card rounded-lg shadow-lg p-8">{children}</div>
      </div>
    </div>
  );
}

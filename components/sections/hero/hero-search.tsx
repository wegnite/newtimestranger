"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import levels from "@/data/levels";

// Define props interface
interface HeroSearchProps {
  lang: string;
  searchDict: {
    placeholder: string;
    button: string;
    error: {
      invalid: string;
      notFound: string;
    };
  };
}

export function HeroSearch({ lang, searchDict }: HeroSearchProps) {
  const [searchDay, setSearchDay] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  let length = levels.length;
  const handleSearch = () => {
    const levelNumber = parseInt(searchDay);
    if (isNaN(levelNumber) || levelNumber < 1 || levelNumber > length) {
      setError(searchDict.error.invalid);
      return;
    }

    const level = levels.find((level) => level.id === levelNumber);

    if (level) {
      router.push(`/${lang}/videos/${level.id}`);
    } else {
      setError(searchDict.error.notFound);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchDay}
            onChange={(e) => {
              setSearchDay(e.target.value);
              setError("");
            }}
            placeholder={searchDict.placeholder}
            className="w-full px-4 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onKeyDown={handleKeyDown}
          />
          {error && (
            <p className="absolute -bottom-6 left-0 text-sm text-red-500">
              {error}
            </p>
          )}
        </div>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
          onClick={handleSearch}
        >
          {searchDict.button} <Search className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

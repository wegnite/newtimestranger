"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Users } from "lucide-react";
import digimonList from "@/data/digimon-list.json";
import { type Locale } from "@/i18n";

interface DigimonData {
  "digimon-img-src": string;
  name: string;
  "digimon-details-link": string;
  Generation: string;
  "Attribute-text": string;
  "Attribute-img": string;
  type: string;
  Personality: string;
  location: string;
}

interface DigimonListProps {
  lang: Locale;
  digimonDict: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    viewAllButton: string;
    noResults: string;
    viewDetails: string;
  };
}

export function DigimonList({ lang, digimonDict }: DigimonListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // 搜索所有数码宝贝，然后取前10个
  const filteredDigimon = useMemo(() => {
    let digimon = digimonList; // 搜索所有数码宝贝

    if (searchTerm.trim()) {
      const lowerCaseQuery = searchTerm.toLowerCase();
      digimon = digimon.filter(
        (digimon: DigimonData) =>
          digimon.name.toLowerCase().includes(lowerCaseQuery) ||
          digimon.type.toLowerCase().includes(lowerCaseQuery) ||
          digimon["Attribute-text"].toLowerCase().includes(lowerCaseQuery) ||
          digimon.Personality.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return digimon.slice(0, 10); // 显示搜索结果的前10个
  }, [searchTerm]);

  const getAttributeColor = (attribute: string) => {
    switch (attribute.toLowerCase()) {
      case "fire":
        return "bg-red-500";
      case "water":
        return "bg-blue-500";
      case "plant":
        return "bg-green-500";
      case "electric":
        return "bg-yellow-500";
      case "earth":
        return "bg-orange-500";
      case "wind":
        return "bg-cyan-500";
      case "dark":
        return "bg-purple-500";
      case "light":
        return "bg-gray-300";
      default:
        return "bg-gray-500";
    }
  };

  const getGenerationColor = (generation: string) => {
    switch (generation.toLowerCase()) {
      case "rookie":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700";
      case "champion":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700";
      case "ultimate":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-700";
      case "mega":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-700";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {digimonDict.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {digimonDict.subtitle}
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={digimonDict.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Digimon Grid */}
        {filteredDigimon.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {filteredDigimon.map((digimon: DigimonData) => (
              <Card
                key={digimon.name}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="text-center space-y-3">
                    {/* Digimon Image */}
                    <div className="relative mx-auto w-16 h-16">
                      <img
                        src={digimon["digimon-img-src"]}
                        alt={`${digimon.name} Digimon`}
                        className="w-full h-full object-contain rounded-lg"
                        loading="lazy"
                      />
                      {/* Attribute Badge */}
                      <div
                        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getAttributeColor(
                          digimon["Attribute-text"]
                        )}`}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-sm truncate">
                      {digimon.name}
                    </h3>

                    {/* Generation Badge */}
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getGenerationColor(
                        digimon.Generation
                      )}`}
                    >
                      {digimon.Generation}
                    </div>

                    {/* Type */}
                    <p className="text-xs text-muted-foreground truncate">
                      {digimon.type}
                    </p>

                    {/* View Details Button */}
                    <Button asChild size="sm" className="w-full">
                      <Link
                        href={`/${lang}/digimon-list/${digimon.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {digimonDict.viewDetails}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{digimonDict.noResults}</p>
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
            <Link href={`/${lang}/digimon-list`}>
              <Users className="mr-2 h-5 w-5" />
              {digimonDict.viewAllButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

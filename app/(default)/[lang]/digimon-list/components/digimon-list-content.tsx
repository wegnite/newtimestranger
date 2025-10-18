"use client";
import { useState, useMemo, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";
import Link from "next/link";
import { type Locale } from "@/i18n";
import digimonList from "@/data/digimon-list.json";

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

interface DigimonListContentProps {
  lang: Locale;
  dict: any;
}

function DigimonListContentInner({ lang, dict }: DigimonListContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGeneration, setSelectedGeneration] = useState("all");
  const [selectedAttribute, setSelectedAttribute] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 获取所有唯一的筛选选项
  const generations = Array.from(
    new Set(digimonList.map((d) => d.Generation))
  ).sort();
  const attributes = Array.from(
    new Set(digimonList.map((d) => d["Attribute-text"]))
  ).sort();
  const types = Array.from(new Set(digimonList.map((d) => d.type))).sort();

  // 筛选数码宝贝
  const filteredDigimon = useMemo(() => {
    return digimonList.filter((digimon: DigimonData) => {
      const matchesSearch =
        searchTerm === "" ||
        digimon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        digimon.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        digimon.Personality.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesGeneration =
        selectedGeneration === "all" ||
        digimon.Generation === selectedGeneration;

      const matchesAttribute =
        selectedAttribute === "all" ||
        digimon["Attribute-text"] === selectedAttribute;

      const matchesType =
        selectedType === "all" || digimon.type === selectedType;

      return (
        matchesSearch && matchesGeneration && matchesAttribute && matchesType
      );
    });
  }, [searchTerm, selectedGeneration, selectedAttribute, selectedType]);

  // 获取进化阶段的颜色
  const getGenerationColor = (generation: string) => {
    switch (generation) {
      case "Mega":
        return "border-yellow-500 bg-yellow-500/10 text-yellow-600";
      case "Ultimate":
        return "border-purple-500 bg-purple-500/10 text-purple-600";
      case "Champion":
        return "border-blue-500 bg-blue-500/10 text-blue-600";
      case "Rookie":
        return "border-green-500 bg-green-500/10 text-green-600";
      case "In-Training I":
      case "In-Training II":
        return "border-gray-500 bg-gray-500/10 text-gray-600";
      default:
        return "border-gray-400 bg-gray-400/10 text-gray-500";
    }
  };

  // 获取属性的颜色
  const getAttributeColor = (attribute: string) => {
    switch (attribute) {
      case "Data":
        return "bg-blue-500";
      case "Vaccine":
        return "bg-green-500";
      case "Virus":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            {dict.digimonList.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dict.digimonList.subtitle}
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={dict.digimonList.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <Select
                value={selectedGeneration}
                onValueChange={setSelectedGeneration}
              >
                <SelectTrigger className="w-40">
                  <SelectValue
                    placeholder={dict.digimonList.filterGeneration}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {dict.digimonList.allGenerations}
                  </SelectItem>
                  {generations.map((gen) => (
                    <SelectItem key={gen} value={gen}>
                      {gen}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedAttribute}
                onValueChange={setSelectedAttribute}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={dict.digimonList.filterAttribute} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {dict.digimonList.allAttributes}
                  </SelectItem>
                  {attributes.map((attr) => (
                    <SelectItem key={attr} value={attr}>
                      {attr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={dict.digimonList.filterType} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {dict.digimonList.allTypes}
                  </SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {dict.digimonList.showingResults
                  .replace("{count}", filteredDigimon.length.toString())
                  .replace("{total}", digimonList.length.toString())}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digimon Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredDigimon.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  : "space-y-4"
              }
            >
              {filteredDigimon.map((digimon: DigimonData) => (
                <Card
                  key={digimon.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4">
                    {viewMode === "grid" ? (
                      // Grid View
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

                        {/* Personality */}
                        <p className="text-xs text-muted-foreground truncate">
                          {digimon.Personality}
                        </p>

                        {/* View Details Button */}
                        <Button asChild size="sm" className="w-full">
                          <Link
                            href={`/${lang}/digimon-list/${digimon.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {dict.digimonList.viewDetails}
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      // List View
                      <div className="flex items-center space-x-4">
                        {/* Digimon Image */}
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <img
                            src={digimon["digimon-img-src"]}
                            alt={`${digimon.name} Digimon`}
                            className="w-full h-full object-contain rounded"
                            loading="lazy"
                          />
                          <div
                            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getAttributeColor(
                              digimon["Attribute-text"]
                            )}`}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold truncate">
                              {digimon.name}
                            </h3>
                            <div
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getGenerationColor(
                                digimon.Generation
                              )}`}
                            >
                              {digimon.Generation}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{digimon.type}</span>
                            <span>{digimon.Personality}</span>
                            <span>{digimon["Attribute-text"]}</span>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <Button asChild size="sm">
                          <Link
                            href={`/${lang}/digimon-list/${digimon.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {dict.digimonList.viewDetails}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {dict.digimonList.noResults}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function DigimonListContent(props: DigimonListContentProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-48 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <DigimonListContentInner {...props} />
    </Suspense>
  );
}

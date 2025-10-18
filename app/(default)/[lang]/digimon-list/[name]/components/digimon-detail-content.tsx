"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Heart,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import Link from "next/link";
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

interface DigimonDetailContentProps {
  digimon: DigimonData;
  lang: Locale;
  dict: any;
}

export default function DigimonDetailContent({
  digimon,
  lang,
  dict,
}: DigimonDetailContentProps) {
  // 获取进化阶段的颜色
  const getGenerationColor = (generation: string) => {
    switch (generation) {
      case "Mega":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "Ultimate":
        return "bg-gradient-to-r from-purple-400 to-purple-600 text-white";
      case "Champion":
        return "bg-gradient-to-r from-blue-400 to-blue-600 text-white";
      case "Rookie":
        return "bg-gradient-to-r from-green-400 to-green-600 text-white";
      case "In-Training I":
      case "In-Training II":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
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

  // 获取性格的颜色
  const getPersonalityColor = (personality: string) => {
    const colors = [
      "bg-pink-500",
      "bg-indigo-500",
      "bg-cyan-500",
      "bg-orange-500",
      "bg-teal-500",
      "bg-lime-500",
      "bg-amber-500",
      "bg-emerald-500",
    ];
    const index = personality.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <Link
              href={`/${lang}/digimon-list`}
              className="hover:text-primary transition-colors inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {dict.digimonDetail.backToList}
            </Link>
            <span>/</span>
            <span className="text-foreground">{digimon.name}</span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Basic Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6 text-center">
                  {/* Digimon Image */}
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <img
                      src={digimon["digimon-img-src"]}
                      alt={`${digimon.name} Digimon`}
                      className="w-full h-full object-contain"
                    />
                    {/* Attribute Badge */}
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${getAttributeColor(
                        digimon["Attribute-text"]
                      )} flex items-center justify-center`}
                    >
                      <img
                        src={digimon["Attribute-img"]}
                        alt={digimon["Attribute-text"]}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h1 className="text-3xl font-bold mb-4">{digimon.name}</h1>

                  {/* Generation Badge */}
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-semibold mb-4 ${getGenerationColor(
                      digimon.Generation
                    )}`}
                  >
                    {digimon.Generation}
                  </div>

                  {/* External Link */}
                  <Button asChild className="w-full">
                    <Link
                      href={digimon["digimon-details-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {dict.digimonDetail.viewOfficialDetails}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    {dict.digimonDetail.basicInformation}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        {dict.digimonDetail.type}
                      </label>
                      <div className="mt-1">
                        <Badge
                          variant="outline"
                          className="text-base px-3 py-1"
                        >
                          {digimon.type}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        {dict.digimonDetail.attribute}
                      </label>
                      <div className="mt-1 flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full ${getAttributeColor(
                            digimon["Attribute-text"]
                          )}`}
                        />
                        <Badge
                          variant="outline"
                          className="text-base px-3 py-1"
                        >
                          {digimon["Attribute-text"]}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        {dict.digimonDetail.personality}
                      </label>
                      <div className="mt-1">
                        <Badge
                          variant="outline"
                          className={`text-base px-3 py-1 ${getPersonalityColor(
                            digimon.Personality
                          )} text-white`}
                        >
                          {digimon.Personality}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        {dict.digimonDetail.generation}
                      </label>
                      <div className="mt-1">
                        <Badge
                          variant="outline"
                          className={`text-base px-3 py-1 ${getGenerationColor(
                            digimon.Generation
                          )}`}
                        >
                          {digimon.Generation}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {dict.digimonDetail.locationAcquisition}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-base leading-relaxed">
                      {digimon.location}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    {dict.digimonDetail.additionalInformation}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <h3 className="font-semibold">
                          {dict.digimonDetail.evolutionStage}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {digimon.Generation}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <h3 className="font-semibold">
                          {dict.digimonDetail.attribute}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {digimon["Attribute-text"]}
                        </p>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h3 className="font-semibold">
                          {dict.digimonDetail.personality}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {digimon.Personality}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>{dict.digimonDetail.relatedActions}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link href={`/${lang}/digimon-list`}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {dict.digimonDetail.backToList}
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/${lang}/walkthrough`}>
                        {dict.digimonDetail.viewWalkthrough}
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/${lang}/download`}>
                        {dict.digimonDetail.downloadGame}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

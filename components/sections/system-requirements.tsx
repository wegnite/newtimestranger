"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Cpu, HardDrive, MemoryStick } from "lucide-react";

export default function SystemRequirements() {
  const requirements = {
    minimum: {
      os: "Windows 10 / Windows 11",
      processor: "Intel Core i5-8400 / AMD Ryzen5 3600",
      memory: "8 GB RAM",
      graphics:
        "Nvidia GeForce GTX 970 [4 GB] / AMD Radeon RX 580 [8 GB] / Intel Arc A580 [8 GB]",
      storage: "27 GB available space",
    },
    recommended: {
      os: "Windows 10 / Windows 11",
      processor: "Intel Core i7-11700K / AMD Ryzen7 3700X",
      memory: "16 GB RAM",
      graphics:
        "Nvidia GeForce GTX 980 [4 GB] / AMD Radeon RX Vega 56 [8 GB] / Intel Arc A580 [8 GB]",
      storage: "27 GB available space",
    },
  };

  const RequirementCard = ({
    title,
    requirements,
    icon,
  }: {
    title: string;
    requirements: any;
    icon: React.ReactNode;
  }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <Monitor className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <span className="font-medium">OS:</span> {requirements.os}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Cpu className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <span className="font-medium">Processor:</span>{" "}
            {requirements.processor}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <MemoryStick className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <span className="font-medium">Memory:</span> {requirements.memory}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Monitor className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <span className="font-medium">Graphics:</span>{" "}
            {requirements.graphics}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <HardDrive className="h-4 w-4 mt-1 text-muted-foreground" />
          <div>
            <span className="font-medium">Storage:</span> {requirements.storage}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            System Requirements
          </h2>
          <p className="text-lg text-muted-foreground">
            Make sure your system meets the requirements for the best gaming
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <RequirementCard
            title="Minimum Requirements"
            requirements={requirements.minimum}
            icon={<div className="w-3 h-3 bg-yellow-500 rounded-full" />}
          />
          <RequirementCard
            title="Recommended Requirements"
            requirements={requirements.recommended}
            icon={<div className="w-3 h-3 bg-green-500 rounded-full" />}
          />
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Installation Guide:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li>Click the download link for your preferred platform above</li>
            <li>Follow the store&apos;s purchase/download process</li>
            <li>Download and run the installation file</li>
            <li>Follow the installation wizard instructions</li>
            <li>Launch the game and start your adventure!</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

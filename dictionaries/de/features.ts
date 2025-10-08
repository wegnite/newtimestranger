export const features = {
  title: "Schlüsselfunktionen",
  subtitle:
    "Entdecken Sie die leistungsstarken Fähigkeiten, die DeepSeek V3 auszeichnen",
  items: [
    {
      title: "Fortschrittliche MoE-Architektur",
      description:
        "Revolutionäres 671B-Parametermodell mit nur 37B aktivierten Parametern pro Token, erzielt optimale Effizienz durch innovatives Load Balancing",
      iconName: "Brain",
      details: [
        "Multi-head Latent Attention (MLA)",
        "Load Balancing ohne Hilfsverlust (Auxiliary-loss-free load balancing)",
        "DeepSeekMoE-Architektur",
        "Multi-Token-Vorhersageziel (Multi-token prediction objective)",
      ],
    },
    {
      title: "Spitzenleistung",
      description:
        "Außergewöhnliche Ergebnisse über mehrere Benchmarks hinweg, einschließlich MMLU (87,1%), BBH (87,5%) und mathematischen Schlussfolgerungsaufgaben",
      iconName: "Gauge",
      details: [
        "Top-Ergebnisse bei Programmierwettbewerben",
        "Fortgeschrittene mathematische Berechnungen",
        "Mehrsprachige Fähigkeiten",
        "Komplexe Schlussfolgerungsaufgaben",
      ],
    },
    {
      title: "Effizientes Training",
      description:
        "Bahnbrechender Trainingsansatz, der nur 2,788 Mio. H800-GPU-Stunden erfordert, mit bemerkenswerter Kosteneffizienz von 5,5 Mio. USD",
      iconName: "Cpu",
      details: [
        "FP8 Mixed-Precision-Training",
        "Optimiertes Trainings-Framework",
        "Stabiler Trainingsprozess",
        "Keine Rollbacks erforderlich",
      ],
    },
    {
      title: "Vielseitige Bereitstellung",
      description:
        "Mehrere Bereitstellungsoptionen unterstützen NVIDIA-, AMD-GPUs und Huawei Ascend NPUs für flexible Integration",
      iconName: "Globe2",
      details: [
        "Bereit für Cloud-Bereitstellung",
        "Unterstützung für lokale Inferenz",
        "Mehrere Hardware-Plattformen",
        "Optimierte Bereitstellungsoptionen",
      ],
    },
    {
      title: "Fortgeschrittene Programmierfähigkeiten",
      description:
        "Überlegene Leistung bei Programmieraufgaben, hervorragend sowohl bei Wettbewerbsprogrammierung als auch in realen Entwicklungsszenarien",
      iconName: "Code",
      details: [
        "Mehrsprachige Unterstützung",
        "Code-Vervollständigung",
        "Fehlererkennung",
        "Code-Optimierung",
      ],
    },
    {
      title: "Unternehmenssichere Sicherheit",
      description:
        "Umfassende Sicherheitsmaßnahmen und Compliance-Funktionen für Unternehmensbereitstellung und -integration",
      iconName: "Shield",
      details: [
        "Zugriffskontrolle",
        "Datenverschlüsselung",
        "Audit-Protokollierung",
        "Compliance-bereit",
      ],
    },
    {
      title: "Umfangreiche Trainingsdaten",
      description:
        "Vortrainiert auf 14,8 Billionen vielfältigen und hochwertigen Tokens, was breites Wissen und Fähigkeiten gewährleistet",
      iconName: "Database",
      details: [
        "Vielfältige Datenquellen",
        "Qualitätsgefilterte Inhalte",
        "Mehrere Domänen",
        "Regelmäßige Updates",
      ],
    },
    {
      title: "Innovationsführerschaft",
      description:
        "Wegweisende Fortschritte in der KI-Technologie durch offene Zusammenarbeit und kontinuierliche Innovation",
      iconName: "Sparkles",
      details: [
        "Forschungsführerschaft",
        "Offene Zusammenarbeit",
        "Community-getrieben",
        "Regelmäßige Verbesserungen",
      ],
    },
  ],
} as const;

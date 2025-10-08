export const features = {
  title: "Fonctionnalités clés",
  subtitle: "Découvrez les capacités puissantes qui distinguent DeepSeek V3",
  items: [
    {
      title: "Architecture MoE avancée",
      description:
        "Un modèle révolutionnaire de 671B paramètres activant seulement 37B par jeton, atteignant une efficacité optimale grâce à un équilibrage de charge innovant",
      iconName: "Brain",
      details: [
        "Multi-head Latent Attention (MLA)",
        "Équilibrage de charge sans perte auxiliaire",
        "Architecture DeepSeekMoE",
        "Objectif de prédiction multi-jetons",
      ],
    },
    {
      title: "Performances de pointe",
      description:
        "Résultats exceptionnels dans divers benchmarks, y compris MMLU (87,1 %), BBH (87,5 %) et les tâches de raisonnement mathématique",
      iconName: "Gauge",
      details: [
        "Meilleurs scores dans les compétitions de codage",
        "Calculs mathématiques avancés",
        "Capacités multilingues",
        "Tâches de raisonnement complexes",
      ],
    },
    {
      title: "Entraînement efficace",
      description:
        "Approche d'entraînement révolutionnaire nécessitant seulement 2,788 millions d'heures GPU H800, avec une rentabilité remarquable de 5,5 millions de dollars",
      iconName: "Cpu",
      details: [
        "Entraînement en précision mixte FP8",
        "Système d'entraînement optimisé",
        "Processus d'entraînement stable",
        "Aucun retour en arrière requis",
      ],
    },
    {
      title: "Déploiement flexible",
      description:
        "Plusieurs options de déploiement avec prise en charge des GPU NVIDIA, AMD et des NPU Huawei Ascend pour une intégration polyvalente",
      iconName: "Globe2",
      details: [
        "Prêt pour le déploiement dans le cloud",
        "Prise en charge de l'inférence sur site",
        "Plateformes matérielles multiples",
        "Options de service optimisées",
      ],
    },
    {
      title: "Capacités de codage avancées",
      description:
        "Performances supérieures dans les tâches de programmation, excellant à la fois en programmation compétitive et dans les scénarios de développement réels",
      iconName: "Code",
      details: [
        "Prise en charge multilingue",
        "Auto-complétion du code",
        "Détection des erreurs",
        "Optimisation du code",
      ],
    },
    {
      title: "Sécurité de niveau entreprise",
      description:
        "Mesures de sécurité complètes et fonctionnalités de conformité pour le déploiement et l'intégration en entreprise",
      iconName: "Shield",
      details: [
        "Contrôle d'accès",
        "Chiffrement des données",
        "Journalisation d'audit",
        "Prêt pour la conformité",
      ],
    },
    {
      title: "Données d'entraînement étendues",
      description:
        "Pré-entraîné sur 14,8 trillions de jetons diversifiés et de haute qualité, garantissant des connaissances et des capacités étendues",
      iconName: "Database",
      details: [
        "Sources de données diverses",
        "Contenu filtré par qualité",
        "Domaines multiples",
        "Mises à jour régulières",
      ],
    },
    {
      title: "Leadership en innovation",
      description:
        "Pionnier des avancées dans la technologie de l'IA grâce à la collaboration ouverte et à l'innovation continue",
      iconName: "Sparkles",
      details: [
        "Leadership en recherche",
        "Collaboration ouverte",
        "Axé sur la communauté",
        "Améliorations régulières",
      ],
    },
  ],
} as const;

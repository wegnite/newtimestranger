export const features = {
  title: "Características Clave",
  subtitle:
    "Descubre las potentes capacidades que hacen destacar a DeepSeek V3",
  items: [
    {
      title: "Arquitectura MoE Avanzada",
      description:
        "Revolucionario modelo de 671B parámetros con solo 37B activados por token, logrando una eficiencia óptima a través de un innovador balanceo de carga",
      iconName: "Brain",
      details: [
        "Multi-head Latent Attention (MLA)",
        "Balanceo de carga sin pérdida auxiliar",
        "Arquitectura DeepSeekMoE",
        "Objetivo de predicción multi-token",
      ],
    },
    {
      title: "Rendimiento de Vanguardia",
      description:
        "Resultados excepcionales en múltiples benchmarks, incluyendo MMLU (87.1%), BBH (87.5%) y tareas de razonamiento matemático",
      iconName: "Gauge",
      details: [
        "Puntuaciones máximas en competiciones de codificación",
        "Cálculo matemático avanzado",
        "Capacidades multilingües",
        "Tareas de razonamiento complejas",
      ],
    },
    {
      title: "Entrenamiento Eficiente",
      description:
        "Innovador enfoque de entrenamiento que requiere solo 2.788M de horas de GPU H800, con una notable eficiencia de costes de $5.5M",
      iconName: "Cpu",
      details: [
        "Entrenamiento de precisión mixta FP8",
        "Framework de entrenamiento optimizado",
        "Proceso de entrenamiento estable",
        "No se requieren retrocesos",
      ],
    },
    {
      title: "Despliegue Versátil",
      description:
        "Múltiples opciones de despliegue compatibles con GPUs NVIDIA, AMD y NPUs Huawei Ascend para una integración flexible",
      iconName: "Globe2",
      details: [
        "Listo para despliegue en la nube",
        "Soporte para inferencia local",
        "Múltiples plataformas de hardware",
        "Opciones de servicio optimizadas",
      ],
    },
    {
      title: "Capacidades de Codificación Avanzadas",
      description:
        "Rendimiento superior en tareas de programación, destacando tanto en codificación competitiva como en escenarios de desarrollo del mundo real",
      iconName: "Code",
      details: [
        "Soporte multi-idioma",
        "Autocompletado de código",
        "Detección de errores",
        "Optimización de código",
      ],
    },
    {
      title: "Seguridad Preparada para Empresas",
      description:
        "Medidas de seguridad integrales y características de cumplimiento para el despliegue e integración empresarial",
      iconName: "Shield",
      details: [
        "Control de acceso",
        "Cifrado de datos",
        "Registro de auditoría",
        "Listo para cumplimiento",
      ],
    },
    {
      title: "Datos de Entrenamiento Extensos",
      description:
        "Pre-entrenado en 14.8T de tokens diversos y de alta calidad, garantizando un amplio conocimiento y capacidades",
      iconName: "Database",
      details: [
        "Fuentes de datos diversas",
        "Contenido filtrado por calidad",
        "Múltiples dominios",
        "Actualizaciones regulares",
      ],
    },
    {
      title: "Liderazgo en Innovación",
      description:
        "Avances pioneros en tecnología de IA a través de la colaboración abierta y la innovación continua",
      iconName: "Sparkles",
      details: [
        "Liderazgo en investigación",
        "Colaboración abierta",
        "Impulsado por la comunidad",
        "Mejoras regulares",
      ],
    },
  ],
} as const;

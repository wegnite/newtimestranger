export const features = {
  title: "核心特性",
  subtitle: "探索使 DeepSeek V3 脫穎而出的強大功能",
  items: [
    {
      title: "先進的 MoE 架構",
      description:
        "革命性的6710億參數模型，每個詞元僅激活370億參數，通過創新的負載均衡實現最佳效率",
      iconName: "Brain",
      details: [
        "多頭潛在注意力（MLA）",
        "無輔助損失的負載均衡",
        "DeepSeekMoE 架構",
        "多詞元預測目標",
      ],
    },
    {
      title: "最先進的性能",
      description:
        "在多個基準測試中取得卓越成果，包括 MMLU (87.1%)、BBH (87.5%) 和數學推理任務",
      iconName: "Gauge",
      details: ["程式競賽最高分", "高級數學計算", "多語言能力", "複雜推理任務"],
    },
    {
      title: "高效訓練",
      description:
        "突破性的訓練方法僅需278.8萬小時 H800 GPU，成本效率顯著，僅需550萬美元",
      iconName: "Cpu",
      details: [
        "FP8混合精度訓練",
        "優化的訓練框架",
        "穩定的訓練過程",
        "無需回滾",
      ],
    },
    {
      title: "靈活部署",
      description:
        "支援 NVIDIA、AMD GPU 和華為昇騰 NPU 的多種部署選項，實現靈活整合",
      iconName: "Globe2",
      details: ["雲端部署就緒", "本地推理支援", "多硬體平台", "優化的服務選項"],
    },
    {
      title: "先進的程式設計能力",
      description:
        "在程式設計任務中表現卓越，在競賽程式設計和實際開發場景中都有出色表現",
      iconName: "Code",
      details: ["多語言支援", "程式碼補全", "錯誤檢測", "程式碼優化"],
    },
    {
      title: "企業級安全",
      description: "全面的安全措施和合規功能，適用於企業部署和整合",
      iconName: "Shield",
      details: ["存取控制", "資料加密", "稽核日誌", "合規就緒"],
    },
    {
      title: "海量訓練資料",
      description: "在14.8兆多樣化、高品質的詞元上預訓練，確保廣泛的知識和能力",
      iconName: "Database",
      details: ["多樣化資料來源", "品質過濾內容", "多領域覆蓋", "定期更新"],
    },
    {
      title: "創新領導力",
      description: "通過開放協作和持續創新，引領人工智慧技術的進步",
      iconName: "Sparkles",
      details: ["研究領導力", "開放協作", "社群驅動", "持續改進"],
    },
  ],
} as const;

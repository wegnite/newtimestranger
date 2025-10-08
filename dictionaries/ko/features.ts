export const features = {
  title: "핵심 기능",
  subtitle: "DeepSeek V3를 특별하게 만드는 강력한 기능 살펴보기",
  items: [
    {
      title: "첨단 MoE 아키텍처",
      description:
        "혁신적인 6,710억 매개변수 모델, 토큰당 370억 매개변수만 활성화하며 혁신적인 부하 분산으로 최적의 효율성 달성",
      iconName: "Brain",
      details: [
        "다중 헤드 잠재 주의력(MLA)",
        "보조 손실 없는 부하 분산",
        "DeepSeekMoE 아키텍처",
        "다중 토큰 예측 목표",
      ],
    },
    {
      title: "최첨단 성능",
      description:
        "MMLU (87.1%), BBH (87.5%) 및 수학적 추론 작업을 포함한 여러 벤치마크에서 탁월한 성과 달성",
      iconName: "Gauge",
      details: [
        "프로그래밍 대회 최고 점수",
        "고급 수학 계산",
        "다국어 능력",
        "복잡한 추론 작업",
      ],
    },
    {
      title: "효율적인 학습",
      description:
        "혁신적인 학습 방법으로 H800 GPU 278.8만 시간만 필요, 비용 효율성이 뛰어나며 550만 달러만 소요",
      iconName: "Cpu",
      details: [
        "FP8 혼합 정밀도 학습",
        "최적화된 학습 프레임워크",
        "안정적인 학습 과정",
        "롤백 불필요",
      ],
    },
    {
      title: "유연한 배포",
      description:
        "NVIDIA, AMD GPU 및 화웨이 아센드 NPU를 지원하는 다양한 배포 옵션으로 유연한 통합 실현",
      iconName: "Globe2",
      details: [
        "클라우드 배포 준비",
        "로컬 추론 지원",
        "다중 하드웨어 플랫폼",
        "최적화된 서비스 옵션",
      ],
    },
    {
      title: "고급 프로그래밍 능력",
      description:
        "프로그래밍 작업에서 탁월한 성능을 보이며, 대회 프로그래밍과 실제 개발 시나리오 모두에서 뛰어난 성과",
      iconName: "Code",
      details: ["다중 언어 지원", "코드 완성", "오류 감지", "코드 최적화"],
    },
    {
      title: "기업급 보안",
      description:
        "기업 배포 및 통합을 위한 포괄적인 보안 조치 및 규정 준수 기능",
      iconName: "Shield",
      details: ["접근 제어", "데이터 암호화", "감사 로그", "규정 준수 준비"],
    },
    {
      title: "방대한 학습 데이터",
      description:
        "14.8조의 다양하고 고품질 토큰으로 사전 학습하여 광범위한 지식과 능력 보장",
      iconName: "Database",
      details: [
        "다양한 데이터 소스",
        "품질 필터링 콘텐츠",
        "다중 분야 커버리지",
        "정기 업데이트",
      ],
    },
    {
      title: "혁신적 리더십",
      description:
        "개방형 협력과 지속적인 혁신을 통해 인공지능 기술의 발전을 선도",
      iconName: "Sparkles",
      details: ["연구 리더십", "개방형 협력", "커뮤니티 주도", "지속적 개선"],
    },
  ],
} as const;

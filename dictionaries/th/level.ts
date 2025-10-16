import levels from "@/data/levels";

export const level = {
  title: `แนะนำระดับเกม Knit Out, วิธีผ่านทั้งหมดสำหรับระดับ 1-${levels.length}`,
  subtitle: `วิธีผ่านทั้งหมดสำหรับ ${levels.length} ระดับ | บทแนะนำยุทธศาสตร์ | วิธีแก้ปัญหาในการแกะพันธ์`,
  searchPlaceholder: `ป้อนหมายเลขระดับ (1-${levels.length})`,
  levelRange: {
    start: "ระดับ ",
    end: "",
  },
  levelNumber: "ระดับ",
  meta: {
    title: `แนะนำเกม Knit Out | วิธีผ่านวิดีโอทั้งหมดสำหรับระดับ 1-${levels.length} | บทแนะนำยุทธศาสตร์`,
    description: `เว็บไซต์แนะนำเกม Knit Out公式, ให้คำแนะนำวิธีผ่านทั้งหมดสำหรับระดับ 1-${levels.length}, รวมถึงคำแนะนำยุทธศาสตร์ละเอียด, วิธีแก้ปัญหาในการแกะพันธ์, และวิดีโอแนะนำ. ช่วยให้คุณสามารถผ่านระดับได้อย่างง่ายและแก้ปัญหาประกอบทั้งหมดได้.`,
    keywords:
      "แนะนำ Knit Out, วิธีผ่าน Knit Out, แนะนำเกมปัญหา, เกมแกะพันธ์, บทแนะนำเกมยุทธศาสตร์, แก้ปัญหาประกอบ, เกมผ่อนคลาด",
    siteName: "แนะนำ Knit Out公式",
    author: "ทีมแนะนำ Knit Out",
    category: "แนะนำเกม",
    classification: "เกมปัญหาประกอบผ่อนคลาด",
  },
} as const;

export default level;

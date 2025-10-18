import levels from "@/data/levels";

export const level = {
  title: `แนะนำระดับเกม Digimon Story Time Stranger, วิธีผ่านทั้งหมดสำหรับระดับ 1-${levels.length}`,
  subtitle: `วิธีผ่านทั้งหมดสำหรับ ${levels.length} ระดับ | บทแนะนำยุทธศาสตร์ | วิธีแก้ปัญหาในการแกะพันธ์`,
  searchPlaceholder: `ป้อนหมายเลขระดับ (1-${levels.length})`,
  levelRange: {
    start: "ระดับ ",
    end: "",
  },
  levelNumber: "ระดับ",
  meta: {
    title: `แนะนำเกม Digimon Story Time Stranger | วิธีผ่านวิดีโอทั้งหมดสำหรับระดับ 1-${levels.length} | บทแนะนำยุทธศาสตร์`,
    description: `เว็บไซต์แนะนำเกม Digimon Story Time Stranger公式, ให้คำแนะนำวิธีผ่านทั้งหมดสำหรับระดับ 1-${levels.length}, รวมถึงคำแนะนำยุทธศาสตร์ละเอียด, วิธีแก้ปัญหาในการแกะพันธ์, และวิดีโอแนะนำ. ช่วยให้คุณสามารถผ่านระดับได้อย่างง่ายและแก้ปัญหาประกอบทั้งหมดได้.`,
    keywords:
      "แนะนำ Digimon Story Time Stranger, วิธีผ่าน Digimon Story Time Stranger, แนะนำเกมปัญหา, เกมแกะพันธ์, บทแนะนำเกมยุทธศาสตร์, แก้ปัญหาประกอบ, เกมผ่อนคลาด",
    siteName: "แนะนำ Digimon Story Time Stranger公式",
    author: "ทีมแนะนำ Digimon Story Time Stranger",
    category: "แนะนำเกม",
    classification: "เกมปัญหาประกอบผ่อนคลาด",
  },
} as const;

export default level;

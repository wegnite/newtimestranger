import levels from "@/data/levels";

export const level = {
  title: `คู่มือระดับเกม Dreamy Room, คำแนะนำฉบับสมบูรณ์สำหรับระดับ 1-${levels.length}`,
  subtitle: `คำแนะนำฉบับสมบูรณ์สำหรับ ${levels.length} ระดับ | เคล็ดลับการจัดระเบียบ | วิธีแก้ปัญหาการจัดวางห้อง`,
  searchPlaceholder: `ป้อนหมายเลขระดับ (1-${levels.length})`,
  levelRange: {
    start: "ระดับ ",
    end: "",
  },
  levelNumber: "ระดับ",
  meta: {
    title: `คู่มือเกม Dreamy Room | คำแนะนำวิดีโอฉบับสมบูรณ์สำหรับระดับ 1-${levels.length} | เคล็ดลับการจัดระเบียบ`,
    description: `เว็บไซต์คู่มือเกม Dreamy Room อย่างเป็นทางการ ให้คำแนะนำฉบับสมบูรณ์สำหรับระดับ 1-${levels.length} รวมถึงเคล็ดลับการจัดระเบียบโดยละเอียด วิธีแก้ปัญหาการวางไอเทม และคู่มือวิดีโอ ช่วยให้คุณผ่านด่านได้อย่างง่ายดายและสร้างพื้นที่อยู่อาศัยที่อบอุ่นสมบูรณ์แบบ`,
    keywords:
      "คู่มือ Dreamy Room, คำแนะนำ Dreamy Room, คู่มือเกมจัดระเบียบ, เกมตกแต่งห้อง, เคล็ดลับเกมจัดระเบียบ, เกมบำบัด, เกมคลายเครียด",
    siteName: "คู่มืออย่างเป็นทางการของ Dreamy Room",
    author: "ทีมคู่มือ Dreamy Room",
    category: "คู่มือเกม",
    classification: "เกมปริศนาแคชชวล",
  },
} as const;

export default level;

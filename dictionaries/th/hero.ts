import levels from "@/data/levels";

export const hero = {
  badge: "Game Guides Collection",
  title: "ดูทั้งหมดคู่มือระดับ Knit Out",
  description:
    "สำรวจวิธีการผ่านแต่ละระดับอย่างละเอียด, บทแนะนำ และกลยุทธ์. พิมพ์หมายเลขระดับเพื่อข้ามไปโดยตรงยังคู่มือที่สอดคล้อง.",
  stats: {
    guides: levels.length + "+ คู่มือระดับ",
    videoTutorials: `${levels.length}+ วิดีโอทutorial`,
    quickSearch: "ค้นหาระดับอย่างรวดเร็ว",
  },
  search: {
    placeholder: `ป้อนหมายเลขระดับ (1-${levels.length})`,
    button: "ค้นหาคู่มือ",
    error: {
      invalid: "กรุณาป้อนหมายเลขระดับที่ถูกต้อง",
      notFound: "ไม่พบคู่มือสำหรับระดับนี้",
    },
  },
  buttons: {
    browseAll: "ดูทั้งหมดคู่มือระดับ",
    downloadGame: "ดาวน์โหลดเกม",
  },
  downloadCard: {
    title: "ดาวน์โหลด Knit Out",
    description: "เริ่มการผจญภัยพับคำถามแบบผ่อนคลาดและมีกลยุทธ์!",
  },
  videoSection: {
    title: "วิดีโอกลยุทธ์ Knit Out",
    description:
      "ดูวิดีโอทutorialเกมอย่างละเอียดเพื่อเรียนรู้กลยุทธ์ในการเสร็จสิ้นระดับ",
  },
} as const;

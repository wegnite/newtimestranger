import levels from "@/data/levels";

export const hero = {
  badge: "คอลเลกชันคู่มือเกม",
  title: "ดูคู่มือระดับทั้งหมดของ Dreamy Room",
  description:
    "สำรวจคำแนะนำโดยละเอียด เคล็ดลับ และกลยุทธ์สำหรับแต่ละระดับห้อง ป้อนหมายเลขระดับเพื่อข้ามไปยังคู่มือที่เกี่ยวข้องโดยตรง",
  stats: {
    guides: `${levels.length}+ คู่มือระดับ`,
    videoTutorials: `${levels.length}+ วิดีโอสอน`,
    quickSearch: "ค้นหาระดับด่วน",
  },
  search: {
    placeholder: `ป้อนหมายเลขระดับ (1-${levels.length})`,
    button: "ค้นหาคู่มือ",
    error: {
      invalid: "โปรดป้อนหมายเลขระดับที่ถูกต้อง",
      notFound: "ไม่พบคู่มือสำหรับระดับนี้",
    },
  },
  buttons: {
    browseAll: "ดูคู่มือระดับทั้งหมด",
    downloadGame: "ดาวน์โหลดเกม",
  },
  downloadCard: {
    title: "ดาวน์โหลด Dreamy Room",
    description: "เริ่มต้นการเดินทางที่อบอุ่นและเยียวยาของการจัดระเบียบ!",
  },
  videoSection: {
    title: "วิดีโอกลยุทธ์เกม",
    description: "ดูวิดีโอสอนเกมโดยละเอียดเพื่อเรียนรู้เทคนิคการจัดระเบียบ",
  },
} as const;

export default hero;

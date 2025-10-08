export const appDownload = {
  meta: {
    title: "ดาวน์โหลด Dreamy Room - เกมจัดห้องสุดอบอุ่น",
    description:
      "ดาวน์โหลด Dreamy Room และเริ่มต้นการเดินทางที่อบอุ่นหัวใจในการจัดและตกแต่งห้อง สร้างพื้นที่อยู่อาศัยที่สมบูรณ์แบบของคุณผ่านการจัดระเบียบอย่างมีสติ",
  },
  title: "ดาวน์โหลด Dreamy Room",
  subtitle: "เกมจัดห้องที่อบอุ่นและผ่อนคลาย",
  stats: {
    rating: "4.8",
    downloads: "1 ล้าน+ ดาวน์โหลด",
  },
  downloadOptions: {
    appStore: {
      platform: "App Store",
      description: "ดาวน์โหลดบน App Store",
      link: "https://apps.apple.com/us/app/dreamy-room/id6742221896",
    },
    googlePlay: {
      platform: "Google Play",
      description: "ดาวน์โหลดบน Google Play",
      link: "https://play.google.com/store/apps/details?id=com.abi.dream.unpacking",
    },
  },
  features: {
    organize: {
      title: "การจัดระเบียบ",
      description: "ค้นหาจุดที่สมบูรณ์แบบสำหรับทุกรายการ",
    },
    story: {
      title: "เรื่องราวอบอุ่นหัวใจ",
      description: "บอกเล่าเรื่องราวชีวิตผ่านการจัดวางสิ่งของ",
    },
  },
} as const;

export default appDownload;

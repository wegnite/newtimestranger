import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "รายการระดับ",
  },
  notFound: {
    title: "ไม่พบระดับ",
    description: "ขออภัย ไม่พบระดับที่คุณกำลังค้นหา",
    backToList: "กลับไปที่รายการระดับ",
  },
  levelNumber: "ระดับ",
  levelRange: {
    prefix: "วัน",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room ระดับ {{level}} - คู่มือเกมและคำแนะนำ - Dreamy Room {{level}} & เคล็ดลับวิดีโอ`,
    description: `Dreamy Room {{level}}, คู่มือฉบับสมบูรณ์สำหรับ Dreamy Room ระดับ {{level}} พร้อมเคล็ดลับการจัดระเบียบโดยละเอียด วิธีแก้ปัญหาการวางไอเทม และคำแนะนำวิดีโอ ช่วยให้คุณผ่านด่านได้อย่างง่ายดายและสร้างพื้นที่อยู่อาศัยที่อบอุ่นสมบูรณ์แบบ`,
    siteName: "คู่มืออย่างเป็นทางการของ Dreamy Room",
    invalidId: {
      title: "หมายเลขระดับไม่ถูกต้อง",
      description: `โปรดป้อนหมายเลขระดับที่ถูกต้อง (1-${levels.length})`,
    },
    notFound: {
      title: "ระดับไม่มีอยู่",
      description: "ระดับที่คุณพยายามเข้าถึงไม่มีอยู่ โปรดเลือกระดับอื่น",
    },
    langNotFound: {
      title: "ไม่พบแพ็กภาษา",
      description:
        "ไม่พบเนื้อหาการแปลสำหรับภาษาปัจจุบัน โปรดเปลี่ยนไปใช้ภาษาอื่น",
    },
  },
  sidebar: {
    adjacentLevels: "ด่านที่อยู่ติดกัน",
    allLevels: "ด่านทั้งหมด",
  },
  shareLabel: "แชร์คู่มือด่าน",
  linkCopiedText: "คัดลอกลิงก์แล้ว!",
} as const;

export default levelDetail;

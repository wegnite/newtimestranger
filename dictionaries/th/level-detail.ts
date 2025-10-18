import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "รายการระดับ",
  },
  notFound: {
    title: "ไม่พบระดับ",
    description: "ขออภัย คุณกำลังค้นหาระดับที่ไม่มีอยู่",
    backToList: "กลับไปยังรายการระดับ",
  },
  levelNumber: "ระดับ",
  levelRange: {
    prefix: "วัน",
    suffix: "",
  },
  meta: {
    title: `Digimon Story Time Stranger Level {{level}} - วิธีผ่านและคำเฉลยและเกม`,
    description: `Digimon Story Time Stranger {{level}}, แนะนำครบถ้วนสำหรับ Digimon Story Time Stranger Level {{level}}, ให้คำแนะนำยุทธศาสตร์รายละเอียด, แก้ไขปัญหาของเชือกและหม้อเย็บ, และวิดีโอวิธีผ่าน. ช่วยให้คุณสามารถเสร็จสิ้นระดับได้อย่างง่ายและแก้ปัญหาเส้นพันธุ์ทั้งหมด.`,
    siteName: "คู่มือทางการเล่น Digimon Story Time Stranger公式",
    invalidId: {
      title: "หมายเลขระดับไม่ถูกต้อง",
      description: `กรุณาป้อนหมายเลขระดับที่ถูกต้อง (1-${levels.length})`,
    },
    notFound: {
      title: "ระดับไม่มีอยู่",
      description:
        "ระดับที่คุณพยายามเข้าถึงไม่มีอยู่ โปรดเลือกระดับอื่น",
    },
    langNotFound: {
      title: "ไม่พบแพ็กภาษา",
      description:
        "ไม่พบเนื้อหาประกอบคำแปลสำหรับภาษาปัจจุบัน โปรดเปลี่ยนภาษาเป็นภาษาอื่น",
    },
  },
  sidebar: {
    adjacentLevels: "ระดับที่ติดกัน",
    allLevels: "ทั้งหมดระดับ",
  },
  shareLabel: "แชร์คู่มือระดับ",
  linkCopiedText: "คัดลอกสำเร็จ!",
} as const;

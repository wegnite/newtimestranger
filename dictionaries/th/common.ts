export const common = {
  buttons: {
    submit: "ส่ง",
    cancel: "ยกเลิก",
    confirm: "ยืนยัน",
    back: "กลับ",
    next: "ถัดไป",
    save: "บันทึก",
    delete: "ลบ",
    edit: "แก้ไข",
    view: "ดู",
    download: "ดาวน์โหลด",
    close: "ปิด",
  },
  messages: {
    loading: "กำลังโหลด...",
    success: "ดำเนินการสำเร็จ",
    error: "เกิดข้อผิดพลาด",
    confirm: "คุณแน่ใจหรือไม่?",
    required: "ฟิลด์นี้จำเป็น",
    invalidInput: "ข้อมูลไม่ถูกต้อง",
  },
  navigation: {
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    contact: "ติดต่อ",
    features: "คุณสมบัติ",
    pricing: "ราคา",
    guides: "คู่มือ",
    settings: "การตั้งค่า",
  },
  activePlayers: "ผู้เล่นที่ใช้งานอยู่",
  countries: "ประเทศ",
  coffeeRecipes: "สูตรกาแฟ",
  userRating: "คะแนนจากผู้ใช้",
  localeSuggest: {
    switchToTitle: "เปลี่ยนเป็น {langName} หรือไม่?",
    currentLangDesc: "ภาษาปัจจุบันคือ {langName}",
    dismissPermanent: "ไม่ต้องถามอีก",
    switchToAlt: "เปลี่ยนเป็น {langName}",
    switchToButton: "เปลี่ยน",
  },
  onlineGames: {
    bannerTitle: "ต้องการเล่นเกมโดยตรงหรือไม่?",
    bannerDescription:
      "สัมผัสประสบการณ์ Dreamy Room และเกมอื่นๆ โดยตรงในเบราว์เซอร์ของคุณ ไม่ต้องดาวน์โหลด",
    playNowButton: "เล่นเลย",
    featured: "เกมแนะนำ",
    viewAllGames: "ดูเกมทั้งหมด",
    levelCompletionText: "เล่น Dreamy Room ออนไลน์!",
  },
} as const;

export default common;

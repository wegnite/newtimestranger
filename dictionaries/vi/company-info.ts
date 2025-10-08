export const companyInfo = {
  title: "Về Dreamy Room",
  subtitle:
    "Trò chơi Sắp xếp Ấm cúng Được Yêu thích Bởi Hàng triệu Người Trên Toàn thế giới",
  stats: {
    players: "+1Tr", // Tr = Triệu
    countries: "+150",
    recipes: "+50", // Lưu ý: Có thể cần kiểm tra xem 'Công thức' có phải là từ đúng ở đây không
    rating: "4.8/5",
  },
  sections: {
    about: {
      title: "Về Chúng Tôi",
      content:
        "Dreamy Room là một trò chơi sắp xếp ấm cúng. Nhiệm vụ của chúng tôi là mang lại sự ấm áp và niềm vui thông qua việc sắp xếp và trang trí phòng.",
    },
    mission: {
      title: "Nhiệm vụ của Chúng Tôi",
      content:
        "Tạo ra một trải nghiệm sắp xếp thư giãn và quyến rũ, kết hợp hoàn hảo vẻ đẹp của cuộc sống với những câu chuyện cảm động.",
    },
  },
} as const;

export default companyInfo;

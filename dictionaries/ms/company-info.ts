export const companyInfo = {
  title: "Tentang Dreamy Room",
  subtitle:
    "Permainan Penyusunan Selesa yang Disukai Jutaan Orang di Seluruh Dunia",
  stats: {
    players: "+1J", // Juta
    countries: "+150",
    recipes: "+50", // Nota: Mungkin perlu disemak sama ada 'Resipi' adalah perkataan yang betul di sini
    rating: "4.8/5",
  },
  sections: {
    about: {
      title: "Tentang Kami",
      content:
        "Dreamy Room ialah permainan penyusunan yang selesa. Misi kami adalah untuk membawa kehangatan dan kegembiraan melalui penyusunan dan hiasan bilik.",
    },
    mission: {
      title: "Misi Kami",
      content:
        "Mencipta pengalaman penyusunan yang menenangkan dan menawan yang menggabungkan keindahan hidup dengan kisah-kisah menyentuh hati secara sempurna.",
    },
  },
} as const;

export default companyInfo;

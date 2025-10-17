export interface LevelData {
  id: number;
  videoTitle: string;
  videoUrl: string;
  imgUrl?: string;
  range?: {
    end: number;
    start: number;
  };
  uploadDate?: string; // Optional: ISO 8601 date string (e.g., "YYYY-MM-DD")
}

const levels: LevelData[] = [
  {
    "id": 1,
    "videoTitle": "Digimon Story Time Stranger Part 1 THE PAST!? Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Hen3i4DfrXw"
  },
  {
    "id": 2,
    "videoTitle": "Digimon Story Time Stranger Part 2 THE POWER TO PROTECT Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qgSrR6ULm0s"
  },
  {
    "id": 3,
    "videoTitle": "Digimon Story Time Stranger Part 3 BLUE GREYMON BOSS BATTLE Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iGM26tpMZBc"
  },
  {
    "id": 4,
    "videoTitle": "Digimon Story Time Stranger Part 4 HELPING PUBLIC SAFETY Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AAUMWKe4_M8"
  },
  {
    "id": 5,
    "videoTitle": "Digimon Story Time Stranger Part 5 Titamon & The Egg Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mnBuOirJCyk"
  },
  {
    "id": 6,
    "videoTitle": "Digimon Story Time Stranger Part 6 THE DIGITAL WORLD Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=788-9UtPSXk"
  },
  {
    "id": 7,
    "videoTitle": "Digimon Story Time Stranger Part 7 TROUBLE AT THE TOWER Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=p2sGEjOitSg"
  },
  {
    "id": 8,
    "videoTitle": "Digimon Story Time Stranger Part 8 Parrotmon Boss Battle Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7HfQNYQdtoQ"
  },
  {
    "id": 9,
    "videoTitle": "Digimon Story Time Stranger Part 9 Factorial Town Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Hwg4dmVrTYI"
  },
  {
    "id": 10,
    "videoTitle": "Digimon Story Time Stranger Part 10 Vulcanusmon Boss Battle Armor Digivolution Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nGxB4pX-9Y4"
  },
  {
    "id": 11,
    "videoTitle": "Digimon Story Time Stranger Part 11 Junomon Temple & Side Missions Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=I4kuoEmAWAE"
  },
  {
    "id": 12,
    "videoTitle": "Digimon Story Time Stranger Part 12 A TRAITOR?  Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=A65xMVbstJI"
  },
  {
    "id": 13,
    "videoTitle": "Digimon Story Time Stranger Part 13 Sharkmon Boss Battle Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=hZxhub3O8Rc"
  },
  {
    "id": 14,
    "videoTitle": "Digimon Story Time Stranger Part 14 GEAR FOREST Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=s0QVTUB0BJs"
  },
  {
    "id": 15,
    "videoTitle": "Digimon Story Time Stranger Part 15 DRUNK DIGIMON Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qXMDUAxTwCU"
  },
  {
    "id": 16,
    "videoTitle": "Digimon Story Time Stranger Part 16 WAR BEGINS Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ERTQDsDG4_A"
  },
  {
    "id": 17,
    "videoTitle": "Digimon Story Time Stranger Part 17 THE CREATORS? Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=12Ct0igIAg4"
  },
  {
    "id": 18,
    "videoTitle": "Digimon Story Time Stranger Part 18 A NEW FUTURE? Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SExr1eLwkdc"
  },
  {
    "id": 19,
    "videoTitle": "Digimon Story Time Stranger Part 19 SkullSeadramon Boss Battle Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PzBCZsWW8Tc"
  },
  {
    "id": 20,
    "videoTitle": "Digimon Story Time Stranger Part 20 Calmaramon Boss Battle Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jQHnXrIA9T4"
  },
  {
    "id": 21,
    "videoTitle": "Digimon Story Time Stranger Part 21 WE NEED A CURE Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zYMuQcAKz-Q"
  },
  {
    "id": 22,
    "videoTitle": "Digimon Story Time Stranger Part 22 TyrantKabuterimon Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=G-Mlo9BNSYI"
  },
  {
    "id": 23,
    "videoTitle": "Digimon Story Time Stranger Part 23 UNDERGROUND ARENA Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GVjrz_OTLus"
  },
  {
    "id": 24,
    "videoTitle": "Digimon Story Time Stranger Part 24 MARSMON COLOSSEUM CHAMPION Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=dF-zsjXJYo8"
  },
  {
    "id": 25,
    "videoTitle": "Digimon Story Time Stranger Part 25 Side Missions Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JCvUIWxuV8o"
  },
  {
    "id": 26,
    "videoTitle": "Digimon Story Time Stranger Part 26 SPACE TIME DISTORTION Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=__45OtEy7zE"
  },
  {
    "id": 27,
    "videoTitle": "Digimon Story Time Stranger Part 27 SEA WATER & CRINGE ANSWERS Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZzOP_pFCE00"
  },
  {
    "id": 28,
    "videoTitle": "Digimon Story Time Stranger Part 28 ZOMBIE PLUTOMON & THE TRUTH Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1ddwv16lODs"
  },
  {
    "id": 29,
    "videoTitle": "Digimon Story Time Stranger Part 29 MEGA TIME & POWER LOADER Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=B7X3iFUp-Rc"
  },
  {
    "id": 30,
    "videoTitle": "Digimon Story Time Stranger Part 30 APLLOMON COSMIC ZONE Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=d1TxA7NDuOc"
  },
  {
    "id": 31,
    "videoTitle": "Digimon Story Time Stranger Part 31 Dianamon is... Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QkRbnnDAcrs"
  },
  {
    "id": 32,
    "videoTitle": "Digimon Story Time Stranger Part 32 PRISON BREAK Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tqQh53XeQfM"
  },
  {
    "id": 33,
    "videoTitle": "Digimon Story Time Stranger Part 33 JUNOMON Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Roie24pL5bw"
  },
  {
    "id": 34,
    "videoTitle": "Digimon Story Time Stranger Part 34 JUPITERMON Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tE4QR6fT598"
  },
  {
    "id": 35,
    "videoTitle": "Digimon Story Time Stranger Part 35 SO MANY SIDE QUESTS Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IMPUWf8jMfo"
  },
  {
    "id": 36,
    "videoTitle": "Digimon Story Time Stranger Part 36 More Side Quests Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5ZLsBTCq45s"
  },
  {
    "id": 37,
    "videoTitle": "Digimon Story Time Stranger Part 37 Even More Side Quests Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Zkkcv6Ywpe4"
  },
  {
    "id": 38,
    "videoTitle": "Digimon Story Time Stranger Part 38 Examon is TINY! Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=WPOKSxKxDc4"
  },
  {
    "id": 39,
    "videoTitle": "Digimon Story Time Stranger Part 39 ROYAL KNIGHTS ASSEMBLE! Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RXlJ3zu8z0Q"
  },
  {
    "id": 40,
    "videoTitle": "Digimon Story Time Stranger Part 40 DEMON LORDS Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8rf9ZRubd5g"
  },
  {
    "id": 41,
    "videoTitle": "Digimon Story Time Stranger Part 41 Penultimate Battle Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=vKj5S3peSWw"
  },
  {
    "id": 42,
    "videoTitle": "Digimon Story Time Stranger Part 42 FINAL BOSS BATTLE ENDING Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GyqEPDgggA8"
  },
  {
    "id": 43,
    "videoTitle": "Digimon Story Time Stranger Part 43 Post Game Wrap up Gameplay Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nfsJ-JjbutI"
  }
]

export default levels;

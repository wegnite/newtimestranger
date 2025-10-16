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
    "imgUrl": "/images/thumbnails/Knit-Out-Level-1.webp",
    "range": {
      "end": 5,
      "start": 1
    },
    "videoTitle": "Knit Out Level 1-5 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=h2h16JTtpVA"
  },
  {
    "id": 6,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-6.webp",
    "videoTitle": "Knit Out Level 6 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=t3BqMnTs1Fw"
  },
  {
    "id": 7,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-7.webp",
    "videoTitle": "Knit Out Level 7 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IVoPZUWPxI8"
  },
  {
    "id": 8,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-8.webp",
    "videoTitle": "Knit Out Level 8 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Qn2sVbvkShc"
  },
  {
    "id": 9,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-9.webp",
    "videoTitle": "Knit Out Level 9 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=msy4JqaQO90"
  },
  {
    "id": 10,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-10.webp",
    "videoTitle": "Knit Out Level 10 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BcGBcZQrF4k"
  },
  {
    "id": 11,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-11.webp",
    "videoTitle": "Knit Out Level 11 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=15jmgjlqrkc"
  },
  {
    "id": 12,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-12.webp",
    "videoTitle": "Knit Out Level 12 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pH6E2QbzseA"
  },
  {
    "id": 13,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-13.webp",
    "videoTitle": "Knit Out Level 13 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Iw9iU0XPTt4"
  },
  {
    "id": 14,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-14.webp",
    "videoTitle": "Knit Out Level 14 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tJbMfE44baA"
  },
  {
    "id": 15,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-15.webp",
    "videoTitle": "Knit Out Level 15 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=N4652xWbIc0"
  },
  {
    "id": 16,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-16.webp",
    "videoTitle": "Knit Out Level 16 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5JAxX7Vx8_o"
  },
  {
    "id": 17,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-17.webp",
    "videoTitle": "Knit Out Level 17 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=h62zXDpQBuU"
  },
  {
    "id": 18,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-18.webp",
    "videoTitle": "Knit Out Level 18 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tKpWZU6Y-ig"
  },
  {
    "id": 19,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-19.webp",
    "videoTitle": "Knit Out Level 19 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jFrE2mpq4w0"
  },
  {
    "id": 20,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-20.webp",
    "videoTitle": "Knit Out Level 20 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Al8K3pySYSo"
  },
  {
    "id": 21,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-21.webp",
    "videoTitle": "Knit Out Level 21 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8bPi6EtHchk"
  },
  {
    "id": 22,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-22.webp",
    "videoTitle": "Knit Out Level 22 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=HPxu_usY_tA"
  },
  {
    "id": 23,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-23.webp",
    "videoTitle": "Knit Out Level 23 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=y_fhjvnE0Y4"
  },
  {
    "id": 24,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-24.webp",
    "videoTitle": "Knit Out Level 24 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sztfcipNdAY"
  },
  {
    "id": 25,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-25.webp",
    "videoTitle": "Knit Out Level 25 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_F2nW_aZQug"
  },
  {
    "id": 26,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-26.webp",
    "videoTitle": "Knit Out Level 26 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UEIcwZsEaa8"
  },
  {
    "id": 27,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-27.webp",
    "videoTitle": "Knit Out Level 27 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=MhxoyUoxJPI"
  },
  {
    "id": 28,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-28.webp",
    "videoTitle": "Knit Out Level 28 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=HYCEnonmgrc"
  },
  {
    "id": 29,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-29.webp",
    "videoTitle": "Knit Out Level 29 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zmJzLJeFUyE"
  },
  {
    "id": 30,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-30.webp",
    "videoTitle": "Knit Out Level 30 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=2UPWjI-8GNg"
  },
  {
    "id": 31,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-31.webp",
    "videoTitle": "Knit Out Level 31 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=uioFhwbwrxY"
  },
  {
    "id": 32,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-32.webp",
    "videoTitle": "Knit Out Level 32 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RyJkTVh9pbk"
  },
  {
    "id": 33,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-33.webp",
    "videoTitle": "Knit Out Level 33 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=i55BOo7o4ZY"
  },
  {
    "id": 34,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-34.webp",
    "videoTitle": "Knit Out Level 34 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ug8gTMpdVMs"
  },
  {
    "id": 35,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-35.webp",
    "videoTitle": "Knit Out Level 35 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Okmx9fs0Ti8"
  },
  {
    "id": 36,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-36.webp",
    "videoTitle": "Knit Out Level 36 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=yVTyLjsZAF8"
  },
  {
    "id": 37,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-37.webp",
    "videoTitle": "Knit Out Level 37 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mJLf2jcCztY"
  },
  {
    "id": 38,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-38.webp",
    "videoTitle": "Knit Out Level 38 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qMgHRKO1Qj8"
  },
  {
    "id": 39,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-39.webp",
    "videoTitle": "Knit Out Level 39 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=D1Vp6FrdS0M"
  },
  {
    "id": 40,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-40.webp",
    "videoTitle": "Knit Out Level 40 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=hW5oEoV83rg"
  },
  {
    "id": 41,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-41.webp",
    "videoTitle": "Knit Out Level 41 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TlyBYOQiwHA"
  },
  {
    "id": 42,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-42.webp",
    "videoTitle": "Knit Out Level 42 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9hvmYfiXtHA"
  },
  {
    "id": 43,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-43.webp",
    "videoTitle": "Knit Out Level 43 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9VKuv5CbkxM"
  },
  {
    "id": 44,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-44.webp",
    "videoTitle": "Knit Out Level 44 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ig5ppZNehJc"
  },
  {
    "id": 45,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-45.webp",
    "videoTitle": "Knit Out Level 45 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=uBsWDN2mdcg"
  },
  {
    "id": 46,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-46.webp",
    "videoTitle": "Knit Out Level 46 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IWd2Gj8NLBA"
  },
  {
    "id": 47,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-47.webp",
    "videoTitle": "Knit Out Level 47 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UHkFoca8lnE"
  },
  {
    "id": 48,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-48.webp",
    "videoTitle": "Knit Out Level 48 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QcmXyL2TyvE"
  },
  {
    "id": 49,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-49.webp",
    "videoTitle": "Knit Out Level 49 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TiDma3wrg20"
  },
  {
    "id": 50,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-50.webp",
    "videoTitle": "Knit Out Level 50 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BzP2x0CpyWs"
  },
  {
    "id": 51,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-51.webp",
    "videoTitle": "Knit Out Level 51 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=NYFj41oGG1Y"
  },
  {
    "id": 52,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-52.webp",
    "videoTitle": "Knit Out Level 52 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4FDLsa-HRzM"
  },
  {
    "id": 53,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-53.webp",
    "videoTitle": "Knit Out Level 53 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=E8plvaqPlIk"
  },
  {
    "id": 54,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-54.webp",
    "videoTitle": "Knit Out Level 54 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=S9Jj4gMwIaE"
  },
  {
    "id": 55,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-55.webp",
    "videoTitle": "Knit Out Level 55 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YBDm1jEYnsM"
  },
  {
    "id": 56,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-56.webp",
    "videoTitle": "Knit Out Level 56 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=b9LwkF-f_N8"
  },
  {
    "id": 57,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-57.webp",
    "videoTitle": "Knit Out Level 57 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pIc-TPrjbRQ"
  },
  {
    "id": 58,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-58.webp",
    "videoTitle": "Knit Out Level 58 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=q2XGt_42ms8"
  },
  {
    "id": 59,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-59.webp",
    "videoTitle": "Knit Out Level 59 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tmjRQRfdans"
  },
  {
    "id": 60,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-60.webp",
    "videoTitle": "Knit Out Level 60 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=FNtE2NLZKug"
  },
  {
    "id": 61,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-61.webp",
    "videoTitle": "Knit Out Level 61 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ou7UqXLpHls"
  },
  {
    "id": 62,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-62.webp",
    "videoTitle": "Knit Out Level 62 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=h6AxJZUKDs8"
  },
  {
    "id": 63,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-63.webp",
    "videoTitle": "Knit Out Level 63 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=WMkj6KMs6Lg"
  },
  {
    "id": 64,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-64.webp",
    "videoTitle": "Knit Out Level 64 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=I0djQa-zSok"
  },
  {
    "id": 65,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-65.webp",
    "videoTitle": "Knit Out Level 65 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=fw36kADClow"
  },
  {
    "id": 66,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-66.webp",
    "videoTitle": "Knit Out Level 66 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3TeBDatbdSE"
  },
  {
    "id": 67,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-67.webp",
    "videoTitle": "Knit Out Level 67 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4u-HaRQNpCs"
  },
  {
    "id": 68,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-68.webp",
    "videoTitle": "Knit Out Level 68 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=wqGq1byi5BY"
  },
  {
    "id": 69,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-69.webp",
    "videoTitle": "Knit Out Level 69 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=wH3wZfK1Ldw"
  },
  {
    "id": 70,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-70.webp",
    "videoTitle": "Knit Out Level 70 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eGenFwk93uQ"
  },
  {
    "id": 71,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-71.webp",
    "videoTitle": "Knit Out Level 71 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=y_T5gcs_PFc"
  },
  {
    "id": 72,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-72.webp",
    "videoTitle": "Knit Out Level 72 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RuCObEhMHpA"
  },
  {
    "id": 73,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-73.webp",
    "videoTitle": "Knit Out Level 73 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=KKVC1GhUmyc"
  },
  {
    "id": 74,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-74.webp",
    "videoTitle": "Knit Out Level 74 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=j9GM48GpVbo"
  },
  {
    "id": 75,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-75.webp",
    "videoTitle": "Knit Out Level 75 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=t94LRJdoxiY"
  },
  {
    "id": 76,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-76.webp",
    "videoTitle": "Knit Out Level 76 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sxzb6r8R-Ys"
  },
  {
    "id": 77,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-77.webp",
    "videoTitle": "Knit Out Level 77 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-AsgkzcnwDk"
  },
  {
    "id": 78,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-78.webp",
    "videoTitle": "Knit Out Level 78 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Zy0AWFlPKqw"
  },
  {
    "id": 79,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-79.webp",
    "videoTitle": "Knit Out Level 79 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=h8sIF_tq6QQ"
  },
  {
    "id": 80,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-80.webp",
    "videoTitle": "Knit Out Level 80 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=y13Qn3KIXIE"
  },
  {
    "id": 81,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-81.webp",
    "videoTitle": "Knit Out Level 81 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jmKY9VA1rco"
  },
  {
    "id": 82,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-82.webp",
    "videoTitle": "Knit Out Level 82 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5bFBBUTuMkQ"
  },
  {
    "id": 83,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-83.webp",
    "videoTitle": "Knit Out Level 83 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=alNiglCZbxY"
  },
  {
    "id": 84,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-84.webp",
    "videoTitle": "Knit Out Level 84 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AkwHOmXXh90"
  },
  {
    "id": 85,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-85.webp",
    "videoTitle": "Knit Out Level 85 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jlWN201rvqc"
  },
  {
    "id": 86,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-86.webp",
    "videoTitle": "Knit Out Level 86 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=xcVIMlW9VfQ"
  },
  {
    "id": 87,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-87.webp",
    "videoTitle": "Knit Out Level 87 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JwjoG25IPCc"
  },
  {
    "id": 88,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-88.webp",
    "videoTitle": "Knit Out Level 88 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aRrqe8hxPr8"
  },
  {
    "id": 89,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-89.webp",
    "videoTitle": "Knit Out Level 89 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qRbE-aSaEVs"
  },
  {
    "id": 90,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-90.webp",
    "videoTitle": "Knit Out Level 90 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3aopdbCPV1o"
  },
  {
    "id": 91,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-91.webp",
    "videoTitle": "Knit Out Level 91 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AnxSzyXSN-M"
  },
  {
    "id": 92,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-92.webp",
    "videoTitle": "Knit Out Level 92 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=oCDEp05xQZk"
  },
  {
    "id": 93,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-93.webp",
    "videoTitle": "Knit Out Level 93 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Xyn8VT8qpOI"
  },
  {
    "id": 94,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-94.webp",
    "videoTitle": "Knit Out Level 94 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-XdwJmP1WMk"
  },
  {
    "id": 95,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-95.webp",
    "videoTitle": "Knit Out Level 95 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XH_PuVyCbVg"
  },
  {
    "id": 96,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-96.webp",
    "videoTitle": "Knit Out Level 96 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8ObBfnuVMoE"
  },
  {
    "id": 97,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-97.webp",
    "videoTitle": "Knit Out Level 97 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=yBzC1QFAct0"
  },
  {
    "id": 98,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-98.webp",
    "videoTitle": "Knit Out Level 98 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=H4XYigMbYbo"
  },
  {
    "id": 99,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-99.webp",
    "videoTitle": "Knit Out Level 99 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ujDIwYR1Jtg"
  },
  {
    "id": 100,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-100.webp",
    "videoTitle": "Knit Out Level 100 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6lC8QbmKwDk"
  },
  {
    "id": 101,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-101.webp",
    "videoTitle": "Knit Out Level 101 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BQPqLE8Iiyc"
  },
  {
    "id": 102,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-102.webp",
    "videoTitle": "Knit Out Level 102 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3ldo_93tyBs"
  },
  {
    "id": 103,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-103.webp",
    "videoTitle": "Knit Out Level 103 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Gl2DYVcsMFo"
  },
  {
    "id": 104,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-104.webp",
    "videoTitle": "Knit Out Level 104 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GPXfRGq9luw"
  },
  {
    "id": 105,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-105.webp",
    "videoTitle": "Knit Out Level 105 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Q3uwMktJxaI"
  },
  {
    "id": 106,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-106.webp",
    "videoTitle": "Knit Out Level 106 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jyx6ZpMvL28"
  },
  {
    "id": 107,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-107.webp",
    "videoTitle": "Knit Out Level 107 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=32P_3QxlD78"
  },
  {
    "id": 108,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-108.webp",
    "videoTitle": "Knit Out Level 108 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Kzvq-0GdAms"
  },
  {
    "id": 109,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-109.webp",
    "videoTitle": "Knit Out Level 109 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=I-klxEh3EGk"
  },
  {
    "id": 110,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-110.webp",
    "videoTitle": "Knit Out Level 110 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3M-exlmahqo"
  },
  {
    "id": 111,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-111.webp",
    "videoTitle": "Knit Out Level 111 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=q5EdynRou2U"
  },
  {
    "id": 112,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-112.webp",
    "videoTitle": "Knit Out Level 112 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gZBm5FfIlgo"
  },
  {
    "id": 113,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-113.webp",
    "videoTitle": "Knit Out Level 113 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7YavQWuPI_U"
  },
  {
    "id": 114,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-114.webp",
    "videoTitle": "Knit Out Level 114 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gpMDyQzqOnY"
  },
  {
    "id": 115,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-115.webp",
    "videoTitle": "Knit Out Level 115 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XU_fnrphj8U"
  },
  {
    "id": 116,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-116.webp",
    "videoTitle": "Knit Out Level 116 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qQN7eF07Ps4"
  },
  {
    "id": 117,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-117.webp",
    "videoTitle": "Knit Out Level 117 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BRybcd3qUIw"
  },
  {
    "id": 118,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-118.webp",
    "videoTitle": "Knit Out Level 118 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=kIrus60HGqw"
  },
  {
    "id": 119,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-119.webp",
    "videoTitle": "Knit Out Level 119 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TFI_FA7rcIM"
  },
  {
    "id": 120,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-120.webp",
    "videoTitle": "Knit Out Level 120 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Bdl32KgYATE"
  },
  {
    "id": 122,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-122.webp",
    "videoTitle": "Knit Out Level 122 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Md9Oop11vEo"
  },
  {
    "id": 123,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-123.webp",
    "videoTitle": "Knit Out Level 123 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3FcmI6d-jW4"
  },
  {
    "id": 124,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-124.webp",
    "videoTitle": "Knit Out Level 124 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1VrminLu3Xc"
  },
  {
    "id": 125,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-125.webp",
    "videoTitle": "Knit Out Level 125 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=80qNgnG-quk"
  },
  {
    "id": 126,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-126.webp",
    "videoTitle": "Knit Out Level 126 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZvyGP40Q-dc"
  },
  {
    "id": 127,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-127.webp",
    "videoTitle": "Knit Out Level 127 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=W3rsiJvhT78"
  },
  {
    "id": 128,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-128.webp",
    "videoTitle": "Knit Out Level 128 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=c-rpswLTJ84"
  },
  {
    "id": 129,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-129.webp",
    "videoTitle": "Knit Out Level 129 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pr4EgN1KoFM"
  },
  {
    "id": 130,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-130.webp",
    "videoTitle": "Knit Out Level 130 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1yrYjVNSTbo"
  },
  {
    "id": 131,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-131.webp",
    "videoTitle": "Knit Out Level 131 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=s-7XNq6fTAI"
  },
  {
    "id": 132,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-132.webp",
    "videoTitle": "Knit Out Level 132 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JD1Q3D7O3Q0"
  },
  {
    "id": 133,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-133.webp",
    "videoTitle": "Knit Out Level 133 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9MbH2HFIABc"
  },
  {
    "id": 134,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-134.webp",
    "videoTitle": "Knit Out Level 134 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=52gxe4a8nm0"
  },
  {
    "id": 135,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-135.webp",
    "videoTitle": "Knit Out Level 135 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=fin9_jSxL1I"
  },
  {
    "id": 136,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-136.webp",
    "videoTitle": "Knit Out Level 136 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=i6lDXUe3oKM"
  },
  {
    "id": 137,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-137.webp",
    "videoTitle": "Knit Out Level 137 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sdC1mn9B9Zc"
  },
  {
    "id": 138,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-138.webp",
    "videoTitle": "Knit Out Level 138 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=VWrVEGRQ4yc"
  },
  {
    "id": 139,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-139.webp",
    "videoTitle": "Knit Out Level 139 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-7HS0Vm9hJU"
  },
  {
    "id": 140,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-140.webp",
    "videoTitle": "Knit Out Level 140 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Q_xSPQLn48Y"
  },
  {
    "id": 141,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-141.webp",
    "videoTitle": "Knit Out Level 141 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QbFN4WBf6Qc"
  },
  {
    "id": 142,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-142.webp",
    "videoTitle": "Knit Out Level 142 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mX_vJlvlB0w"
  },
  {
    "id": 143,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-143.webp",
    "videoTitle": "Knit Out Level 143 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qSQ_lj5QG6Y"
  },
  {
    "id": 144,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-144.webp",
    "videoTitle": "Knit Out Level 144 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=m9zNsPDUa8Q"
  },
  {
    "id": 145,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-145.webp",
    "videoTitle": "Knit Out Level 145 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Rx5BNdypba4"
  },
  {
    "id": 146,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-146.webp",
    "videoTitle": "Knit Out Level 146 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UKspbfiYbmA"
  },
  {
    "id": 147,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-147.webp",
    "videoTitle": "Knit Out Level 147 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=EYif2pCk4NM"
  },
  {
    "id": 148,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-148.webp",
    "videoTitle": "Knit Out Level 148 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YgidfR5Hww4"
  },
  {
    "id": 149,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-149.webp",
    "videoTitle": "Knit Out Level 149 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YS91b8qYHP8"
  },
  {
    "id": 150,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-150.webp",
    "videoTitle": "Knit Out Level 150 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5nqliS3c7KM"
  },
  {
    "id": 151,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-151.webp",
    "videoTitle": "Knit Out Level 151 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=VG4DtcEVQsE"
  },
  {
    "id": 152,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-152.webp",
    "videoTitle": "Knit Out Level 152 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=904hLc2ywIQ"
  },
  {
    "id": 153,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-153.webp",
    "videoTitle": "Knit Out Level 153 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ma45HsEDeuo"
  },
  {
    "id": 154,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-154.webp",
    "videoTitle": "Knit Out Level 154 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=a-yekTAwVB8"
  },
  {
    "id": 155,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-155.webp",
    "videoTitle": "Knit Out Level 155 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=OdC7IBtQ7OA"
  },
  {
    "id": 156,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-156.webp",
    "videoTitle": "Knit Out Level 156 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=OTxGgVEA1IU"
  },
  {
    "id": 157,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-157.webp",
    "videoTitle": "Knit Out Level 157 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=EGZAU0kWYCU"
  },
  {
    "id": 158,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-158.webp",
    "videoTitle": "Knit Out Level 158 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eNoFx10xknc"
  },
  {
    "id": 159,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-159.webp",
    "videoTitle": "Knit Out Level 159 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Tkk_Ek3iSc0"
  },
  {
    "id": 160,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-160.webp",
    "videoTitle": "Knit Out Level 160 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UMkqzzGwmBY"
  },
  {
    "id": 161,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-161.webp",
    "videoTitle": "Knit Out Level 161 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-94h3ssBUrE"
  },
  {
    "id": 162,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-162.webp",
    "videoTitle": "Knit Out Level 162 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=diP7PVhEPOM"
  },
  {
    "id": 163,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-163.webp",
    "videoTitle": "Knit Out Level 163 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=xsdvJBQo5MQ"
  },
  {
    "id": 164,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-164.webp",
    "videoTitle": "Knit Out Level 164 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9YKwKIGwdBw"
  },
  {
    "id": 165,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-165.webp",
    "videoTitle": "Knit Out Level 165 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IPCr4VvdYBo"
  },
  {
    "id": 166,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-166.webp",
    "videoTitle": "Knit Out Level 166 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=lPAlvFp-Iz0"
  },
  {
    "id": 167,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-167.webp",
    "videoTitle": "Knit Out Level 167 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=kA_ogE5d2SU"
  },
  {
    "id": 168,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-168.webp",
    "videoTitle": "Knit Out Level 168 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-Rxouv2kRD4"
  },
  {
    "id": 169,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-169.webp",
    "videoTitle": "Knit Out Level 169 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=20CvTOnihjs"
  },
  {
    "id": 170,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-170.webp",
    "videoTitle": "Knit Out Level 170 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=flssD1RoCQQ"
  },
  {
    "id": 171,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-171.webp",
    "videoTitle": "Knit Out Level 171 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=T5ZAjQA1S48"
  },
  {
    "id": 172,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-172.webp",
    "videoTitle": "Knit Out Level 172 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5b2CdI0c478"
  },
  {
    "id": 173,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-173.webp",
    "videoTitle": "Knit Out Level 173 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_TvqtkWne9U"
  },
  {
    "id": 174,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-174.webp",
    "videoTitle": "Knit Out Level 174 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Beny4Ep0cfg"
  },
  {
    "id": 175,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-175.webp",
    "videoTitle": "Knit Out Level 175 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=20zePWTI5FA"
  },
  {
    "id": 176,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-176.webp",
    "videoTitle": "Knit Out Level 176 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pd89S0X3wfw"
  },
  {
    "id": 177,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-177.webp",
    "videoTitle": "Knit Out Level 177 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-KjldfcmSHo"
  },
  {
    "id": 178,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-178.webp",
    "videoTitle": "Knit Out Level 178 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=unn5gm37ppw"
  },
  {
    "id": 179,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-179.webp",
    "videoTitle": "Knit Out Level 179 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4Px8e9Zq8mg"
  },
  {
    "id": 180,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-180.webp",
    "videoTitle": "Knit Out Level 180 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7LJqaL-9nAI"
  },
  {
    "id": 181,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-181.webp",
    "videoTitle": "Knit Out Level 181 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=vxb54hI57yA"
  },
  {
    "id": 182,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-182.webp",
    "videoTitle": "Knit Out Level 182 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6W48jtr8il0"
  },
  {
    "id": 183,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-183.webp",
    "videoTitle": "Knit Out Level 183 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=op82VYQ5-Ug"
  },
  {
    "id": 184,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-184.webp",
    "videoTitle": "Knit Out Level 184 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=2oUzST8ygPc"
  },
  {
    "id": 185,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-185.webp",
    "videoTitle": "Knit Out Level 185 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4P7A3_A8nZQ"
  },
  {
    "id": 186,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-186.webp",
    "videoTitle": "Knit Out Level 186 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nj4_E3N7S_w"
  },
  {
    "id": 187,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-187.webp",
    "videoTitle": "Knit Out Level 187 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=r9aXwBVWAuM"
  },
  {
    "id": 188,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-188.webp",
    "videoTitle": "Knit Out Level 188 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Y2zoowfKNm8"
  },
  {
    "id": 189,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-189.webp",
    "videoTitle": "Knit Out Level 189 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GkKCXg5Bflw"
  },
  {
    "id": 190,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-190.webp",
    "videoTitle": "Knit Out Level 190 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8TM7H8ISauE"
  },
  {
    "id": 191,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-191.webp",
    "videoTitle": "Knit Out Level 191 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=J6RHNMXFwuk"
  },
  {
    "id": 192,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-192.webp",
    "videoTitle": "Knit Out Level 192 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=E61SH-HOqGI"
  },
  {
    "id": 193,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-193.webp",
    "videoTitle": "Knit Out Level 193 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=NkBnE41TPXY"
  },
  {
    "id": 194,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-194.webp",
    "videoTitle": "Knit Out Level 194 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UtaZXe-d5d4"
  },
  {
    "id": 195,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-195.webp",
    "videoTitle": "Knit Out Level 195 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ODxDxzyMruk"
  },
  {
    "id": 196,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-196.webp",
    "videoTitle": "Knit Out Level 196 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=hGCOE81VOmI"
  },
  {
    "id": 197,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-197.webp",
    "videoTitle": "Knit Out Level 197 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=85a3D4_AYRo"
  },
  {
    "id": 198,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-198.webp",
    "videoTitle": "Knit Out Level 198 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Iqgir87LshM"
  },
  {
    "id": 199,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-199.webp",
    "videoTitle": "Knit Out Level 199 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TfJMA5l7WcI"
  },
  {
    "id": 200,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-200.webp",
    "videoTitle": "Knit Out Level 200 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zWg1EE4mXCg"
  },
  {
    "id": 201,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-201.webp",
    "videoTitle": "Knit Out Level 201 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_3YxYng1J40"
  },
  {
    "id": 202,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-202.webp",
    "videoTitle": "Knit Out Level 202 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sjsALyxkESs"
  },
  {
    "id": 203,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-203.webp",
    "videoTitle": "Knit Out Level 203 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sQw9QeGq-CA"
  },
  {
    "id": 204,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-204.webp",
    "videoTitle": "Knit Out Level 204 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=frsUH6gTPz4"
  },
  {
    "id": 205,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-205.webp",
    "videoTitle": "Knit Out Level 205 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QNbvlKtFOBU"
  },
  {
    "id": 206,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-206.webp",
    "videoTitle": "Knit Out Level 206 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=MWpBLI5RS1U"
  },
  {
    "id": 207,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-207.webp",
    "videoTitle": "Knit Out Level 207 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=xJm5W029E_w"
  },
  {
    "id": 208,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-208.webp",
    "videoTitle": "Knit Out Level 208 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=p0FW9ZMw8YE"
  },
  {
    "id": 209,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-209.webp",
    "videoTitle": "Knit Out Level 209 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Sf9CWgwc9TQ"
  },
  {
    "id": 210,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-210.webp",
    "videoTitle": "Knit Out Level 210 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jjZzlJGtz3c"
  },
  {
    "id": 211,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-211.webp",
    "videoTitle": "Knit Out Level 211 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8NXz8lWag2Y"
  },
  {
    "id": 212,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-212.webp",
    "videoTitle": "Knit Out Level 212 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=K9Rm5QER6os"
  },
  {
    "id": 213,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-213.webp",
    "videoTitle": "Knit Out Level 213 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QimgaCKmrkE"
  },
  {
    "id": 214,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-214.webp",
    "videoTitle": "Knit Out Level 214 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=dh1MWLsGLQg"
  },
  {
    "id": 215,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-215.webp",
    "videoTitle": "Knit Out Level 215 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=o6-WCHwiitY"
  },
  {
    "id": 216,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-216.webp",
    "videoTitle": "Knit Out Level 216 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iYBoQWvszM0"
  },
  {
    "id": 217,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-217.webp",
    "videoTitle": "Knit Out Level 217 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=fEcWj2_9Exk"
  },
  {
    "id": 218,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-218.webp",
    "videoTitle": "Knit Out Level 218 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eKiVm9zbyjY"
  },
  {
    "id": 219,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-219.webp",
    "videoTitle": "Knit Out Level 219 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_63Hsae3JjQ"
  },
  {
    "id": 220,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-220.webp",
    "videoTitle": "Knit Out Level 220 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3ASyxcGd2Ps"
  },
  {
    "id": 221,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-221.webp",
    "videoTitle": "Knit Out Level 221 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=W2As_YclwsA"
  },
  {
    "id": 222,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-222.webp",
    "videoTitle": "Knit Out Level 222 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1S8EP4CLZ-w"
  },
  {
    "id": 223,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-223.webp",
    "videoTitle": "Knit Out Level 223 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pG--FpB_4GY"
  },
  {
    "id": 224,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-224.webp",
    "videoTitle": "Knit Out Level 224 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=78DEu0S8pPg"
  },
  {
    "id": 225,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-225.webp",
    "videoTitle": "Knit Out Level 225 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=62ubGIdc8tc"
  },
  {
    "id": 226,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-226.webp",
    "videoTitle": "Knit Out Level 226 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5GHKgF8aC8c"
  },
  {
    "id": 227,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-227.webp",
    "videoTitle": "Knit Out Level 227 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TyQWUYwFGwQ"
  },
  {
    "id": 228,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-228.webp",
    "videoTitle": "Knit Out Level 228 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZZMZ8dQb_N0"
  },
  {
    "id": 229,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-229.webp",
    "videoTitle": "Knit Out Level 229 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pTro6pyIk6U"
  },
  {
    "id": 230,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-230.webp",
    "videoTitle": "Knit Out Level 230 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=MF4wqspZE7M"
  },
  {
    "id": 231,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-231.webp",
    "videoTitle": "Knit Out Level 231 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=2rOayb5HvzA"
  },
  {
    "id": 232,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-232.webp",
    "videoTitle": "Knit Out Level 232 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mBFljvjqfaU"
  },
  {
    "id": 233,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-233.webp",
    "videoTitle": "Knit Out Level 233 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7KFkhBiXPdU"
  },
  {
    "id": 234,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-234.webp",
    "videoTitle": "Knit Out Level 234 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9dhWjuDgqXk"
  },
  {
    "id": 235,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-235.webp",
    "videoTitle": "Knit Out Level 235 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Hx_lOs4hHWk"
  },
  {
    "id": 236,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-236.webp",
    "videoTitle": "Knit Out Level 236 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XxcXWob1IeA"
  },
  {
    "id": 237,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-237.webp",
    "videoTitle": "Knit Out Level 237 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=956pbWyBdD0"
  },
  {
    "id": 238,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-238.webp",
    "videoTitle": "Knit Out Level 238 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=KjBx-ncYStw"
  },
  {
    "id": 239,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-239.webp",
    "videoTitle": "Knit Out Level 239 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=0FQCaNZhRMk"
  },
  {
    "id": 240,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-240.webp",
    "videoTitle": "Knit Out Level 240 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JJJNQUfk7Xk"
  },
  {
    "id": 241,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-241.webp",
    "videoTitle": "Knit Out Level 241 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jc9gp7IaPV0"
  },
  {
    "id": 242,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-242.webp",
    "videoTitle": "Knit Out Level 242 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LBnDY9bOZlU"
  },
  {
    "id": 243,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-243.webp",
    "videoTitle": "Knit Out Level 243 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SzabgrEw8Gs"
  },
  {
    "id": 244,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-244.webp",
    "videoTitle": "Knit Out Level 244 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UwNP6meFCPc"
  },
  {
    "id": 245,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-245.webp",
    "videoTitle": "Knit Out Level 245 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sWWty4x1FJU"
  },
  {
    "id": 246,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-246.webp",
    "videoTitle": "Knit Out Level 246 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zolu5nTpgDo"
  },
  {
    "id": 247,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-247.webp",
    "videoTitle": "Knit Out Level 247 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=oUmQnP_kb40"
  },
  {
    "id": 248,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-248.webp",
    "videoTitle": "Knit Out Level 248 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UjIcTSKcxCM"
  },
  {
    "id": 249,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-249.webp",
    "videoTitle": "Knit Out Level 249 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YmyZh77v3vw"
  },
  {
    "id": 250,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-250.webp",
    "videoTitle": "Knit Out Level 250 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=09FhiBpjiDc"
  },
  {
    "id": 251,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-251.webp",
    "videoTitle": "Knit Out Level 251 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=KkTkZdca0tM"
  },
  {
    "id": 252,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-252.webp",
    "videoTitle": "Knit Out Level 252 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GFKjPZIU8_g"
  },
  {
    "id": 253,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-253.webp",
    "videoTitle": "Knit Out Level 253 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gVZj5l0R19w"
  },
  {
    "id": 254,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-254.webp",
    "videoTitle": "Knit Out Level 254 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8SdgXECzBUk"
  },
  {
    "id": 255,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-255.webp",
    "videoTitle": "Knit Out Level 255 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=DHh0klab1-U"
  },
  {
    "id": 256,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-256.webp",
    "videoTitle": "Knit Out Level 256 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=2o6J40YRxKA"
  },
  {
    "id": 257,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-257.webp",
    "videoTitle": "Knit Out Level 257 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6W82MzTkwqI"
  },
  {
    "id": 258,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-258.webp",
    "videoTitle": "Knit Out Level 258 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gcI518JrG64"
  },
  {
    "id": 259,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-259.webp",
    "videoTitle": "Knit Out Level 259 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=69yys_PQQPc"
  },
  {
    "id": 260,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-260.webp",
    "videoTitle": "Knit Out Level 260 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nfIPwE1o5c0"
  },
  {
    "id": 261,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-261.webp",
    "videoTitle": "Knit Out Level 261 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mrkA6GC-chs"
  },
  {
    "id": 262,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-262.webp",
    "videoTitle": "Knit Out Level 262 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ihZSq11iYAc"
  },
  {
    "id": 263,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-263.webp",
    "videoTitle": "Knit Out Level 263 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8zdYcfw2NL4"
  },
  {
    "id": 264,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-264.webp",
    "videoTitle": "Knit Out Level 264 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Lgf0wldc7OY"
  },
  {
    "id": 265,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-265.webp",
    "videoTitle": "Knit Out Level 265 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=q1U9CSQs1Ak"
  },
  {
    "id": 266,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-266.webp",
    "videoTitle": "Knit Out Level 266 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ivm5piCRBXY"
  },
  {
    "id": 267,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-267.webp",
    "videoTitle": "Knit Out Level 267 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4xz8NyiK0NA"
  },
  {
    "id": 268,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-268.webp",
    "videoTitle": "Knit Out Level 268 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZIFpAqmqShI"
  },
  {
    "id": 269,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-269.webp",
    "videoTitle": "Knit Out Level 269 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=lfGvGNVvgpk"
  },
  {
    "id": 270,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-270.webp",
    "videoTitle": "Knit Out Level 270 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=868xMPjCCHQ"
  },
  {
    "id": 271,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-271.webp",
    "videoTitle": "Knit Out Level 271 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qBF2TuKd3TM"
  },
  {
    "id": 272,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-272.webp",
    "videoTitle": "Knit Out Level 272 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JnrlWC7r6gQ"
  },
  {
    "id": 273,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-273.webp",
    "videoTitle": "Knit Out Level 273 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tb3mEuzzD6Q"
  },
  {
    "id": 274,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-274.webp",
    "videoTitle": "Knit Out Level 274 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GeqfHPJvx4E"
  },
  {
    "id": 275,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-275.webp",
    "videoTitle": "Knit Out Level 275 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=k79-437XXgI"
  },
  {
    "id": 276,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-276.webp",
    "videoTitle": "Knit Out Level 276 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=fJl32vV7q8g"
  },
  {
    "id": 277,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-277.webp",
    "videoTitle": "Knit Out Level 277 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1cwTbPMTbUo"
  },
  {
    "id": 278,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-278.webp",
    "videoTitle": "Knit Out Level 278 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TsZ9dVluZdI"
  },
  {
    "id": 279,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-279.webp",
    "videoTitle": "Knit Out Level 279 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nsHU7UpLMbw"
  },
  {
    "id": 280,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-280.webp",
    "videoTitle": "Knit Out Level 280 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=22aMU1B5plU"
  },
  {
    "id": 281,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-281.webp",
    "videoTitle": "Knit Out Level 281 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ypBCisKpc9o"
  },
  {
    "id": 282,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-282.webp",
    "videoTitle": "Knit Out Level 282 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=vE8Z6ylPF8s"
  },
  {
    "id": 283,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-283.webp",
    "videoTitle": "Knit Out Level 283 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ld0g6ivA_Co"
  },
  {
    "id": 284,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-284.webp",
    "videoTitle": "Knit Out Level 284 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XrYVTEPgKMo"
  },
  {
    "id": 285,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-285.webp",
    "videoTitle": "Knit Out Level 285 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=G7WrNSHzUts"
  },
  {
    "id": 286,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-286.webp",
    "videoTitle": "Knit Out Level 286 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nyBBvFCtOqc"
  },
  {
    "id": 287,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-287.webp",
    "videoTitle": "Knit Out Level 287 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-73z9FxIGvI"
  },
  {
    "id": 288,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-288.webp",
    "videoTitle": "Knit Out Level 288 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Iy3MdwUZLe4"
  },
  {
    "id": 289,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-289.webp",
    "videoTitle": "Knit Out Level 289 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=i2l-3djDgUA"
  },
  {
    "id": 290,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-290.webp",
    "videoTitle": "Knit Out Level 290 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sOQkKWgO-yM"
  },
  {
    "id": 291,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-291.webp",
    "videoTitle": "Knit Out Level 291 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GPD2uP9Cp70"
  },
  {
    "id": 292,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-292.webp",
    "videoTitle": "Knit Out Level 292 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-XaPXbafRNQ"
  },
  {
    "id": 293,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-293.webp",
    "videoTitle": "Knit Out Level 293 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zHyyS7yyiyM"
  },
  {
    "id": 294,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-294.webp",
    "videoTitle": "Knit Out Level 294 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IP85M4Xlffc"
  },
  {
    "id": 295,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-295.webp",
    "videoTitle": "Knit Out Level 295 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=dnA2IY0Zh8A"
  },
  {
    "id": 296,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-296.webp",
    "videoTitle": "Knit Out Level 296 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RIZqlC5a37o"
  },
  {
    "id": 297,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-297.webp",
    "videoTitle": "Knit Out Level 297 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IsEnkozeeJI"
  },
  {
    "id": 298,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-298.webp",
    "videoTitle": "Knit Out Level 298 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YvlPKc2lJ1g"
  },
  {
    "id": 299,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-299.webp",
    "videoTitle": "Knit Out Level 299 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1k8wvzioTmo"
  },
  {
    "id": 300,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-300.webp",
    "videoTitle": "Knit Out Level 300 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4VFaBGEnpmw"
  },
  {
    "id": 301,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-301.webp",
    "videoTitle": "Knit Out Level 301 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=wqRiO8EPA9s"
  },
  {
    "id": 302,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-302.webp",
    "videoTitle": "Knit Out Level 302 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=yLkBrDsunxg"
  },
  {
    "id": 303,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-303.webp",
    "videoTitle": "Knit Out Level 303 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=r45Iw_L2_VU"
  },
  {
    "id": 304,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-304.webp",
    "videoTitle": "Knit Out Level 304 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8edvYvXpeEE"
  },
  {
    "id": 305,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-305.webp",
    "videoTitle": "Knit Out Level 305 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pREzxp4T4ac"
  },
  {
    "id": 306,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-306.webp",
    "videoTitle": "Knit Out Level 306 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AzxyqjFAYzM"
  },
  {
    "id": 307,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-307.webp",
    "videoTitle": "Knit Out Level 307 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RMK_kacNThE"
  },
  {
    "id": 308,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-308.webp",
    "videoTitle": "Knit Out Level 308 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IuIfOQqtY78"
  },
  {
    "id": 309,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-309.webp",
    "videoTitle": "Knit Out Level 309 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jqiVzMtPqis"
  },
  {
    "id": 310,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-310.webp",
    "videoTitle": "Knit Out Level 310 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6XZWbAcjdhc"
  },
  {
    "id": 311,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-311.webp",
    "videoTitle": "Knit Out Level 311 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BGhSCvJNs4k"
  },
  {
    "id": 312,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-312.webp",
    "videoTitle": "Knit Out Level 312 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=L0BlRcJntm0"
  },
  {
    "id": 313,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-313.webp",
    "videoTitle": "Knit Out Level 313 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=S3wN190I6Lc"
  },
  {
    "id": 314,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-314.webp",
    "videoTitle": "Knit Out Level 314 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7vnK-hPBGcw"
  },
  {
    "id": 315,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-315.webp",
    "videoTitle": "Knit Out Level 315 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BDvCM8YLLt4"
  },
  {
    "id": 316,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-316.webp",
    "videoTitle": "Knit Out Level 316 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-3duAiW2gv4"
  },
  {
    "id": 317,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-317.webp",
    "videoTitle": "Knit Out Level 317 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9YfAG1swXjU"
  },
  {
    "id": 318,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-318.webp",
    "videoTitle": "Knit Out Level 318 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_Qa0ZQGuDQc"
  },
  {
    "id": 319,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-319.webp",
    "videoTitle": "Knit Out Level 319 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=NtpuyKlzUJc"
  },
  {
    "id": 320,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-320.webp",
    "videoTitle": "Knit Out Level 320 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=3eZEoniHGQI"
  },
  {
    "id": 321,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-321.webp",
    "videoTitle": "Knit Out Level 321 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=een0Bohnh78"
  },
  {
    "id": 322,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-322.webp",
    "videoTitle": "Knit Out Level 322 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tEcjnT9brBk"
  },
  {
    "id": 323,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-323.webp",
    "videoTitle": "Knit Out Level 323 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TuMUAIeAW8w"
  },
  {
    "id": 324,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-324.webp",
    "videoTitle": "Knit Out Level 324 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=0V0BcVvtt0I"
  },
  {
    "id": 325,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-325.webp",
    "videoTitle": "Knit Out Level 325 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=O53YgONTO1Y"
  },
  {
    "id": 326,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-326.webp",
    "videoTitle": "Knit Out Level 326 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tXxbHXpCE50"
  },
  {
    "id": 327,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-327.webp",
    "videoTitle": "Knit Out Level 327 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YasnrfjS6RY"
  },
  {
    "id": 328,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-328.webp",
    "videoTitle": "Knit Out Level 328 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-q_A45uHE9U"
  },
  {
    "id": 329,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-329.webp",
    "videoTitle": "Knit Out Level 329 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aDM5o_b6oYg"
  },
  {
    "id": 330,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-330.webp",
    "videoTitle": "Knit Out Level 330 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=I6E_wC3I2XQ"
  },
  {
    "id": 331,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-331.webp",
    "videoTitle": "Knit Out Level 331 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=cdQgrajGlcE"
  },
  {
    "id": 332,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-332.webp",
    "videoTitle": "Knit Out Level 332 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=H09cVmHg4CA"
  },
  {
    "id": 333,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-333.webp",
    "videoTitle": "Knit Out Level 333 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=d5njTReN7Hs"
  },
  {
    "id": 334,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-334.webp",
    "videoTitle": "Knit Out Level 334 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=DqwoN1ET8LE"
  },
  {
    "id": 335,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-335.webp",
    "videoTitle": "Knit Out Level 335 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_H4TTiPSlmA"
  },
  {
    "id": 336,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-336.webp",
    "videoTitle": "Knit Out Level 336 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AJhuFGHSeEc"
  },
  {
    "id": 337,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-337.webp",
    "videoTitle": "Knit Out Level 337 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=B3xpMYODuao"
  },
  {
    "id": 338,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-338.webp",
    "videoTitle": "Knit Out Level 338 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BbJ-xZftcbc"
  },
  {
    "id": 339,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-339.webp",
    "videoTitle": "Knit Out Level 339 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=cC21yCW00WA"
  },
  {
    "id": 340,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-340.webp",
    "videoTitle": "Knit Out Level 340 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PIFhI5n6z14"
  },
  {
    "id": 341,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-341.webp",
    "videoTitle": "Knit Out Level 341 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZOnNXGU9Lp0"
  },
  {
    "id": 342,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-342.webp",
    "videoTitle": "Knit Out Level 342 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sq4VgYK5LhY"
  },
  {
    "id": 343,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-343.webp",
    "videoTitle": "Knit Out Level 343 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IrcY23c_CME"
  },
  {
    "id": 344,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-344.webp",
    "videoTitle": "Knit Out Level 344 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=oDYzVaWBOHw"
  },
  {
    "id": 345,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-345.webp",
    "videoTitle": "Knit Out Level 345 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TvihzsMED0w"
  },
  {
    "id": 346,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-346.webp",
    "videoTitle": "Knit Out Level 346 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PxPE-NvSL4s"
  },
  {
    "id": 347,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-347.webp",
    "videoTitle": "Knit Out Level 347 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ATGCRuyiBDs"
  },
  {
    "id": 348,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-348.webp",
    "videoTitle": "Knit Out Level 348 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_khmTk59rTw"
  },
  {
    "id": 349,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-349.webp",
    "videoTitle": "Knit Out Level 349 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-Ikf1vm5rxM"
  },
  {
    "id": 350,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-350.webp",
    "videoTitle": "Knit Out Level 350 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qIFYkaFYdWk"
  },
  {
    "id": 351,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-351.webp",
    "videoTitle": "Knit Out Level 351 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZY6CpEY8hIg"
  },
  {
    "id": 352,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-352.webp",
    "videoTitle": "Knit Out Level 352 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QP4ZqCK6lpU"
  },
  {
    "id": 353,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-353.webp",
    "videoTitle": "Knit Out Level 353 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RYVLvSe8_rw"
  },
  {
    "id": 354,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-354.webp",
    "videoTitle": "Knit Out Level 354 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ExeSAQVcvSA"
  },
  {
    "id": 355,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-355.webp",
    "videoTitle": "Knit Out Level 355 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=MAUDC3xPCmE"
  },
  {
    "id": 356,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-356.webp",
    "videoTitle": "Knit Out Level 356 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=uaU_kVsvliQ"
  },
  {
    "id": 357,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-357.webp",
    "videoTitle": "Knit Out Level 357 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Fh5FHyjExy4"
  },
  {
    "id": 358,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-358.webp",
    "videoTitle": "Knit Out Level 358 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=26rHF9TofYM"
  },
  {
    "id": 359,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-359.webp",
    "videoTitle": "Knit Out Level 359 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=lxyZGF5XVzE"
  },
  {
    "id": 360,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-360.webp",
    "videoTitle": "Knit Out Level 360 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=dh8bd57Evk0"
  },
  {
    "id": 361,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-361.webp",
    "videoTitle": "Knit Out Level 361 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ARSHrd9qcu0"
  },
  {
    "id": 362,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-362.webp",
    "videoTitle": "Knit Out Level 362 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=V2o6dxP7SsQ"
  },
  {
    "id": 363,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-363.webp",
    "videoTitle": "Knit Out Level 363 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=7MIVBN_dEso"
  },
  {
    "id": 364,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-364.webp",
    "videoTitle": "Knit Out Level 364 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=KB8ZdUsnaig"
  },
  {
    "id": 365,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-365.webp",
    "videoTitle": "Knit Out Level 365 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=8XchTA0B1hQ"
  },
  {
    "id": 366,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-366.webp",
    "videoTitle": "Knit Out Level 366 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eYI2sXkxnYM"
  },
  {
    "id": 367,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-367.webp",
    "videoTitle": "Knit Out Level 367 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UE3vGVODLmQ"
  },
  {
    "id": 368,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-368.webp",
    "videoTitle": "Knit Out Level 368 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=p_gLAODk4KA"
  },
  {
    "id": 369,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-369.webp",
    "videoTitle": "Knit Out Level 369 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=M0gMRgjhblg"
  },
  {
    "id": 370,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-370.webp",
    "videoTitle": "Knit Out Level 370 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SMWJp08cT9E"
  },
  {
    "id": 371,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-371.webp",
    "videoTitle": "Knit Out Level 371 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5fBgQsgvTWo"
  },
  {
    "id": 372,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-372.webp",
    "videoTitle": "Knit Out Level 372 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=84VTg4_zkDY"
  },
  {
    "id": 373,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-373.webp",
    "videoTitle": "Knit Out Level 373 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IQp1odYIBqc"
  },
  {
    "id": 374,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-374.webp",
    "videoTitle": "Knit Out Level 374 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ylTD0II-06A"
  },
  {
    "id": 375,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-375.webp",
    "videoTitle": "Knit Out Level 375 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=VmJ4f1gQl3E"
  },
  {
    "id": 376,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-376.webp",
    "videoTitle": "Knit Out Level 376 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=0nP0aKXI6cc"
  },
  {
    "id": 377,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-377.webp",
    "videoTitle": "Knit Out Level 377 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Yz-lkgvYuwU"
  },
  {
    "id": 378,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-378.webp",
    "videoTitle": "Knit Out Level 378 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ij97_DFwgkI"
  },
  {
    "id": 379,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-379.webp",
    "videoTitle": "Knit Out Level 379 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=lGHr1nxDZ9c"
  },
  {
    "id": 380,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-380.webp",
    "videoTitle": "Knit Out Level 380 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=b5QdWfT0UxM"
  },
  {
    "id": 381,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-381.webp",
    "videoTitle": "Knit Out Level 381 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=K6awviR16W4"
  },
  {
    "id": 382,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-382.webp",
    "videoTitle": "Knit Out Level 382 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ay1pYtUT0j0"
  },
  {
    "id": 383,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-383.webp",
    "videoTitle": "Knit Out Level 383 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YYdAQ_baQ5k"
  },
  {
    "id": 384,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-384.webp",
    "videoTitle": "Knit Out Level 384 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=UbEkWRwmCz0"
  },
  {
    "id": 385,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-385.webp",
    "videoTitle": "Knit Out Level 385 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SILKV8QmYno"
  },
  {
    "id": 386,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-386.webp",
    "videoTitle": "Knit Out Level 386 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GiBa1KQuEIw"
  },
  {
    "id": 387,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-387.webp",
    "videoTitle": "Knit Out Level 387 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Zo5ie5pKEYQ"
  },
  {
    "id": 388,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-388.webp",
    "videoTitle": "Knit Out Level 388 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iroh6cs5w0M"
  },
  {
    "id": 389,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-389.webp",
    "videoTitle": "Knit Out Level 389 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=O45Lcf_Y2dk"
  },
  {
    "id": 390,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-390.webp",
    "videoTitle": "Knit Out Level 390 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4Teo7SAEsk0"
  },
  {
    "id": 391,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-391.webp",
    "videoTitle": "Knit Out Level 391 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Mw6pWM5_w7Q"
  },
  {
    "id": 392,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-392.webp",
    "videoTitle": "Knit Out Level 392 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=joBafheUk_U"
  },
  {
    "id": 393,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-393.webp",
    "videoTitle": "Knit Out Level 393 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-i5eZtSsE8c"
  },
  {
    "id": 394,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-394.webp",
    "videoTitle": "Knit Out Level 394 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=GFo6M_Z8_ic"
  },
  {
    "id": 395,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-395.webp",
    "videoTitle": "Knit Out Level 395 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TkCz_YvbLss"
  },
  {
    "id": 396,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-396.webp",
    "videoTitle": "Knit Out Level 396 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=EiER1Uib3AY"
  },
  {
    "id": 397,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-397.webp",
    "videoTitle": "Knit Out Level 397 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PhASC3YFbXM"
  },
  {
    "id": 398,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-398.webp",
    "videoTitle": "Knit Out Level 398 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=o8QD8m9jS_A"
  },
  {
    "id": 399,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-399.webp",
    "videoTitle": "Knit Out Level 399 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6gKHmVHQprc"
  },
  {
    "id": 400,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-400.webp",
    "videoTitle": "Knit Out Level 400 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iMtMG7l0FhY"
  },
  {
    "id": 401,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-401.webp",
    "videoTitle": "Knit Out Level 401 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=OICIZDQJ64w"
  },
  {
    "id": 402,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-402.webp",
    "videoTitle": "Knit Out Level 402 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Zk867lUlb94"
  },
  {
    "id": 403,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-403.webp",
    "videoTitle": "Knit Out Level 403 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BLPTLJjUOrs"
  },
  {
    "id": 404,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-404.webp",
    "videoTitle": "Knit Out Level 404 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QIewBU_X5Ss"
  },
  {
    "id": 405,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-405.webp",
    "videoTitle": "Knit Out Level 405 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=rwwz6fWVQWw"
  },
  {
    "id": 406,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-406.webp",
    "videoTitle": "Knit Out Level 406 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pz6xhH6kW08"
  },
  {
    "id": 407,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-407.webp",
    "videoTitle": "Knit Out Level 407 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZSN8BS0dFQw"
  },
  {
    "id": 408,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-408.webp",
    "videoTitle": "Knit Out Level 408 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=FvYmREtisXc"
  },
  {
    "id": 409,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-409.webp",
    "videoTitle": "Knit Out Level 409 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nvNlqhjIlao"
  },
  {
    "id": 410,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-410.webp",
    "videoTitle": "Knit Out Level 410 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mdOVP3MFuDY"
  },
  {
    "id": 411,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-411.webp",
    "videoTitle": "Knit Out Level 411 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tjUjxp1m2OM"
  },
  {
    "id": 412,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-412.webp",
    "videoTitle": "Knit Out Level 412 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SyYvmBmMeEU"
  },
  {
    "id": 413,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-413.webp",
    "videoTitle": "Knit Out Level 413 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gdleZ5Ftnlc"
  },
  {
    "id": 414,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-414.webp",
    "videoTitle": "Knit Out Level 414 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6-VqAR0oXb4"
  },
  {
    "id": 415,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-415.webp",
    "videoTitle": "Knit Out Level 415 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=RMs_h2-hND8"
  },
  {
    "id": 416,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-416.webp",
    "videoTitle": "Knit Out Level 416 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LYuz44Te0g8"
  },
  {
    "id": 417,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-417.webp",
    "videoTitle": "Knit Out Level 417 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4EbegU7NOg4"
  },
  {
    "id": 418,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-418.webp",
    "videoTitle": "Knit Out Level 418 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IrkRRIycjaY"
  },
  {
    "id": 419,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-419.webp",
    "videoTitle": "Knit Out Level 419 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Usx7DqhXTYw"
  },
  {
    "id": 420,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-420.webp",
    "videoTitle": "Knit Out Level 420 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-vvcD303Dhc"
  },
  {
    "id": 421,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-421.webp",
    "videoTitle": "Knit Out Level 421 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qwm-znMo5oI"
  },
  {
    "id": 422,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-422.webp",
    "videoTitle": "Knit Out Level 422 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=EJ0YG1LA97Q"
  },
  {
    "id": 423,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-423.webp",
    "videoTitle": "Knit Out Level 423 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6PeFSVhpzP8"
  },
  {
    "id": 424,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-424.webp",
    "videoTitle": "Knit Out Level 424 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=cy293enygrw"
  },
  {
    "id": 425,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-425.webp",
    "videoTitle": "Knit Out Level 425 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=_4mntBtiFtE"
  },
  {
    "id": 426,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-426.webp",
    "videoTitle": "Knit Out Level 426 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BQUomPgcGFg"
  },
  {
    "id": 427,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-427.webp",
    "videoTitle": "Knit Out Level 427 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aDyFdI9yXBY"
  },
  {
    "id": 428,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-428.webp",
    "videoTitle": "Knit Out Level 428 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eJe9SED0Kqg"
  },
  {
    "id": 429,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-429.webp",
    "videoTitle": "Knit Out Level 429 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=vQS9nkuEGrE"
  },
  {
    "id": 430,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-430.webp",
    "videoTitle": "Knit Out Level 430 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6w34QqSonWA"
  },
  {
    "id": 431,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-431.webp",
    "videoTitle": "Knit Out Level 431 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4O92nTlrN2M"
  },
  {
    "id": 432,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-432.webp",
    "videoTitle": "Knit Out Level 432 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mmWUDi4qA1k"
  },
  {
    "id": 433,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-433.webp",
    "videoTitle": "Knit Out Level 433 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=DpotDd6-Arc"
  },
  {
    "id": 434,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-434.webp",
    "videoTitle": "Knit Out Level 434 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tpSwTVaeoyk"
  },
  {
    "id": 435,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-435.webp",
    "videoTitle": "Knit Out Level 435 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=uit0-rFBYDE"
  },
  {
    "id": 436,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-436.webp",
    "videoTitle": "Knit Out Level 436 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=yL5AJRSE5wU"
  },
  {
    "id": 437,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-437.webp",
    "videoTitle": "Knit Out Level 437 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=jV4ljL7fe3I"
  },
  {
    "id": 438,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-438.webp",
    "videoTitle": "Knit Out Level 438 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6hBUeGzE8rc"
  },
  {
    "id": 439,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-439.webp",
    "videoTitle": "Knit Out Level 439 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Q84V194h1Z8"
  },
  {
    "id": 440,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-440.webp",
    "videoTitle": "Knit Out Level 440 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=brRe235MB0c"
  },
  {
    "id": 441,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-441.webp",
    "videoTitle": "Knit Out Level 441 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pzm2PVuf21w"
  },
  {
    "id": 442,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-442.webp",
    "videoTitle": "Knit Out Level 442 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LVpXHdk7g8Y"
  },
  {
    "id": 443,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-443.webp",
    "videoTitle": "Knit Out Level 443 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=34H2nN3GKiU"
  },
  {
    "id": 444,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-444.webp",
    "videoTitle": "Knit Out Level 444 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=P7kKkqR1bjY"
  },
  {
    "id": 445,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-445.webp",
    "videoTitle": "Knit Out Level 445 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=WWT9wrYkB6w"
  },
  {
    "id": 446,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-446.webp",
    "videoTitle": "Knit Out Level 446 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4vLjHeim_IE"
  },
  {
    "id": 447,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-447.webp",
    "videoTitle": "Knit Out Level 447 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tbwku6bOKws"
  },
  {
    "id": 448,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-448.webp",
    "videoTitle": "Knit Out Level 448 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gwK2ikL26VA"
  },
  {
    "id": 449,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-449.webp",
    "videoTitle": "Knit Out Level 449 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=80nzmbA7C7Q"
  },
  {
    "id": 450,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-450.webp",
    "videoTitle": "Knit Out Level 450 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=qtyCsGX7k0w"
  },
  {
    "id": 451,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-451.webp",
    "videoTitle": "Knit Out Level 451 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=te9WjqMNjVI"
  },
  {
    "id": 452,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-452.webp",
    "videoTitle": "Knit Out Level 452 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=98Owmqv16a8"
  },
  {
    "id": 453,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-453.webp",
    "videoTitle": "Knit Out Level 453 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LV4xUZTSOvo"
  },
  {
    "id": 454,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-454.webp",
    "videoTitle": "Knit Out Level 454 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tq3JnbSAOI0"
  },
  {
    "id": 455,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-455.webp",
    "videoTitle": "Knit Out Level 455 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=L01l18Ft-7M"
  },
  {
    "id": 456,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-456.webp",
    "videoTitle": "Knit Out Level 456 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aZE7NPKeuJY"
  },
  {
    "id": 457,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-457.webp",
    "videoTitle": "Knit Out Level 457 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=atggVuioiFM"
  },
  {
    "id": 458,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-458.webp",
    "videoTitle": "Knit Out Level 458 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PiolPJ10xPY"
  },
  {
    "id": 459,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-459.webp",
    "videoTitle": "Knit Out Level 459 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=L5rCUttrS4s"
  },
  {
    "id": 460,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-460.webp",
    "videoTitle": "Knit Out Level 460 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=KPv3w0LJOd0"
  },
  {
    "id": 461,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-461.webp",
    "videoTitle": "Knit Out Level 461 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=0t89P-Z4Tl8"
  },
  {
    "id": 462,
    "imgUrl": "/images/thumbnails/Knit-Out-Level-462.webp",
    "videoTitle": "Knit Out Level 462 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=HYIYla0ggug"
  },
  {
    "id": 463,
    "videoTitle": "Knit Out Level 463 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=PalrH7_eUkA",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-457.webp"
  },
  {
    "id": 464,
    "videoTitle": "Knit Out Level 464 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=fBtUcLPWTRM",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-458.webp"
  },
  {
    "id": 465,
    "videoTitle": "Knit Out Level 465 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=HjIwb2Dpmu4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-459.webp"
  },
  {
    "id": 466,
    "videoTitle": "Knit Out Level 466 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ZHPwmrfQSy8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-460.webp"
  },
  {
    "id": 467,
    "videoTitle": "Knit Out Level 467 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iz4cIkrG7aw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-461.webp"
  },
  {
    "id": 468,
    "videoTitle": "Knit Out Level 468 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=bP8-avHJ4-E",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-462.webp"
  },
  {
    "id": 469,
    "videoTitle": "Knit Out Level 469 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1aLuJXUAkI0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-463.webp"
  },
  {
    "id": 470,
    "videoTitle": "Knit Out Level 470 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aY5MPJ761G0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-464.webp"
  },
  {
    "id": 471,
    "videoTitle": "Knit Out Level 471 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Mutt9V1jSRg",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-465.webp"
  },
  {
    "id": 472,
    "videoTitle": "Knit Out Level 472 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LyqT9dYrgb8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-466.webp"
  },
  {
    "id": 473,
    "videoTitle": "Knit Out Level 473 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=K1WdyEmWnmY",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-467.webp"
  },
  {
    "id": 474,
    "videoTitle": "Knit Out Level 474 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=K-L9CbE_Xf8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-468.webp"
  },
  {
    "id": 475,
    "videoTitle": "Knit Out Level 475 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=bE1ZhWSv-Kg",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-469.webp"
  },
  {
    "id": 476,
    "videoTitle": "Knit Out Level 476 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=TmwaRhNnG1Q",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-470.webp"
  },
  {
    "id": 477,
    "videoTitle": "Knit Out Level 477 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Sey3o1Zgl1I",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-471.webp"
  },
  {
    "id": 478,
    "videoTitle": "Knit Out Level 478 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=iEeZuPl48yc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-472.webp"
  },
  {
    "id": 479,
    "videoTitle": "Knit Out Level 479 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=deuyZ--EEQc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-473.webp"
  },
  {
    "id": 480,
    "videoTitle": "Knit Out Level 480 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=f7uSHwE-I_E",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-474.webp"
  },
  {
    "id": 481,
    "videoTitle": "Knit Out Level 481 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AwpjIVRSX18",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-475.webp"
  },
  {
    "id": 482,
    "videoTitle": "Knit Out Level 482 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=d7pvyqLHGug",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-476.webp"
  },
  {
    "id": 483,
    "videoTitle": "Knit Out Level 483 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=gHkKrTtiYzw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-477.webp"
  },
  {
    "id": 484,
    "videoTitle": "Knit Out Level 484 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=slorepq_CU8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-478.webp"
  },
  {
    "id": 485,
    "videoTitle": "Knit Out Level 485 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=EiWXf96fkl4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-479.webp"
  },
  {
    "id": 486,
    "videoTitle": "Knit Out Level 486 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=cxOb0q2Zc9M",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-480.webp"
  },
  {
    "id": 487,
    "videoTitle": "Knit Out Level 487 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=kggEw8X1AP8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-481.webp"
  },
  {
    "id": 488,
    "videoTitle": "Knit Out Level 488 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YY3baU0gxvw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-482.webp"
  },
  {
    "id": 489,
    "videoTitle": "Knit Out Level 489 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=a-aY-FkW4jw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-483.webp"
  },
  {
    "id": 490,
    "videoTitle": "Knit Out Level 490 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QfkLUvPCl5c",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-484.webp"
  },
  {
    "id": 491,
    "videoTitle": "Knit Out Level 491 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JqS-wkWQrKk",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-485.webp"
  },
  {
    "id": 492,
    "videoTitle": "Knit Out Level 492 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5XPho5wq0UA",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-486.webp"
  },
  {
    "id": 493,
    "videoTitle": "Knit Out Level 493 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=cZcHAN3G75o",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-487.webp"
  },
  {
    "id": 494,
    "videoTitle": "Knit Out Level 494 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-lToCicQCcg",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-488.webp"
  },
  {
    "id": 495,
    "videoTitle": "Knit Out Level 495 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=LH2o1chDBJ4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-489.webp"
  },
  {
    "id": 496,
    "videoTitle": "Knit Out Level 496 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=6bd1uZZb8ko",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-490.webp"
  },
  {
    "id": 497,
    "videoTitle": "Knit Out Level 497 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=SfGLV26muRk",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-491.webp"
  },
  {
    "id": 498,
    "videoTitle": "Knit Out Level 498 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1GO2i4cx3RE",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-492.webp"
  },
  {
    "id": 499,
    "videoTitle": "Knit Out Level 499 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=41-IPqg1yME",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-493.webp"
  },
  {
    "id": 500,
    "videoTitle": "Knit Out Level 500 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=OWCd8hBBtfE",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-494.webp"
  },
  {
    "id": 501,
    "videoTitle": "Knit Out Level 501 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=WcrADJ-RmoA",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-495.webp"
  },
  {
    "id": 502,
    "videoTitle": "Knit Out Level 502 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ng92_qRG0Z4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-496.webp"
  },
  {
    "id": 503,
    "videoTitle": "Knit Out Level 503 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Nnyq6uLCrxw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-497.webp"
  },
  {
    "id": 504,
    "videoTitle": "Knit Out Level 504 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XWy0TLrI4SQ",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-498.webp"
  },
  {
    "id": 505,
    "videoTitle": "Knit Out Level 505 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ub5Pz8cuKRw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-499.webp"
  },
  {
    "id": 506,
    "videoTitle": "Knit Out Level 506 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=kNCHfqrea-k",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-506.webp"
  },
  {
    "id": 507,
    "videoTitle": "Knit Out Level 507 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=5R9NbQgn5OI",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-507.webp"
  },
  {
    "id": 508,
    "videoTitle": "Knit Out Level 508 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=O3vgTUDHLjo",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-508.webp"
  },
  {
    "id": 509,
    "videoTitle": "Knit Out Level 509 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=q-p4PJxBlWM",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-509.webp"
  },
  {
    "id": 510,
    "videoTitle": "Knit Out Level 510 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=QeSIOCH7GjI",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-510.webp"
  },
  {
    "id": 511,
    "videoTitle": "Knit Out Level 511 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=taNNjPAoh5Y",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-511.webp"
  },
  {
    "id": 512,
    "videoTitle": "Knit Out Level 512 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Ke4oOyxjcto",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-512.webp"
  },
  {
    "id": 513,
    "videoTitle": "Knit Out Level 513 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=pHqu1yhhWEs",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-513.webp"
  },
  {
    "id": 514,
    "videoTitle": "Knit Out Level 514 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=03csJv9SIUo",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-514.webp"
  },
  {
    "id": 515,
    "videoTitle": "Knit Out Level 515 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YSFZmdKow0o",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-515.webp"
  },
  {
    "id": 516,
    "videoTitle": "Knit Out Level 516 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=nMnEAHfAwI4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-516.webp"
  },
  {
    "id": 517,
    "videoTitle": "Knit Out Level 517 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=oIzlYacq0Tw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-517.webp"
  },
  {
    "id": 518,
    "videoTitle": "Knit Out Level 518 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=mKEgS6X4T5Q",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-518.webp"
  },
  {
    "id": 519,
    "videoTitle": "Knit Out Level 519 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=4wscuwX-Nt4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-519.webp"
  },
  {
    "id": 520,
    "videoTitle": "Knit Out Level 520 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=vjuzzWYzrvk",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-520.webp"
  },
  {
    "id": 521,
    "videoTitle": "Knit Out Level 521 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=rVSNpII8FXo",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-521.webp"
  },
  {
    "id": 522,
    "videoTitle": "Knit Out Level 522 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=aaqgbIKZ6i0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-522.webp"
  },
  {
    "id": 523,
    "videoTitle": "Knit Out Level 523 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=j_vgyTc7Nm8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-523.webp"
  },
  {
    "id": 524,
    "videoTitle": "Knit Out Level 524 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=HQm5dRJAZqU",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-524.webp"
  },
  {
    "id": 525,
    "videoTitle": "Knit Out Level 525 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=n5udw_XZuuQ",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-525.webp"
  },
  {
    "id": 526,
    "videoTitle": "Knit Out Level 526 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=eniH9uGkJug",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-526.webp"
  },
  {
    "id": 527,
    "videoTitle": "Knit Out Level 527 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-89noqsRb8k",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-527.webp"
  },
  {
    "id": 528,
    "videoTitle": "Knit Out Level 528 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Up0z95urXb0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-528.webp"
  },
  {
    "id": 529,
    "videoTitle": "Knit Out Level 529 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=JzBASqHXWs8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-529.webp"
  },
  {
    "id": 530,
    "videoTitle": "Knit Out Level 530 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=inm0d_x9TRQ",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-530.webp"
  },
  {
    "id": 531,
    "videoTitle": "Knit Out Level 531 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=9nmGEXC5n4E",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-531.webp"
  },
  {
    "id": 532,
    "videoTitle": "Knit Out Level 532 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-8uP9CzA7Fw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-532.webp"
  },
  {
    "id": 533,
    "videoTitle": "Knit Out Level 533 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Y3Ttk2BHv_E",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-533.webp"
  },
  {
    "id": 534,
    "videoTitle": "Knit Out Level 534 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=1P6Paip8RtM",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-534.webp"
  },
  {
    "id": 535,
    "videoTitle": "Knit Out Level 535 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=IAX13pFxReg",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-535.webp"
  },
  {
    "id": 536,
    "videoTitle": "Knit Out Level 536 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=X3dx4SrwW4g",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-536.webp"
  },
  {
    "id": 537,
    "videoTitle": "Knit Out Level 537 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Clp1yMUMxs0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-537.webp"
  },
  {
    "id": 538,
    "videoTitle": "Knit Out Level 538 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zFbLZkUz-m4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-538.webp"
  },
  {
    "id": 539,
    "videoTitle": "Knit Out Level 539 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=ifIBJPM4WV8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-539.webp"
  },
  {
    "id": 540,
    "videoTitle": "Knit Out Level 540 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zOYYyfGu-tc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-540.webp"
  },
  {
    "id": 541,
    "videoTitle": "Knit Out Level 541 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=MDBSQ7-iJYc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-541.webp"
  },
  {
    "id": 542,
    "videoTitle": "Knit Out Level 542 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=zRRbHFs0A5g",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-542.webp"
  },
  {
    "id": 543,
    "videoTitle": "Knit Out Level 543 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=l_TnjUvBEGw",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-543.webp"
  },
  {
    "id": 544,
    "videoTitle": "Knit Out Level 544 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=A3y97ZmPjCk",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-544.webp"
  },
  {
    "id": 545,
    "videoTitle": "Knit Out Level 545 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Lt3m2U5kliI",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-545.webp"
  },
  {
    "id": 546,
    "videoTitle": "Knit Out Level 546 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=h6qtEL3mWe0",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-546.webp"
  },
  {
    "id": 547,
    "videoTitle": "Knit Out Level 547 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=kqNsPlwkVv4",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-547.webp"
  },
  {
    "id": 548,
    "videoTitle": "Knit Out Level 548 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Drz7GU9G0X8",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-548.webp"
  },
  {
    "id": 549,
    "videoTitle": "Knit Out Level 549 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=XBL2DWnD7UE",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-549.webp"
  },
  {
    "id": 550,
    "videoTitle": "Knit Out Level 550 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=AtNEJ38IQ7c",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-550.webp"
  },
  {
    "id": 551,
    "videoTitle": "Knit Out Level 551 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=sNOnS2TLQTA",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-551.webp"
  },
  {
    "id": 552,
    "videoTitle": "Knit Out Level 552 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=Xm5Im5yd4gs",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-552.webp"
  },
  {
    "id": 553,
    "videoTitle": "Knit Out Level 553 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=tZS7kaIe5_U",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-553.webp"
  },
  {
    "id": 554,
    "videoTitle": "Knit Out Level 554 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=YoweubG24Xo",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-554.webp"
  },
  {
    "id": 555,
    "videoTitle": "Knit Out Level 555 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=-YnVhB8cn0c",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-555.webp"
  },
  {
    "id": 556,
    "videoTitle": "Knit Out Level 556 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=bN9A3cyLgTI",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-556.webp"
  },
  {
    "id": 557,
    "videoTitle": "Knit Out Level 557 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=BRDtGad2Ihc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-557.webp"
  },
  {
    "id": 558,
    "videoTitle": "Knit Out Level 558 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=WK-sUIDho5s",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-558.webp"
  },
  {
    "id": 559,
    "videoTitle": "Knit Out Level 559 Solution Walkthrough",
    "videoUrl": "https://www.youtube.com/watch?v=wfc316JNJpc",
    "imgUrl": "/images/thumbnails/Knit-Out-Level-559.webp"
  }
]

export default levels;

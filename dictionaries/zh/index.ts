import { companyInfo } from "./company-info";
import { common } from "./common";
import { header } from "./header";
import { hero } from "./hero";
import { mediaCoverage } from "./media-coverage";
import { videoShowcase } from "./video-showcase";
import { blog } from "./blog";
import { about, privacy, termsOfService } from "./about";
import { footer } from "./footer";
import locale from "./locale";
import { faq } from "./faq";
import { home } from "./home";
import { appDownload } from "./app-download";
import { level } from "./level";
import { levelDetail } from "./level-detail";
import { levelShowcase } from "./level-showcase";
import { gamePage, gamesText } from "./game";
import { walkthrough } from "./walkthrough";
import { digimon } from "./digimon";

const dictionary = {
  locale,
  common,
  companyInfo,
  header,
  hero,
  mediaCoverage,
  videoShowcase,
  blog,
  about,
  privacy,
  termsOfService,
  footer,
  faq,
  home,
  appDownload,
  level,
  levelDetail,
  levelShowcase,
  gamePage,
  gamesText,
  walkthrough,
  digimon,
} as const;

export default dictionary;

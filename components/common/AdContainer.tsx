import GoogleAdsense from "../adsense";

interface AdContainerProps {
  slot?: string;
  className?: string;
}

export default function AdContainer({
  slot,
  className = "",
}: AdContainerProps) {
  return (
    <div className="relative">
      <GoogleAdsense />
    </div>
  );
}

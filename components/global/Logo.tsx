import { cn } from "@/lib/utils";
import { satoshi } from "@/utils/font";
import Image from "next/image";

type LogoProps = {
  className?: string;
  iconWidth: number;
  iconHeight: number;
  brandSize: string;
  brandWeight?: string;
};

export default function Logo({
  brandSize,
  brandWeight = "font-normal",
  iconHeight,
  iconWidth,
  className,
}: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <Image
        src="/images/codeant.png"
        alt="CodeAnt AI"
        width={iconWidth}
        height={iconHeight}
        className="object-cover"
      />
      <p
        className={`${brandSize} ${brandWeight} ${satoshi.className} text-[#181D27]`}
      >
        CodeAnt AI
      </p>
    </div>
  );
}

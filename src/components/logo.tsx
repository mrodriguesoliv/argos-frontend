import darkLogo from "@/assets/logos/mrturing-dark-logo.png";
import logo from "@/assets/logos/mrturing-light-logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative translate-x-7 -translate-y-2 h-8 max-w-[10.847rem]">
      <Image
        src={logo}
        width={180}
        height={32}
        className="dark:hidden"
        alt="mrturing logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        width={180}
        height={32}
        className="light:hidden"
        alt="mrturing logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}

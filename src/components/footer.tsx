import Image from "next/image";
import Logo from "@/assets/Skillo-footer.svg";
export default function Footer() {
  return (
    <div className="relative bg-foreground text-background h-[200px]">
      <Image
        src={Logo}
        alt="logo"
        width={300}
        height={300}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}

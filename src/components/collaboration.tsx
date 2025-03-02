import { Marquee } from "./magicui/marquee";
import Image from "next/image";
import Google from "@/assets/homepage-partner-google.png";
import Microsoft from "@/assets/homepage-partner-microsoft.png";
import IBM from "@/assets/homepage-partner-ibm.png";
import Samsung from "@/assets/homepage-partner-samsung.png";
import Indosat from "@/assets/homepage-partner-indosat.png";
import XL from "@/assets/homepage-partner-xl.png";
import Lenovo from "@/assets/homepage-partner-lenovo.png";
export default function Collaboration() {
  return (
    <section className="relative flex flex-col justify-center items-center gap-8 h-[300px] -z-10">
      <h1 className="text-center text-4xl font-medium text-foreground w-[1000px]">
        Many Skillo Users Have Secured Careers at Top and Reputable Companies
      </h1>
      <Marquee className="-z-10 ">
        <Image src={Google} width={175} height={74} alt="Google" />
        <Image src={Microsoft} width={175} height={74} alt="Microsoft" />
        <Image src={IBM} width={175} height={74} alt="IBM" />
        <Image src={Indosat} width={175} height={74} alt="Indosat" />
        <Image src={Samsung} width={175} height={74} alt="Samsung" />
        <Image src={XL} width={175} height={74} alt="XL" />
        <Image src={Lenovo} width={175} height={74} alt="Lenovo" />
      </Marquee>
    </section>
  );
}

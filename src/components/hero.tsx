import Seminar from "@/assets/Seminar.jpg";
import Image from "next/image";
import Training from "@/assets/training.jpg";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen pt-16">
      <div className="text-center w-[500px] sm:w-[1000px] flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-3xl sm:text-6xl font-semibold">Find</h1>
        <Image
          className="hidden sm:block rounded-full border-2 border-foreground w-[200px] h-[80px] object-cover"
          src={Seminar}
          alt="Seminar"
        />
        <h1 className=" text-3xl sm:text-6xl font-semibold">
          Onsite Seminars,
        </h1>
        <h1 className="text-3xl sm:text-6xl font-semibold">
          Webinars, and Training
        </h1>
        <Image
          className="hidden sm:block rounded-full border-2 border-foreground w-[150px] h-[80px] object-cover"
          src={Training}
          alt="Seminar"
        />
      </div>
      <p className=" w-[400px] sm:w-[800px] text-center text-lg text-foreground mt-4">
        Upgrade your skills with immersive, in-person learning! Browse top-rated
        seminars and training courses designed to give you practical knowledge
        and hands-on experience
      </p>
      <a
        href=""
        className="bg-foreground text-background hover:bg-foreground/80 transition-all duration-100 py-2 px-4 rounded-lg mt-4"
      >
        Reserve Your Spot
      </a>
      <AnimatedGridPattern
        className="absolute -z-10"
        maxOpacity={0.1}
        duration={2}
      />
    </div>
  );
}

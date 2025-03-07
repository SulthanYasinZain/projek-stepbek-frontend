import Seminar from "@/assets/Seminar.jpg";
import Image from "next/image";
import Training from "@/assets/training.jpg";
import Link from "next/link";
import { AnimatedGridPattern } from "./magicui/animated-grid-pattern";
export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen pt-16">
      <div className="text-center w-screen sm:w-[1000px] flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-3xl text-foreground sm:text-6xl font-semibold">
          Book
        </h1>
        <Image
          className="hidden sm:block rounded-full border-2 border-foreground sm:w-[200px] h-[80px] object-cover"
          src={Seminar}
          alt="Seminar"
        />
        <h1 className="text-3xl sm:text-6xl font-semibold text-foreground ">
          Onsite <span className="text-primary">Seminars</span>
        </h1>
        <h1 className="text-3xl sm:text-6xl font-semibold text-primary">
          Webinars<span className="text-foreground"> and </span>Training
        </h1>
        <Image
          className="hidden sm:block rounded-full border-2 border-foreground sm:w-[150px] h-[80px] object-cover"
          src={Training}
          alt="Seminar"
        />
      </div>
      <p className="text-sm w-[300px] px-2 sm:w-[800px] text-center sm:text-lg text-foreground mt-4">
        Upgrade your skills with immersive, in-person learning! Browse top-rated
        seminars and training courses designed to give you practical knowledge
        and hands-on experience
      </p>
      <Link
        href=""
        className="bg-foreground text-background hover:bg-foreground/80 transition-all duration-100 py-3 px-6 rounded-lg mt-4"
      >
        Explore Now
      </Link>
      <AnimatedGridPattern
        className="absolute -z-10"
        maxOpacity={0.15}
        duration={1.5}
      />
    </section>
  );
}

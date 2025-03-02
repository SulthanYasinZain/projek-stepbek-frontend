import { IconCloud } from "./magicui/icon-cloud";
import Binar from "@/assets/course/Binar.png";
import Buildwithangga from "@/assets/course/Buildwithangga.png";
import Codepolitan from "@/assets/course/Codepolitan.png";
import Coding_studio from "@/assets/course/Coding_studio.png";
import Dicoding from "@/assets/course/Dicoding.png";
import Digitalskola from "@/assets/course/Digitalskola.png";
import eduwork from "@/assets/course/eduwork.png";
import hacktiv8 from "@/assets/course/hacktiv8.png";
import harisenin from "@/assets/course/harisenin.png";
import malasngoding from "@/assets/course/malasngoding.png";
import Myskill from "@/assets/course/Myskill.png";
import pijarcamp from "@/assets/course/pijarcamp.png";
import Pintaar from "@/assets/course/Pintaar.png";
import Purwadhika from "@/assets/course/Purwadhika.png";
import Rakamin from "@/assets/course/Rakamin.png";
import RevoU from "@/assets/course/RevoU.png";
import Sekolah_koding from "@/assets/course/Sekolah_koding.png";
import skillvul from "@/assets/course/skillvul.png";
import Wegodev from "@/assets/course/Wegodev.png";

import Link from "next/link";
export default function Course() {
  const images = [
    Binar.src,
    Buildwithangga.src,
    Codepolitan.src,
    Coding_studio.src,
    Dicoding.src,
    Digitalskola.src,
    eduwork.src,
    hacktiv8.src,
    harisenin.src,
    malasngoding.src,
    Myskill.src,
    pijarcamp.src,
    Pintaar.src,
    Purwadhika.src,
    Rakamin.src,
    RevoU.src,
    Sekolah_koding.src,
    skillvul.src,
    Wegodev.src,
  ];
  return (
    <section className="flex justify-center">
      <div className="flex gap-12">
        <div className=" rounded-lg">
          <IconCloud images={images}></IconCloud>
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-foreground text-3xl font-medium">
            Top Courses from Leading Organizations
          </h2>
          <p className="text-foreground w-[500px]">
            Discover the best courses from locally recognized institutions and
            industry leaders, carefully curated to help you stay ahead in your
            field.
          </p>
          <p className="text-foreground w-[500px]">
            Gain in-demand skills through expert-led training, earn valuable
            certifications, and unlock new career opportunities. Whether
            you&aposre looking to upskill, switch careers, or enhance your
            expertise.
          </p>
          <Link
            href="/course"
            className="bg-primary text-background py-4 px-6 w-fit rounded-lg hover:bg-primary/90"
          >
            Find Your Course
          </Link>
        </div>
      </div>
    </section>
  );
}

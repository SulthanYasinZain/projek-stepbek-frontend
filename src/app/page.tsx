import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Collaboration from "@/components/collaboration";
import Course from "@/components/course";
import Alumni from "@/components/alumni";
import Community from "@/components/community-banner";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Collaboration />
      <Course />
      <Alumni />
      <Community />
    </div>
  );
}

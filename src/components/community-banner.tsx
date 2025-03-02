import Link from "next/link";
import { BadgeCheck, SquareArrowOutUpRight } from "lucide-react";

const communityFeatures = [
  {
    id: 1,
    description:
      "Join in-person gatherings with Skillo members across various cities and gain access to exclusive events and an annual conference designed to help you grow.",
  },
  {
    id: 2,
    description:
      "Engage, learn, and collaborate with like-minded professionals through Skillo Clubs! These groups provide a space for networking, industry discussions, and knowledge sharing, helping you stay ahead in your field.",
  },
  {
    id: 3,
    description:
      "Unlock limitless career and networking opportunities through Skillo’s private Slack channels. Connect with professionals, access exclusive resources, receive mentorship, discover job leads, and expand your connections—all in one place.",
  },
];

export default function Community() {
  return (
    <section className="bg-primary h-[400px] mt-12">
      <div className="flex justify-center items-center h-full p-4 mx-10">
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="text-4xl text-foreground font-medium">
            Connect and Share Knowledge with 20,000+ Professionals and Industry
            Experts in Our Community
          </h1>
          <Link
            className="bg-background text-foreground py-4 w-fit px-6 rounded-lg hover:bg-background/90"
            href=""
          >
            <span className="flex gap-2 items-center">
              Join Now <SquareArrowOutUpRight width={24} />
            </span>
          </Link>
        </div>
        <ul className="w-1/2 space-y-4">
          {communityFeatures.map((feature) => (
            <li key={feature.id} className="flex items-start gap-4">
              <BadgeCheck className="w-6 h-6 mt-1" />
              <span className="w-full">{feature.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

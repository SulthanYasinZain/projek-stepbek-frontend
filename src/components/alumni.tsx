import { MagicCard } from "./magicui/magic-card";
import Image from "next/image";
import Boby from "@/assets/boby.jpg";
import Yasin from "@/assets/yasin.jpg";
import Arpi from "@/assets/arpi.jpg";

export default function Alumni() {
  const testimonials = [
    {
      name: "Muhammad Boby Pratama",
      image: Boby,
      oppucation: "Backend Developer",
      testimonial:
        "Skillo made it incredibly easy for me to find high-quality seminars in my industry. I attended a leadership training that helped me land a promotion within months! The platform is user-friendly, and the recommendations were spot-on.",
    },
    {
      name: "Muhammad Sulthan Yasin Zain",
      image: Yasin,
      oppucation: "Frontend Developer",
      testimonial:
        "Thanks to Skillo, I discovered a hands-on marketing workshop that connected me with industry experts. Not only did I gain valuable insights, but I also expanded my professional network. Highly recommend it to anyone looking to grow their career!",
    },
    {
      name: "Azzrial Arfiansyah",
      image: Arpi,
      oppucation: "Data Scientist",
      testimonial:
        "I used to spend hours searching for the right training programs, but Skillo changed that! Now, I can easily browse and register for top-tier workshops in just a few clicks. It’s a game-changer for professionals who value learning.",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-center text-foreground text-4xl font-medium">
        What Professionals Are Saying About Their Experience with Skillo
      </h1>
      <div className=" relative flex gap-4 justify-center mt-12">
        {testimonials.map((testimonial, index) => (
          <MagicCard
            key={index}
            className="w-[350px] h-[300px] rounded-md bg-transparent p-8  -z-10"
            gradientOpacity={0}
            gradientFrom="#2ECC71"
            gradientTo="#74d4f4"
          >
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-primary"
                />
                <div className="flex flex-col">
                  <h1 className="text-foreground">{testimonial.name}</h1>
                  <h2 className="text-neutral-500">{testimonial.oppucation}</h2>
                </div>
              </div>
              <p className="mt-4">&quot;{testimonial.testimonial}&quot;</p>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}

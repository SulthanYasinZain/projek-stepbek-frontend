import { MagicCard } from "./magicui/magic-card";

export default function banner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-8">
      <h2 className="text-4xl font-semibold">Our Commitment to Your Success</h2>
      <div className="flex flex-col w-10/12 gap-4 mt-12">
        <div className="flex gap-4 ">
          <div className="bg-primary w-3/4 h-[250px] rounded-xl">
            <p className="text-background">INI CARD</p>
          </div>
          <div className="bg-secondary w-1/4 h-[250px] rounded-xl">
            <p className="text-background">INI CARD</p>
          </div>
        </div>
        <div className="w-full h-[250px] rounded-xl bg-accent text-foreground">
          INI CARD
        </div>
      </div>
    </div>
  );
}

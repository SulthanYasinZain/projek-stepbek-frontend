import CountUp from "./ui/countup";

export default function banner() {
  return (
    <div className="bg-foreground flex flex-col justify-center items-center h-[300px] text-center">
      <h3 className="text-background text-4xl font-medium w-[1000px]">
        Millions of Participants & Academic Institutions Advancing Skills
        Together
      </h3>
      <div className="flex justify-around w-full mt-12">
        <div className="flex flex-col">
          <CountUp
            to={4589377}
            className="text-background text-4xl font-medium"
            separator={","}
            duration={0.1}
          />
          <p className="text-lg text-background">
            Registered Training Participants
          </p>
        </div>
        <div className="flex flex-col">
          <CountUp
            to={87}
            className="text-background text-4xl font-medium"
            duration={0.1}
          />
          <p className="text-lg text-background">Academic Institutions</p>
        </div>
      </div>
    </div>
  );
}

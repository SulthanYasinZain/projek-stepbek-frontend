import { Clock, Users, MessageSquare, Award } from "lucide-react";
import DetailItem from "./detail-item";
export default function CourseDetails() {
  return (
    <div className="lg:w-1/3 h-fit bg-white p-6 rounded-xl border">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">
          4,399,000{" "}
          <span className="text-lg font-medium text-gray-500">IDR</span>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <DetailItem icon={<Clock />} label="Duration" value="8h 25m" />
          <DetailItem icon={<Users />} label="Students" value="3,215" />
        </div>
        <div className="space-y-4">
          <DetailItem
            icon={<Award />}
            label="Certificate"
            value="Upon completion"
          />
          <DetailItem
            icon={<MessageSquare />}
            label="Critique session"
            value="Individual recordings"
          />
          <DetailItem
            icon={<Clock />}
            label="Additional resources"
            value="12 files"
          />
        </div>
        <button className="w-full bg-primary text-foreground py-3 rounded-md font-medium">
          Enroll a course
        </button>
      </div>
    </div>
  );
}

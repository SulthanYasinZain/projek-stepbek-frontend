import { Clock, Users, MapPin, Calendar, Award, Phone } from "lucide-react";
import DetailItem from "./detail-item";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function CourseDetails({
  price,
  quota,
  duration,
  city,
  place,
  start,
  end,
  contact,
}: {
  price: number;
  quota: number;
  duration: number;
  city: number;
  place: string;
  start: string;
  end: string;
  contact: string;
}) {
  return (
    <div className="lg:w-1/3 h-fit bg-white p-6 rounded-xl border">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">
          {price.toLocaleString()}{" "}
          <span className="text-lg font-medium text-gray-500">IDR</span>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <DetailItem
            icon={<Clock />}
            label="Duration"
            value={duration.toLocaleString() + " Days"}
          />
          <DetailItem
            icon={<Users />}
            label="Quota"
            value={quota.toLocaleString()}
          />
        </div>
        <div className="space-y-4">
          <DetailItem
            icon={<MapPin />}
            label="Location"
            value={city + ", " + place}
          />
          <DetailItem
            icon={<Calendar />}
            label="Date"
            value={formatDate(start) + " - " + formatDate(end)}
          />
          <DetailItem
            icon={<Award />}
            label="Certificate"
            value="Upon completion"
          />
          <DetailItem icon={<Phone />} label="Contact" value={contact} />
        </div>
        <button className="w-full bg-primary text-foreground py-3 rounded-md font-medium">
          Enroll a course
        </button>
      </div>
    </div>
  );
}

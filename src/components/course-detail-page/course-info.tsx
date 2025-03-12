export default function CourseInfo({
  organizer,
  title,
  description,
}: {
  organizer: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mt-6 flex items-center gap-2">
        <span className="text-sm text-gray-500">A course by</span>
        <span className="font-medium">{organizer}</span>
      </div>
      <h1 className="mt-2 text-3xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

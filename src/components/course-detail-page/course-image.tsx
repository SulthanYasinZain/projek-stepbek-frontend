import Image from "next/image";
export default function CourseImage() {
  return (
    <div className="relative rounded-xl overflow-hidden -z-10">
      <Image
        src="https://placehold.co/854x400"
        alt="https://placehold.co/854x400"
        width={854}
        height={480}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

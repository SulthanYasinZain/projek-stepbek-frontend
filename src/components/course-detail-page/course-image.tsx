import Image from "next/image";
export default function CourseImage({ image }: { image: string }) {
  const defaultImage = "https://placehold.co/854x400";
  const imageUrl = image || defaultImage;

  return (
    <div className="relative rounded-xl overflow-hidden -z-10">
      <Image
        src={imageUrl}
        alt="Course thumbnail image"
        width={854}
        height={480}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

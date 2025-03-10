import type React from "react";
import Image from "next/image";
import Link from "next/link";

interface TrainingCardProps {
  id: string;
  category: string;
  title: string;
  image: string;
  status: string;
}

const courseCard: React.FC<TrainingCardProps> = ({
  id,
  category,
  title,
  image,
  status,
}) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800">
      <Link href={`/dashboard/edit/${id}`}>
        <div>
          <div className="relative h-48">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Category: {category}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Status: {status}
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Click to edit
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default courseCard;

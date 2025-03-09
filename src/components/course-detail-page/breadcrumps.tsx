import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-6">
      <div className="flex items-center text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/courses" className="hover:text-gray-900">
          Courses
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900">Advanced 3D Modeling in Blender</span>
      </div>
    </div>
  );
}

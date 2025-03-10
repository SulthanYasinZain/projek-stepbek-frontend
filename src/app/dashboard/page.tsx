import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CourseCard from "@/components/course-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const courseList = await fetch(
    "https://project-stepbek-backend-production.up.railway.app/api/events",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );

  const CourseData = await courseList.json();
  const courseArray = Array.isArray(CourseData.data) ? CourseData.data : [];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Manage your training events and courses
              </p>
            </div>
            <Button asChild className="gap-2 self-start">
              <Link href="/dashboard/new">
                <PlusCircle className="h-4 w-4" />
                Add New Event
              </Link>
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Your Training Events
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {courseArray.length}{" "}
                {courseArray.length === 1 ? "event" : "events"} found
              </div>
            </div>

            {courseArray.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* eslint-disable  @typescript-eslint/no-explicit-any */}
                {courseArray.map((course: any) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    category={course.kategori}
                    title={course.nama_event}
                    image={course.gambar}
                    status={course.tema}

                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-3 mb-4">
                  <PlusCircle className="h-6 w-6 text-gray-400 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  No training events available
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mb-4">
                  Get started by creating your first training event.
                </p>
                <Button asChild variant="outline">
                  <Link href="/dashboard/new">Create your first event</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

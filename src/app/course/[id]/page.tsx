import Breadcrumbs from "@/components/course-detail-page/breadcrumps";
import CourseImage from "@/components/course-detail-page/course-image";
import CourseInfo from "@/components/course-detail-page/course-info";
import CourseDetails from "@/components/course-detail-page/course-detail";
import { cookies } from "next/headers";

// Let TypeScript infer the types from the function parameters
export default async function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const courseId = params;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let courseData;
  try {
    const response = await fetch(
      `https://project-stepbek-backend-production.up.railway.app/api/events/${courseId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`Error details: ${errorText}`);

      if (response.status === 404) {
        throw new Error("Course not found");
      }

      throw new Error(
        `API returned ${response.status}: ${response.statusText}`
      );
    }

    courseData = await response.json();
    console.log("Course data:", courseData);
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }

  return (
    <section className="min-h-screen flex flex-col pt-12">
      <div className="flex-1">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <CourseImage />
              <CourseInfo />
            </div>
            <CourseDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

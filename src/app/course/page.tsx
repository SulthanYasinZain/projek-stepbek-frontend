import CoursePage from "@/components/course-page";
import { cookies } from "next/headers";

export default async function Course() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

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

  const CourseListData = await courseList.json();
  const courseArray = Array.isArray(CourseListData.data)
    ? CourseListData.data
    : [];
  return <CoursePage courseArray={courseArray} />;
}

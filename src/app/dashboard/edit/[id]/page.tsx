import { cookies } from "next/headers";
import EditForm from "@/components/editform";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Edit({ params }: PageProps) {
  const { id } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let courseData = null;
  try {
    const response = await fetch(
      `https://project-stepbek-backend-production.up.railway.app/api/events/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token ? `Bearer ${token}` : "",
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
  } catch (error) {
    console.error("Error fetching course data:", error);
  }
  if (!courseData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-red-500">
          Failed to load course data.
        </h2>
      </div>
    );
  }

  return <EditForm data={courseData} />;
}

import Breadcrumbs from "@/components/course-detail-page/breadcrumps";
import CourseImage from "@/components/course-detail-page/course-image";
import CourseInfo from "@/components/course-detail-page/course-info";
import CourseDetails from "@/components/course-detail-page/course-detail";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetail({ params }: PageProps) {
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
  console.log(courseData);
  if (!courseData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-red-500">
          Failed to load course data.
        </h2>
      </div>
    );
  }

  const startDate = new Date(courseData.data.tgl_mulai).getTime();
  const endDate = new Date(courseData.data.tgl_selesai).getTime();
  const duration = (endDate - startDate) / (1000 * 60 * 60 * 24);

  return (
    <section className="min-h-screen flex flex-col pt-12">
      <div className="flex-1">
        <Breadcrumbs title={courseData.data.nama_event} />
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <CourseImage image={courseData.data.gambar} />
              <CourseInfo
                organizer={courseData.data.nama_penyelenggara}
                title={courseData.data.nama_event}
                description={courseData.data.deskripsi}
              />
            </div>
            <CourseDetails
              price={courseData.data.harga_tiket}
              quota={courseData.data.kuota}
              duration={duration}
              city={courseData.data.kota}
              place={courseData.data.tempat || ""}
              start={courseData.data.tgl_mulai}
              end={courseData.data.tgl_selesai}
              contact={courseData.data.kontak_penyelenggara}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

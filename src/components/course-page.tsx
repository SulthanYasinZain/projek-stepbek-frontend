"use client";
import { useState, useEffect } from "react";
import TrainingCard from "@/components/training-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Course = {
  id: number;
  nama_event: string;
  gambar: string;
  kategori: string;
  tema: string;
  deskripsi: string;
  nama_penyelenggara: string;
  tgl_listing: string;
  harga_tiket: number;
  kuota: number;
  kota: string;
  tempat: string;
  status_event: string;
  tgl_mulai: string;
  tgl_selesai: string;
  kontak_penyelenggara: string;
  tipe_tiket: string;
  created_at: string;
  updated_at: string;
};

export default function CoursePage({ courseArray }: { courseArray: Course[] }) {
  const [courseData, setCourseData] = useState<Course[]>([]);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setCourseData(courseArray);
  }, [courseArray]);

  const filteredData = courseData.filter((item) => {
    return (
      item.nama_event.toLowerCase().includes(query.toLowerCase()) &&
      (filterType ? item.tipe_tiket === filterType : true) &&
      (theme ? item.tema === theme : true)
    );
  });

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Temukan Pelatihan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          <div className="space-y-4">
            <h3 className="font-medium">Sumber Pelatihan</h3>
            <div className="relative">
              <Input
                type="text"
                placeholder="Cari sumber pelatihan"
                className="pl-10"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Program Pelatihan</h3>
            <div className="space-y-2">
              {[
                { id: "None", label: "None", value: "" },
                {
                  id: "keterampilan & kejuruan",
                  label: "Keterampilan & Kejuruan",
                  value: "keterampilan & kejuruan",
                },
                {
                  id: "teknologi & digital",
                  label: "Teknologi & Digital",
                  value: "teknologi & digital",
                },
                {
                  id: "bisnis & kewirausahaan",
                  label: "Bisnis & Kewirausahaan",
                  value: "bisnis & kewirausahaan",
                },
                {
                  id: "pengembangan diri & soft skills",
                  label: "Pengembangan Diri & Soft Skills",
                  value: "pengembangan diri & soft skills",
                },
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={option.id}
                    name="theme"
                    value={option.value}
                    className="h-4 w-4 rounded-full border-gray-300"
                    onChange={(e) => setTheme(e.target.value)}
                    checked={theme === option.value}
                  />
                  <label htmlFor={option.id} className="text-sm font-medium">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Tipe Pelatihan</h3>
            <div className="space-y-2">
              {[
                { id: "None", label: "None", value: "" },
                { id: "Berbayar", label: "Paid", value: "berbayar" },
                { id: "Gratis", label: "Free", value: "gratis" },
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={option.id}
                    name="tipe_tiket"
                    value={option.value}
                    className="h-4 w-4 rounded-full border-gray-300"
                    onChange={(e) => setFilterType(e.target.value)}
                    checked={filterType === option.value}
                  />
                  <label htmlFor={option.id} className="text-sm font-medium">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{filteredData.length} pelatihan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredData.length > 0 ? (
              filteredData.map((course) => (
                <TrainingCard
                  key={course.id}
                  id={course.id.toString()}
                  category={course.kategori}
                  title={course.nama_event}
                  image={course.gambar}
                  status={
                    course.status_event === "online" ? "Online" : "Offline"
                  }
                  additionalInfo="+ 1 Lainnya"
                  price={course.harga_tiket.toString()}
                />
              ))
            ) : (
              <p className="text-gray-500">
                Tidak ada data pelatihan tersedia.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

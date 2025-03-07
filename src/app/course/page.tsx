import { Search } from "lucide-react";
import TrainingCard from "@/components/training-card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Temukan Pelatihan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Filter</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Sumber Pelatihan</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>

            <div className="relative">
              <Input
                type="text"
                placeholder="Cari sumber pelatihan"
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="skillhub"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="skillhub" className="text-sm font-medium">
                Skillhub
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Program Pelatihan</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="kemnaker"
                  name="program"
                  className="h-4 w-4 rounded-full border-gray-300"
                />
                <label htmlFor="kemnaker" className="text-sm font-medium">
                  Gratis oleh Kemnaker
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="prakerja"
                  name="program"
                  className="h-4 w-4 rounded-full border-gray-300"
                />
                <label htmlFor="prakerja" className="text-sm font-medium">
                  Prakerja
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="etraining"
                  name="program"
                  className="h-4 w-4 rounded-full border-gray-300"
                />
                <label htmlFor="etraining" className="text-sm font-medium">
                  E-Training
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Tipe Pelatihan</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">39 pelatihan</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">Urutkan</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <TrainingCard
              category="Pariwisata"
              title="Menyiapkan Produk Roti"
              image=""
              status="Offline"
              additionalInfo="+ 1 Lainnya"
              price="Gratis"
            />

            <TrainingCard
              category="Garmen Apparel"
              title="ASISTEN PEMBUAT PAKAIAN"
              image=""
              status="Offline"
              additionalInfo="+ 1 Lainnya"
              price="Gratis"
            />

            <TrainingCard
              category="Teknologi Informasi Dan Komunikasi"
              title="Multimedia"
              image=""
              status="Offline"
              additionalInfo="+ 1 Lainnya"
              price="Gratis"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";
import addEvent from "@/app/action/addEvent";
import { useActionState } from "react"; // Using the new React 19 hook [^1]

export default function EventForm() {
  const [state, addEventAction, isLoading] = useActionState(addEvent, null);

  return (
    <div className="max-w-3xl mx-auto pt-16 px-4 sm:px-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Create New Event
      </h1>

      <form
        action={addEventAction}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="nama_event"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Event
              </label>
              <input
                type="text"
                id="nama_event"
                name="nama_event"
                placeholder="Nama Event"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="deskripsi"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                placeholder="Deskripsi"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="kategori"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kategori
              </label>
              <select
                id="kategori"
                name="kategori"
                defaultValue="webinars"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="workshop">Workshops</option>
                <option value="seminar">Seminars</option>
                <option value="kursus">Training</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="tema"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tema
              </label>
              <select
                id="tema"
                name="tema"
                defaultValue="teknologi"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="keterampilan & kejuruan">
                  Keterampilan & Kejuruan
                </option>
                <option value="teknologi">Teknologi & Digital</option>
                <option value="bisnis">Bisnis & Kewirausahaan</option>
                <option value="pengembangan">
                  Pengembangan Diri & Soft Skills
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="status_event"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status Event
              </label>
              <select
                id="status_event"
                name="status_event"
                defaultValue="upcoming"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="complete">Complete</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="tgl_listing"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tanggal Listing
              </label>
              <input
                type="date"
                id="tgl_listing"
                name="tgl_listing"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="tipe_tiket"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tipe Tiket
              </label>
              <select
                id="tipe_tiket"
                name="tipe_tiket"
                defaultValue="paid"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="berbayar">Paid</option>
                <option value="gratis">Free</option>
              </select>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="harga_tiket"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Harga Tiket
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">Rp</span>
                </div>
                <input
                  type="number"
                  id="harga_tiket"
                  name="harga_tiket"
                  placeholder="0"
                  className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="kuota"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kuota
              </label>
              <input
                type="number"
                id="kuota"
                name="kuota"
                placeholder="Kuota"
                min="1"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="kota"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kota
              </label>
              <input
                type="text"
                id="kota"
                name="kota"
                placeholder="Kota"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="tempat"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tempat
              </label>
              <input
                type="text"
                id="tempat"
                name="tempat"
                placeholder="Tempat"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="nama_penyelenggara"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Penyelenggara
              </label>
              <input
                type="text"
                id="nama_penyelenggara"
                name="nama_penyelenggara"
                placeholder="Nama Penyelenggara"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="tgl_mulai"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tanggal Mulai
                </label>
                <input
                  type="date"
                  id="tgl_mulai"
                  name="tgl_mulai"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="tgl_selesai"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tanggal Selesai
                </label>
                <input
                  type="date"
                  id="tgl_selesai"
                  name="tgl_selesai"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="kontak_penyelenggara"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kontak Penyelenggara
              </label>
              <input
                type="tel"
                id="kontak_penyelenggara"
                name="kontak_penyelenggara"
                placeholder="Kontak Penyelenggara"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Full width elements */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gambar
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="gambar"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                >
                  <span>Upload a file</span>
                  <input
                    id="gambar"
                    name="gambar"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 3MB</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Event"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

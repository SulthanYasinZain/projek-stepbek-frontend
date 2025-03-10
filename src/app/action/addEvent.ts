/* eslint-disable  @typescript-eslint/no-explicit-any */
"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type EventResponse = {
  error?: string;
  success?: boolean;
  data?: any;
};

export default async function addEvent(
  prevState: any,
  formData: FormData
): Promise<EventResponse> {
  console.log("Processing form submission...");
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  console.log("Token:", token ? "Available" : "Not found");

  if (!token) {
    console.error("Error: Unauthorized, no token found");
    return { error: "Unauthorized: No token found" };
  }

  // Debug: List all keys from formData
  console.log("Form data keys:", [...formData.keys()]);

  // Create a FormData object for the API request
  const apiFormData = new FormData();

  // Get the file and add it to FormData if it exists
  const gambar = formData.get("gambar");
  if (gambar instanceof File && gambar.name) {
    apiFormData.append("gambar", gambar);
  }

  // Extract all form values with proper name mapping
  const nama_event = formData.get("nama_event") as string;
  const deskripsi = formData.get("deskripsi") as string;
  const kategori = formData.get("kategori") as string;
  const tema = formData.get("tema") as string;
  const status_event = formData.get("status_event") as string;
  const tgl_listing = formData.get("tgl_listing") as string;
  const tipe_tiket = formData.get("tipe_tiket") as string;
  const harga_tiket = Number(formData.get("harga_tiket") || 0);
  const kuota = Number(formData.get("kuota") || 0);
  const kota = formData.get("kota") as string;
  const tempat = formData.get("tempat") as string;
  const nama_penyelenggara = formData.get("nama_penyelenggara") as string;
  const tgl_mulai = formData.get("tgl_mulai") as string;
  const tgl_selesai = formData.get("tgl_selesai") as string;
  const kontak_penyelenggara = formData.get("kontak_penyelenggara") as string;

  // Add all fields to FormData with the correct API field names
  apiFormData.append("nama_event", nama_event || "");
  apiFormData.append("deskripsi", deskripsi || "");
  apiFormData.append("kategori", kategori || "");
  apiFormData.append("tema", tema || "");
  apiFormData.append("status_event", status_event || "");
  apiFormData.append("tgl_listing", tgl_listing || "");
  apiFormData.append("tipe_tiket", tipe_tiket || "");
  apiFormData.append("harga_tiket", harga_tiket.toString());
  apiFormData.append("kuota", kuota.toString());
  apiFormData.append("kota", kota || "");
  apiFormData.append("tempat", tempat || ""); // Changed from lokasi to tempat
  apiFormData.append("nama_penyelenggara", nama_penyelenggara || "");
  apiFormData.append("tgl_mulai", tgl_mulai || ""); // Changed from eventStartDate
  apiFormData.append("tgl_selesai", tgl_selesai || ""); // Changed from eventEndDate
  apiFormData.append("kontak_penyelenggara", kontak_penyelenggara || "");

  console.log("Form data extracted:", {
    nama_event,
    deskripsi,
    kategori,
    tema,
    status_event,
    tgl_listing,
    tipe_tiket,
    harga_tiket,
    kuota,
    kota,
    tempat,
    nama_penyelenggara,
    tgl_mulai,
    tgl_selesai,
    kontak_penyelenggara,
    image_provided: gambar instanceof File && !!gambar.name,
  });

  console.log("Sending request to API...");
  try {
    const response = await fetch(
      "https://project-stepbek-backend-production.up.railway.app/api/events",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: apiFormData,
      }
    );

    const responseText = await response.text();
    console.log("Raw API response:", responseText);

    let responseBody: any;
    try {
      responseBody = JSON.parse(responseText);
    } catch (e) {
      console.error("Error parsing response as JSON:", e);
      return { error: "Invalid response from server" };
    }

    if (!response.ok) {
      console.error("API Error:", responseBody);
      return { error: responseBody.message || "Failed to create event" };
    }

    console.log("Event created successfully:", responseBody);
    redirect("/dashboard");
    return { success: true, data: responseBody };
  } catch (error) {
    console.error("Error creating event:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}

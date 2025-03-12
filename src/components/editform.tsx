/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";

// Update the component to handle the nested data structure and include all fields
export default function EditForm({ data }: { data?: any }) {
  // Extract the actual event data from the nested structure
  const eventData = data?.data || {};

  // Format dates for datetime-local input (YYYY-MM-DDThh:mm)
  const formatDateForInput = (dateString: string | null) => {
    if (!dateString) return "";
    // If the date doesn't have time component, add it
    if (dateString.length === 10) return `${dateString}T00:00`;
    return dateString;
  };

  // Default values when no data is provided
  const defaultData = {
    nama_event: "",
    gambar: "",
    kategori: "",
    tema: "",
    deskripsi: "",
    nama_penyelenggara: "",
    tgl_listing: "",
    harga_tiket: 0,
    kuota: 0,
  };

  // Use provided data or default values
  const [formData, setFormData] = useState({
    ...defaultData,
    ...eventData,
    // Format dates for input fields
    tgl_listing: formatDateForInput(eventData.tgl_listing),
    // Handle null values
    gambar: eventData.gambar || "",
  });

  console.log("Form data initialized with:", formData);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  }

  // Update the handleSubmit function to only include allowed fields
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Only include fields that the API allows to be updated
    const updateData = {
      nama_event: formData.nama_event,
      gambar: formData.gambar,
      kategori: formData.kategori,
      tema: formData.tema,
      deskripsi: formData.deskripsi,
      nama_penyelenggara: formData.nama_penyelenggara,
      tgl_listing: formData.tgl_listing,
      harga_tiket: formData.harga_tiket,
      kuota: formData.kuota,
    };

    console.log("Form submitted with allowed fields only:", updateData);
    // Here you would send the updateData to your API
  }

  function handleCancel() {
    console.log("Edit canceled");
    // Here you would redirect back or reset the form
  }

  function handleDelete() {
    console.log("Delete event requested for ID:", eventData.id);
    // Here you would call the delete API
    if (confirm("Apakah Anda yakin ingin menghapus event ini?")) {
      // Proceed with deletion
    }
  }

  return (
    <section className="pt-24">
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        <CardHeader className="">
          <CardTitle className="text-2xl font-bold text-center">
            Edit Event
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Name */}
              <div className="space-y-2">
                <Label htmlFor="nama_event" className="font-medium">
                  Nama Event <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nama_event"
                  type="text"
                  name="nama_event"
                  value={formData.nama_event}
                  onChange={handleChange}
                  placeholder="Masukkan nama event"
                  required
                  className="w-full"
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="kategori" className="font-medium">
                  Kategori <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="kategori"
                  type="text"
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  placeholder="Masukkan kategori"
                  required
                  className="w-full"
                />
              </div>

              {/* Theme */}
              <div className="space-y-2">
                <Label htmlFor="tema" className="font-medium">
                  Tema <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="tema"
                  type="text"
                  name="tema"
                  value={formData.tema}
                  onChange={handleChange}
                  placeholder="Masukkan tema"
                  required
                  className="w-full"
                />
              </div>

              {/* Organizer */}
              <div className="space-y-2">
                <Label htmlFor="nama_penyelenggara" className="font-medium">
                  Nama Penyelenggara <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nama_penyelenggara"
                  type="text"
                  name="nama_penyelenggara"
                  value={formData.nama_penyelenggara}
                  onChange={handleChange}
                  placeholder="Masukkan nama penyelenggara"
                  required
                  className="w-full"
                />
              </div>

              {/* Listing Date */}
              <div className="space-y-2">
                <Label htmlFor="tgl_listing" className="font-medium">
                  Tanggal Listing <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="tgl_listing"
                  type="datetime-local"
                  name="tgl_listing"
                  value={formData.tgl_listing}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="gambar" className="font-medium">
                  URL Gambar
                </Label>
                <Input
                  id="gambar"
                  type="text"
                  name="gambar"
                  value={formData.gambar}
                  onChange={handleChange}
                  placeholder="Masukkan URL gambar"
                  className="w-full"
                />
              </div>

              {/* Ticket Price */}
              <div className="space-y-2">
                <Label htmlFor="harga_tiket" className="font-medium">
                  Harga Tiket <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="harga_tiket"
                  type="number"
                  name="harga_tiket"
                  value={formData.harga_tiket}
                  onChange={handleChange}
                  placeholder="0"
                  required
                  className="w-full"
                />
              </div>

              {/* Quota */}
              <div className="space-y-2">
                <Label htmlFor="kuota" className="font-medium">
                  Kuota <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="kuota"
                  type="number"
                  name="kuota"
                  value={formData.kuota}
                  onChange={handleChange}
                  placeholder="0"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="deskripsi" className="font-medium">
                Deskripsi <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="deskripsi"
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Masukkan deskripsi event"
                required
                className="w-full min-h-[120px]"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between pt-4 space-x-4">
          <Button
            variant="destructive"
            type="button"
            onClick={handleDelete}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Hapus
          </Button>
          <div className="flex space-x-4">
            <Button variant="outline" type="button" onClick={handleCancel}>
              Batal
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

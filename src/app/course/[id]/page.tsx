import Image from "next/image";
import Link from "next/link";
import { Clock, Users, MessageSquare, Award, ChevronRight } from "lucide-react";

export default async function Course() {
  return (
    <section className="min-h-screen flex flex-col pt-12">
      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-8 pt-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/courses" className="hover:text-gray-900">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-900">
              Advanced 3D Modeling in Blender
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Course Image and Title */}
            <div className="lg:w-2/3">
              <div className="relative rounded-xl overflow-hidden -z-10">
                <Image
                  src="https://placehold.co/600x400"
                  alt="Advanced 3D Modeling in Blender"
                  width={854}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-gray-500">A course by</span>
                <span className="font-medium">Blend Smith</span>
              </div>

              <h1 className="mt-2 text-3xl font-bold">
                Advanced 3D Modelling in Blender
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolorem accusamus nihil ab dicta expedita aliquid temporibus
                quas nulla sequi eius reprehenderit pariatur doloremque
                blanditiis corrupti voluptates cumque obcaecati, corporis ullam
                magnam quaerat error a repellendus! Vitae consequuntur iure ea!
                Repellendus eum minima veniam expedita voluptatum, nostrum dolor
                cumque ipsum.
              </p>
            </div>

            {/* Right Column - Course Details */}
            <div className="lg:w-1/3 h-fit bg-white p-6 rounded-xl border">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl font-bold">
                    4,399,000{" "}
                    <span className="text-lg font-medium text-gray-500">
                      IDR
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <Clock className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="text-sm font-medium">8h 25m</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <Users className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Students</div>
                      <div className="text-sm font-medium">3,215</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="bg-gray-100 p-2 rounded-md mt-1">
                      <Award className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Certificate</div>
                      <div className="text-sm font-medium">
                        Upon completion of the course
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="bg-gray-100 p-2 rounded-md mt-1">
                      <MessageSquare className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Critique session
                      </div>
                      <div className="text-sm font-medium">
                        Individual recordings
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="bg-gray-100 p-2 rounded-md mt-1">
                      <Clock className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">
                        Additional resources
                      </div>
                      <div className="text-sm font-medium">12 files</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="w-full bg-primary text-foreground py-3 rounded-md font-medium">
                    Enroll a course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

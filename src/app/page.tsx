"use server";
import { cookies } from "next/headers";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const name = cookieStore.get("name")?.value;

  const userData = {
    token: token,
    name: name,
  };

  return (
    <div>
      <Hero />
      <Banner />
    </div>
  );
}

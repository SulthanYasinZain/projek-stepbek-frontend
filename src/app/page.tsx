"use server";
import { cookies } from "next/headers";
import Navbar from "../components/Navbar";

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
      <Navbar userData={userData} />
    </div>
  );
}

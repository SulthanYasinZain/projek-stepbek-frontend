"use server";

import { BackgroundLines } from "@/components/ui/background-lines";
import { cookies } from "next/headers";

export default async function community() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const name = cookieStore.get("name")?.value;

  const userData = {
    token: token,
    name: name,
  };
  return (
    <>
      <BackgroundLines
        children={
          <p className="flex items-center justify-center h-screen">
            Be Part of a Thriving Community of 5000+ Learners!
          </p>
        }
      />
    </>
  );
}

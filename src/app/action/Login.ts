/* eslint-disable  @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(prevState: any, formData: FormData | null) {
  if (!formData) {
    return { error: "Email and Password are required" };
  }

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  };

  const response = await fetch(
    "https://project-stepbek-backend-production.up.railway.app/api/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    return { error: "Username or Password is incorrect" };
  }

  const responseBody = await response.json();
  const { token, user } = responseBody;

  const cookieStore = await cookies();
  cookieStore.set("token", token, options);
  cookieStore.set("name", user.name, options);

  redirect("/dashboard");
}

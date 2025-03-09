/* eslint-disable  @typescript-eslint/no-explicit-any */
"use server";

import { redirect } from "next/navigation";

export default async function register(prevState: any, formData: FormData) {
  if (!formData) {
    {
      return { error: "Invalid form submission" };
    }
  }
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await fetch(
      "https://project-stepbek-backend-production.up.railway.app/api/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const responseBody = await response.json();

    if (!response.ok) {
      if (responseBody.message.includes("The email has already been taken")) {
        return { error: "Email already taken" };
      } else {
        return {
          error: `Password Must Be 8 Characters include Uppercase,Lowercase, number and special characters",`,
        };
      }
    }
  } catch (error: any) {
    console.error(error);
    return { error: "An unexpected error occurred. Please try again." };
  }

  redirect("/login");
}

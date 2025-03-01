"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
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

  const responseBody = await response.json();
  const { token, user } = responseBody;

  if (response.ok) {
    (await cookies()).set("token", token, options);
    (await cookies()).set("name", user.name, options);
    redirect("/dashboard");
  }

  if (!response.ok) {
    if (
      responseBody.message.includes("The provided credentials are incorrect.")
    ) {
      return { error: "Email already taken" };
    }
  }

  return responseBody;
}

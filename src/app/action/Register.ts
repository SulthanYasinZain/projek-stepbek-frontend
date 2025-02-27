"use server";

export default async function register(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { error: "All fields are required." };
  }

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

    if (response.ok) {
      return { success: true };
    } else {
      if (responseBody.message.includes("The email has already been taken")) {
        return { error: "Email already taken" };
      }
      if (
        responseBody.message.includes("The password field format is invalid.")
      ) {
        return {
          error:
            "Password Must Be 8 Characters include Uppercase,Lowercase, number and special characters",
        };
      }
      return {
        error: `Registration failed: ${response.status} - ${responseBody.message}`,
      };
    }
  } catch (error: any) {
    console.error(error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}

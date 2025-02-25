import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

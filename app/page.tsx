import { redirect } from "next/navigation";
import { LoginPage } from "@/components/login-page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return <LoginPage />;
}

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard-layout";
import { WelcomeSection } from "@/components/welcome-section";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <DashboardLayout>
      <WelcomeSection user={session.user} />
    </DashboardLayout>
  );
}

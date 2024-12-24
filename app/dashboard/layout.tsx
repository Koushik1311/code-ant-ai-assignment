import LeftBar from "@/components/dashboard/LeftBar";
import MobileNavBar from "@/components/dashboard/MobileNavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <LeftBar />
      </div>
      <div className="lg:hidden">
        <MobileNavBar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
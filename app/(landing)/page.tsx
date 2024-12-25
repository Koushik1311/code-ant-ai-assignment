import Logo from "@/components/global/Logo";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <Logo iconWidth={36} iconHeight={40} brandSize="text-4xl" />

      <div className="flex items-center justify-center gap-4">
        <Link
          href="/sign-in"
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Sign in
        </Link>
        <Link
          href="/dashboard"
          className="px-4 py-2 border border-gray-950 rounded-lg bg-gray-950 text-white hover:bg-gray-800 hover:border-gray-800 transition-colors duration-300"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}

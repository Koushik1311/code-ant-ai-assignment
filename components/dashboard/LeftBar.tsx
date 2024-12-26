"use client";

import { dashboardLinks } from "@/constants/dashboard-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserSelect from "./UserSelect";
import Logo from "../global/Logo";

export default function LeftBar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col items-start justify-between px-4 pt-5 pb-6 min-h-screen border-r border-[#E9EAEB]">
        {/* top */}
        <div className="flex flex-col items-start gap-5">
          {/* logo */}
          <Logo iconWidth={28} iconHeight={32} brandSize="text-2xl" />

          {/* user selection */}
          <UserSelect />

          {/* links */}
          <ul className="flex flex-col items-start w-full">
            {dashboardLinks.slice(0, 5).map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center justify-start gap-2 text-base font-semibold px-3 py-3 w-full rounded-md text-[#414651]",
                    pathname === link.href
                      ? "bg-[#1570EF] text-white"
                      : "hover:bg-gray-200 transition-colors duration-300"
                  )}
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom */}
        <ul className="flex flex-col items-start justify-between w-full">
          {dashboardLinks.slice(5, 7).map((link, index) => (
            <li key={index} className="w-full">
              <Link
                href={link.href}
                className="flex items-center justify-start gap-2 text-base font-semibold px-3 py-3 w-full rounded-md hover:bg-gray-200 transition-colors duration-300 text-[#414651]"
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

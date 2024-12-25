import {
  BookText,
  Cloud,
  CodeXml,
  House,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";

export const dashboardLinks = [
  {
    label: "Repositories",
    icon: House,
    href: "/dashboard",
  },
  {
    label: "Ai Code Review",
    icon: CodeXml,
    href: "/dashboard/ai-code-review",
  },
  {
    label: "Cloud Security",
    icon: Cloud,
    href: "/dashboard/cloud-security",
  },
  {
    label: "How to Use",
    icon: BookText,
    href: "/dashboard/how-to-use",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },

  {
    label: "Support",
    icon: Phone,
    href: "#",
  },
  {
    label: "Log out",
    icon: LogOut,
    href: "/sign-in",
  },
];

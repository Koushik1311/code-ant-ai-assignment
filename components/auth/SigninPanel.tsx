"use client";

import {
  socialSigninSaaS,
  socialSigninSelfHosted,
} from "@/constants/social-signin";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../global/Logo";

export default function SigninPanel() {
  const [buttonTab, setButtonTab] = useState<string>("saas");

  return (
    <div className="max-w-2xl flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center border-b">
        <Logo iconWidth={35} iconHeight={40} brandSize="text-3xl" />

        <h1 className="text-3xl font-semibold mt-9">Welcome to CodeAnt AI</h1>

        {/* Animated tabs */}
        <div className="grid grid-cols-2 w-full bg-[#E9EAEB] rounded-md mt-5 mb-9 relative">
          {/* Animated background */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#1570EF] rounded-lg border-2"
            animate={{
              x: buttonTab === "saas" ? "0%" : "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />

          {/* Tab buttons */}
          <button
            className={cn(
              "text-xl font-semibold py-4 flex items-center justify-center relative z-10 transition-colors duration-300",
              buttonTab === "saas" ? "text-white" : "text-[#414651]"
            )}
            onClick={() => setButtonTab("saas")}
          >
            SaaS
          </button>
          <button
            className={cn(
              "text-xl font-semibold py-4 flex items-center justify-center relative z-10 transition-colors duration-300",
              buttonTab === "self-hosted" ? "text-white" : "text-[#414651]"
            )}
            onClick={() => setButtonTab("self-hosted")}
          >
            Self Hosted
          </button>
        </div>
      </div>

      {/* sign-in options */}
      <ul className="flex flex-col items-center w-full md:max-w-md gap-4 my-6">
        {buttonTab === "saas"
          ? socialSigninSaaS.map((social) => (
              <li key={social.label} className="w-full">
                <Link
                  href={social.href}
                  className="flex items-center justify-center gap-4 py-4 border rounded-md w-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                  />
                  <span className="#171717">Sign in with {social.label}</span>
                </Link>
              </li>
            ))
          : socialSigninSelfHosted.map((social) => (
              <li key={social.label} className="w-full">
                <Link
                  href={social.href}
                  className="flex items-center justify-center gap-4 py-4 border rounded-md w-full hover:bg-gray-200 transition-colors duration-300"
                >
                  {typeof social.icon === "string" ? (
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <social.icon size={20} color="#171717" />
                  )}
                  <span className="#171717">
                    {social.label === "GitLab" ? (
                      <>Self Hosted {social.label}</>
                    ) : (
                      <>Sign in with {social.label}</>
                    )}
                  </span>
                </Link>
              </li>
            ))}
      </ul>

      {/* privacy policy */}
      <p className="text-base font-normal mt-8">
        By signing up you agree to the{" "}
        <Link href="#" className="font-bold hover:underline">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
}

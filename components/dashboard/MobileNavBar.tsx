"use client";

import { Menu, X } from "lucide-react";
import Logo from "../global/Logo";
import { useState } from "react";
import { dashboardLinks } from "@/constants/dashboard-link";
import Link from "next/link";
import UserSelect from "./UserSelect";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed w-screen z-50">
      <div className="w-full flex items-center justify-between p-4 border-b bg-white z-50">
        <Logo
          iconWidth={28.5}
          iconHeight={32}
          brandSize="text-2xl"
          className="justify-start"
        />

        {/* menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative 2-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <X size={28} color="#181D27" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Menu size={28} color="#181D27" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white z-50 absolute top-[69px] w-full pb-6"
            initial={{
              opacity: 0,
              y: -20,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0 0)",
            }}
            exit={{
              opacity: 0,
              y: -20,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* user selection */}
              <UserSelect />
            </motion.div>

            {/* dashboard links */}
            <ul className="flex flex-col w-full">
              {dashboardLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 py-2 px-3 w-full"
                  >
                    <link.icon size={20} color="#414651" />
                    <span className="text-base font-semibold text-[#414651]">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usersList } from "@/data/users-list";

export default function UserSelect() {
  const [user, setUser] = useState<string>("UtkarshDhairyaPanwar");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={cn("relative")}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:w-[202px] px-3 py-2 flex items-center justify-between gap-2 border rounded-md"
      >
        <p className="truncate text-base font-normal">{user}</p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 absolute top-[46px] w-full bg-white z-50 border rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            {usersList.map((user) => (
              <motion.li
                key={user.username}
                className="py-2 w-full cursor-pointer"
                onClick={() => {
                  setUser(user.username);
                  setIsOpen(false);
                }}
              >
                {user.username}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

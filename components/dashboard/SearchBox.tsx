"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        router.push(`/dashboard?search=${search}`);
      } else {
        router.push("/dashboard");
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, router]);

  return (
    <div className="relative mt-4 bg-white">
      <Search
        color="#414651"
        size={18}
        className="absolute top-3 left-[14px]"
      />
      <input
        type="text"
        name="search-repository"
        id="search-repository"
        placeholder="Search Repositories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-[366px] pl-11 py-2 pr-2 border rounded-lg text-base font-normal text-[#181D27] focus:outline-[#181D27]"
      />
    </div>
  );
}

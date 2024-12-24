import { cn } from "@/lib/utils";
import { getDaysPassed } from "@/utils/get-days-passed";
import { Database } from "lucide-react";

interface RepositoryItemProps {
  className?: string;
  repositoryName: string;
  repositorySize: number;
  programmingLanguage: string;
  lastUpdated: string;
  repositoryVisibility: "public" | "private" | string;
}

export default function RepositoryItem({
  className,
  programmingLanguage,
  repositoryName,
  repositorySize,
  lastUpdated,
  repositoryVisibility,
}: RepositoryItemProps) {
  return (
    <div
      className={cn(
        "py-4 px-4 md:px-6 border-t border-b text-[#181D27]",
        className
      )}
    >
      {/* name and visibility */}
      <div className="flex items-center justify-start gap-2">
        <h2 className="text-lg font-medium">{repositoryName}</h2>

        {/* repository vidibility */}
        <span className="text-sm font-normal text-[#175CD3] bg-[#EFF8FF] border border-[#B2DDFF] px-2 h-6 rounded-full">
          {repositoryVisibility}
        </span>
      </div>

      {/* language, size, & last updated */}
      <div className="flex items-center justify-start gap-6">
        {/* programming language */}
        <div className="flex items-center gap-2">
          <span>{programmingLanguage}</span>
          <div className="h-2 w-2 rounded-full bg-[#1570EF]" />
        </div>

        {/* repository size */}
        <div className="flex items-center gap-2">
          <Database size={12} color="#181D27" />
          <span className="text-sm font-normal">{repositorySize} KB</span>
        </div>

        {/* last updated */}
        <p className="text-sm font-normal">
          Updated {getDaysPassed(lastUpdated)}
        </p>
      </div>
    </div>
  );
}

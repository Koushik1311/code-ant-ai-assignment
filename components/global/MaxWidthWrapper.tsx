import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "h-full mx-auto max-w-screen-2xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}
